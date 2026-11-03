// ===== LLWU EXPLORE =====
// Search a word → where it shows up in the research → the ideas it connects to → what it could become in the form.

const EX_SYNONYMS = {
  shame: ["ashamed", "embarrass"],
  hide: ["hiding", "hidden", "hid "],
  hiding: ["hide", "hidden"],
  mirror: ["mirrors", "reflect", "reflection"],
  love: ["loved", "loving", "lovable"],
  embrace: ["hug", "held", "hold", "holding", "cradle"],
  hold: ["held", "holding", "embrace", "hug"],
  lift: ["lifted", "elevat", "rise", "rises", "bigger"],
  sensitive: ["sensitivity", "cry", "vulnerab", "emotional"],
  vulnerable: ["vulnerab", "sensitive", "sensitivity"],
  mother: ["mom", "parent", "family"],
  family: ["mother", "mom", "parent", "sister"],
  body: ["skin", "hair", "weight", "fat", "smile", "flesh"],
  warm: ["warmth", "heat", "glow"],
  heat: ["warm", "warmth"],
  strong: ["strength", "confident", "armor", "capable"],
  armor: ["shell", "strong", "strength", "metal"],
  shell: ["armor", "cage", "contain"],
  cage: ["caging", "shell", "trap", "bars"],
  "too much": ["too loud", "bothersome", "clingy", "enthusiastic", "toned"],
  judge: ["judged", "judging", "evaluat", "criticiz"],
  faith: ["god", "allah", "religio", "prayer", "pray"],
  god: ["faith", "allah", "prayer"],
  touch: ["touched", "contact", "hand"],
  sound: ["heartbeat", "whisper", "song", "music"],
  light: ["projection", "glow", "color", "colour"],
  friend: ["friends", "friendship"],
};

const exTerms = (raw) => {
  const t = raw.trim().toLowerCase();
  if (!t) return [];
  const stem = t.replace(/(ing|ed|es|s)$/, "");
  return [...new Set([t, stem.length > 2 ? stem : t, ...(EX_SYNONYMS[t] || []), ...(EX_SYNONYMS[stem] || [])])];
};
// Short words must match whole words ("god" shouldn't match "good"); longer words match as prefixes ("mirror" → "mirrors")
const exRegex = (terms) => new RegExp(terms.map((t) => {
  const w = t.trim(), e = w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return w.length <= 4 ? "\\b" + e + "(s|es)?\\b" : "\\b" + e;
}).join("|"), "i");
const exMatch = (text, re) => re.test(String(text || ""));

function exHighlight(text, re) {
  return esc(text).replace(new RegExp(re.source, "gi"), "<mark>$&</mark>");
}

function exSearch(raw) {
  const words = exTerms(raw);
  if (!words.length) return null;
  const terms = exRegex(words);

  /* ---- 1. Evidence ---- */
  const evidence = [];
  DATA.quotes.forEach((q) => {
    if (!exMatch(q.text, terms)) return;
    const links = [...new Set(q.t.map((t) => "u-" + t))];
    DATA.undercurrents.forEach((u) => { if (!links.includes("u-" + u.id) && u.evidence.some(([qq, p]) => qq === q.q + 1 && p === q.p)) links.push("u-" + u.id); });
    evidence.push({ key: "e" + evidence.length, text: q.text, src: "Interview · " + q.p, href: "#interviews", links });
  });
  const seen = new Set();
  (DATA.survey?.sections || []).forEach((s) => s.quotes.forEach((text) => {
    if (seen.has(text) || !exMatch(text, terms)) return;
    seen.add(text);
    const links = [];
    const head = text.slice(0, 24).toLowerCase();
    DATA.undercurrents.forEach((u) => { if ((u.survey || []).some((x) => x.toLowerCase().includes(head))) links.push("u-" + u.id); });
    (DATA.survey.findings || []).forEach((f) => { if (f.evidence.toLowerCase().includes(head)) links.push("g-" + f.id); });
    evidence.push({ key: "e" + evidence.length, text, src: "Survey · " + s.name, href: "#survey", links });
  }));
  const sheetRows = (DATA.responses?.rows || []).filter((r) => r.cells.some((c) => exMatch(c, terms))).length;

  /* ---- 2. Ideas ---- */
  const ideas = {};
  const addIdea = (key, type, name, desc, href, own) => { ideas[key] = { key, type, name, desc, href, score: own ? 3 : 0, direct: own }; };
  DATA.undercurrents.forEach((u) => addIdea("u-" + u.id, "Theme", u.name, u.desc, "#undercurrents", exMatch([u.name, u.desc, u.reading, u.provocation].join(" "), terms)));
  DATA.hypotheses.forEach((h, i) => addIdea("h-" + h.id, "Hypothesis " + (i + 1), h.title, h.implication, "#hypotheses", exMatch([h.title, h.body, h.implication].join(" "), terms)));
  (DATA.survey?.findings || []).forEach((f) => addIdea("g-" + f.id, "Finding", f.title, f.stat + " " + f.statLabel, "#survey", exMatch([f.title, f.evidence, f.means, f.statLabel].join(" "), terms)));
  evidence.forEach((e) => e.links.forEach((k) => { if (ideas[k]) ideas[k].score += 1; }));

  // How strongly each undercurrent is touched, directly or through other ideas
  const uWeight = {};
  DATA.undercurrents.forEach((u) => { uWeight[u.id] = ideas["u-" + u.id].score; });
  (DATA.survey?.findings || []).forEach((f) => { const s = ideas["g-" + f.id].score; if (s) f.under.forEach((u) => { uWeight[u] = (uWeight[u] || 0) + s * 0.5; }); });
  DATA.hypotheses.forEach((h) => { const s = ideas["h-" + h.id].score; if (s) (HYP_UNDER[h.id] || []).forEach((u) => { uWeight[u] = (uWeight[u] || 0) + s * 0.5; }); });

  // Keep only the strongest connections so results stay focused
  const ideaAll = Object.values(ideas).filter((i) => i.score > 0).sort((a, b) => b.score - a.score || b.direct - a.direct);
  const topIdea = ideaAll[0]?.score || 0;
  const ideaList = ideaAll.filter((i) => i.score >= Math.max(1, topIdea * 0.34));

  /* ---- 3. Form ---- */
  const forms = DATA.formLab.items.map((f, i) => {
    const own = exMatch([f.name, f.body, f.try].join(" "), terms);
    const score = (own ? 3 : 0) + (f.under || []).reduce((a, u) => a + (uWeight[u] || 0) * 0.5, 0);
    const sec = DATA.formLab.sections.find((s) => s.id === f.type);
    return { key: "f" + i, f, sec: sec ? sec.name : "", score, own };
  }).filter((x) => x.score > 0).sort((a, b) => b.score - a.score || b.own - a.own);
  const topForm = forms[0]?.score || 0;
  forms.splice(0, forms.length, ...forms.filter((x) => x.score >= topForm * 0.45));

  return { terms, evidence, sheetRows, ideaList, forms };
}

/* Does idea k lead to form item f? */
function exIdeaToForm(k, f) {
  const under = f.under || [];
  const [type, ...rest] = k.split("-");
  const id = rest.join("-");
  if (type === "u") return under.includes(id);
  if (type === "t") return under.some((u) => underById(u)?.themes.includes(id));
  if (type === "h") return (HYP_UNDER[id] || []).some((u) => under.includes(u));
  if (type === "g") return (DATA.survey.findings.find((x) => x.id === id)?.under || []).some((u) => under.includes(u));
  return false;
}

let exQuery = "";
const EX_LIMIT = 6;
let exMore = { e: false, i: false, f: false };

function renderExplore() {
  const el = $("#view-explore");
  if (!el) return;
  const chips = ["mirror", "lift", "too much", "hide", "mother", "embrace", "sensitive", "warm", "armor", "body", "faith", "touch"];
  el.innerHTML = `
    <div class="ex-hero">
      <div class="q-title" style="color:var(--accent)">Explore</div>
      <h1>What are you looking for?</h1>
      <p class="muted">Search a word or a feeling. See where it shows up in the research, what ideas it connects to, and what it could become in the form.</p>
      <div class="ex-search">
        <span class="ex-icon">⌕</span>
        <input id="exInput" type="search" autocomplete="off" placeholder="Try mirror, lift, too much…" value="${esc(exQuery)}" />
      </div>
      <div class="ex-suggest">${chips.map((c) => `<button class="chip" data-q="${esc(c)}">${esc(c)}</button>`).join("")}</div>
    </div>
    <div id="exResult"></div>`;
  const input = $("#exInput");
  input.oninput = () => { exQuery = input.value; exMore = { e: false, i: false, f: false }; drawExplore(); };
  $$(".ex-suggest .chip").forEach((c) => (c.onclick = () => { exQuery = c.dataset.q; input.value = exQuery; exMore = { e: false, i: false, f: false }; drawExplore(); }));
  drawExplore();
}

function drawExplore() {
  const box = $("#exResult");
  const r = exSearch(exQuery);
  $$(".ex-suggest .chip").forEach((c) => c.classList.toggle("on", c.dataset.q === exQuery.trim().toLowerCase()));
  if (!r) { box.innerHTML = `<p class="muted ex-empty">Pick a word above, or type your own.</p>`; return; }
  const { terms, evidence, sheetRows, ideaList, forms } = r;
  if (!evidence.length && !ideaList.length && !forms.length) {
    box.innerHTML = `<p class="muted ex-empty">Nothing yet for “${esc(exQuery)}”. Try a simpler word.</p>`;
    return;
  }
  const ev = exMore.e ? evidence : evidence.slice(0, EX_LIMIT);
  const id = exMore.i ? ideaList : ideaList.slice(0, EX_LIMIT);
  const fo = exMore.f ? forms : forms.slice(0, EX_LIMIT);
  const more = (key, total, shown) => total > shown || exMore[key] ? `<button class="ex-more" data-k="${key}">${exMore[key] ? "Show less" : `+ ${total - shown} more`}</button>` : "";
  const typeColor = (t) => t.startsWith("Theme") ? "var(--c-under)" : t.startsWith("Hyp") ? "var(--c-hyp)" : "var(--c-survey)";

  box.innerHTML = `
    <div class="ex-summary">
      <span><b>${evidence.length}</b> quotes</span>
      <span><b>${sheetRows}</b> of ${DATA.responses?.rows.length || 0} survey responses <a href="#responses" id="exSheet">open in sheet →</a></span>
      <span><b>${ideaList.length}</b> connected ideas</span>
      <span><b>${forms.length}</b> form directions</span>
    </div>
    <div class="ex-flow" id="exFlow">
      <svg class="ex-lines" id="exLines"></svg>
      <div class="ex-col">
        <div class="ex-col-h"><span>1</span> Heard in the research</div>
        ${ev.map((e) => `<a class="ex-card ev" href="${e.href}" data-k="${e.key}" data-links="${e.links.join(" ")}">
          <div class="ex-src">${esc(e.src)}</div>
          <div class="ex-quote">“${exHighlight(e.text, terms)}”</div>
        </a>`).join("") || `<p class="muted" style="font-size:13px">No direct quotes. The word shows up in the ideas instead.</p>`}
        ${more("e", evidence.length, ev.length)}
      </div>
      <div class="ex-col">
        <div class="ex-col-h"><span>2</span> Connected ideas</div>
        ${id.map((i) => `<a class="ex-card idea" href="${i.href}" data-k="${i.key}">
          <div class="ex-src" style="color:${typeColor(i.type)}">${esc(i.type)}</div>
          <div class="ex-name">${exHighlight(i.name, terms)}</div>
          <div class="ex-desc">${exHighlight(i.desc, terms)}</div>
        </a>`).join("")}
        ${more("i", ideaList.length, id.length)}
      </div>
      <div class="ex-col">
        <div class="ex-col-h"><span>3</span> Becomes form</div>
        ${fo.map((x) => `<a class="ex-card form" href="#formlab" data-k="${x.key}">
          <div class="ex-src">${esc(x.sec)}${x.f.src === "survey" ? " · from survey" : ""}</div>
          <div class="ex-name">${exHighlight(x.f.name, terms)}</div>
          <div class="ex-desc">${exHighlight(x.f.body, terms)}</div>
          <div class="ex-try"><span>Try</span>${esc(x.f.try)}</div>
        </a>`).join("") || `<p class="muted" style="font-size:13px">No form ideas connected yet.</p>`}
        ${more("f", forms.length, fo.length)}
      </div>
    </div>`;

  $("#exSheet").onclick = () => { respQuery = exQuery; renderResponses(); };
  $$("#exResult .ex-more").forEach((b) => (b.onclick = () => { exMore[b.dataset.k] = !exMore[b.dataset.k]; drawExplore(); }));

  // Edges between visible cards
  const edges = [];
  ev.forEach((e) => e.links.forEach((k) => { if (id.some((i) => i.key === k)) edges.push([e.key, k, "ev"]); }));
  id.forEach((i) => fo.forEach((x) => { if (exIdeaToForm(i.key, x.f)) edges.push([i.key, x.key, "fo"]); }));
  exEdges = edges;
  requestAnimationFrame(drawExLines);

  $$("#exFlow .ex-card").forEach((c) => {
    c.onmouseenter = () => exFocus(c.dataset.k);
    c.onmouseleave = () => exFocus(null);
  });
}

let exEdges = [];
function drawExLines() {
  const flow = $("#exFlow"), svg = $("#exLines");
  if (!flow || !svg || !flow.offsetParent) return;
  const fr = flow.getBoundingClientRect();
  svg.setAttribute("width", fr.width); svg.setAttribute("height", fr.height);
  const card = (k) => flow.querySelector(`.ex-card[data-k="${k}"]`);
  svg.innerHTML = exEdges.map(([a, b, kind]) => {
    const A = card(a)?.getBoundingClientRect(), B = card(b)?.getBoundingClientRect();
    if (!A || !B) return "";
    const x1 = A.right - fr.left, y1 = A.top + A.height / 2 - fr.top, x2 = B.left - fr.left, y2 = B.top + B.height / 2 - fr.top;
    const mx = (x1 + x2) / 2;
    return `<path class="ex-line ${kind}" data-a="${a}" data-b="${b}" d="M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}"/>`;
  }).join("");
}

function exFocus(k) {
  const flow = $("#exFlow");
  if (!flow) return;
  if (!k) { flow.classList.remove("focus"); $$("#exFlow .hl").forEach((x) => x.classList.remove("hl")); return; }
  // walk the chain both ways so hovering a quote lights up its ideas and their form
  const lit = new Set([k]);
  if (k.startsWith("e") || k.startsWith("f")) {
    const fwd = k.startsWith("e");
    let grew = true;
    while (grew) {
      grew = false;
      exEdges.forEach(([a, b]) => {
        if (fwd && lit.has(a) && !lit.has(b)) { lit.add(b); grew = true; }
        if (!fwd && lit.has(b) && !lit.has(a)) { lit.add(a); grew = true; }
      });
    }
  } else {
    exEdges.forEach(([a, b]) => { if (b === k) lit.add(a); if (a === k) lit.add(b); });
  }
  flow.classList.add("focus");
  $$("#exFlow .ex-card").forEach((c) => c.classList.toggle("hl", lit.has(c.dataset.k)));
  $$("#exFlow .ex-line").forEach((p) => p.classList.toggle("hl", lit.has(p.dataset.a) && lit.has(p.dataset.b)));
}

window.addEventListener("resize", () => { if ($("#view-explore")?.classList.contains("active")) drawExLines(); });
window.addEventListener("hashchange", () => { if (location.hash === "#explore") setTimeout(drawExLines, 30); });

/* Sidebar search → Explore */
$("#search").addEventListener("input", (e) => {
  exQuery = e.target.value;
  if (location.hash !== "#explore") location.hash = "explore";
  const input = $("#exInput");
  if (input) input.value = exQuery;
  exMore = { e: false, i: false, f: false };
  drawExplore();
  setTimeout(drawExLines, 40);
});

renderExplore();
if (location.hash === "#explore") setTimeout(drawExLines, 40);
