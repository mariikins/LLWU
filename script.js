// ===== LLWU SCRIPT =====
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const themeName = (id) => DATA.themes.find((t) => t.id === id)?.name || id;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ---------- Routing ---------- */
function show(view) {
  $$(".view").forEach((v) => v.classList.remove("active"));
  $$(".nav-link").forEach((l) => l.classList.toggle("active", l.dataset.view === view));
  const el = $("#view-" + view);
  if (el) el.classList.add("active");
  $("#sidebar").classList.remove("open");
  if (view === "graph") { resizeGraph(); setTimeout(fit, 50); }
}
window.addEventListener("hashchange", () => show(location.hash.slice(1) || "graph"));
$("#menuBtn").onclick = () => $("#sidebar").classList.toggle("open");

/* ---------- Quote card ---------- */
function quoteHTML(q, showQ = false) {
  return `
    <div class="quote">“${esc(q.text)}”
      <div class="quote-meta">— ${q.p}${showQ ? ` · Q${q.q + 1}` : ""}
        ${q.t.map((t) => `<span class="tag theme">${themeName(t)}</span>`).join("")}
      </div>
    </div>`;
}

/* ---------- Overview ---------- */
function renderOverview() {
  const p = DATA.project;
  $("#view-overview").innerHTML = `
    <header class="view-head"><h1>${p.title}</h1><p class="muted">${p.form}</p></header>
    <p class="quote">${p.statement}</p>
    <h2>Questions</h2>
    ${p.questions.map((q) => `<p>— ${q}</p>`).join("")}
    ${DATA.embrace ? `<h2>The Embrace</h2><div class="card embrace-card"><p>${DATA.embrace.concept}</p>${embraceSplit()}</div>` : ""}
    <h2>Community</h2><p>${p.community}</p>
    <h2>Interaction concept</h2>
    <div class="grid">${p.interaction.map((i) => `<div class="card">${i}</div>`).join("")}</div>
    <h2>At a glance</h2>
    <div class="grid">
      <div class="card"><h3>${DATA.participants.length}</h3><span class="muted">participants</span></div>
      <div class="card"><h3>${DATA.quotes.length}</h3><span class="muted">quotes</span></div>
      <div class="card"><h3>${DATA.themes.length}</h3><span class="muted">themes</span></div>
      <div class="card"><h3>${DATA.hypotheses.length}</h3><span class="muted">hypotheses</span></div>
    </div>`;
}

/* ---------- Interviews ---------- */
let filterP = "All";
function embraceSplit() {
  const e = DATA.embrace;
  if (!e) return "";
  return `<div class="embrace-split">
    <div class="cage"><span>Caging embrace</span>${e.caging.map((x) => `<div>${x}</div>`).join("")}</div>
    <div class="lift"><span>Elevating embrace</span>${e.elevating.map((x) => `<div>${x}</div>`).join("")}</div>
  </div>`;
}

function embraceGuide() {
  const e = DATA.embrace;
  if (!e) return "";
  let n = 0;
  return `<details class="card embrace-card guide" open>
    <summary><span class="q-title" style="color:var(--c-embrace)">Round 2 · interview guide</span><h2 style="margin:2px 0 0">The Embrace</h2></summary>
    <p class="muted" style="margin:8px 0 4px">${e.concept}</p>
    ${e.questions.map((s) => `<h3 style="margin-top:16px">${s.section}</h3><ol start="${n + 1}">${s.qs.map((q) => { n++; return `<li>${q}</li>`; }).join("")}</ol>`).join("")}
  </details>`;
}

function renderInterviews() {
  $("#interviewFilters").innerHTML = ["All", ...DATA.participants]
    .map((p) => `<button class="chip ${p === filterP ? "on" : ""}" data-p="${p}">${p}</button>`)
    .join("");
  $$("#interviewFilters .chip").forEach((c) => (c.onclick = () => { filterP = c.dataset.p; renderInterviews(); }));

  $("#interviewList").innerHTML = embraceGuide() + DATA.questions
    .map((qt, i) => {
      const qs = DATA.quotes.filter((q) => q.q === i && (filterP === "All" || q.p === filterP));
      return `<div class="q-block">
        <div class="q-title">${i < 5 ? "Part I · The Human Problem" : "Part II · The Abyss"} — Q${i + 1}</div>
        <div class="q-text">${qt}</div>
        ${qs.map((q) => quoteHTML(q)).join("")}
      </div>`;
    })
    .join("");
}

/* ---------- Themes ---------- */
function renderThemes() {
  $("#themeGrid").innerHTML = DATA.themes
    .map((t) => {
      const qs = DATA.quotes.filter((q) => q.t.includes(t.id));
      return `<div class="card" id="theme-${t.id}">
        <h3>${t.name} <span class="muted">· ${qs.length}</span></h3>
        <p class="muted">${t.desc}</p>
        ${qs.map((q) => `<div class="quote" style="font-size:16px">“${esc(q.text)}”<div class="quote-meta">— ${q.p}</div></div>`).join("")}
      </div>`;
    })
    .join("");
}

/* ---------- Hypotheses ---------- */
function renderHyp() {
  $("#hypList").innerHTML = DATA.hypotheses
    .map((h, i) => `<div class="card" style="margin-bottom:14px">
      <div class="q-title">Hypothesis ${i + 1}</div>
      <h2 style="margin-top:4px">${h.title}</h2>
      <p>${h.body}</p>
      <p style="margin-top:10px"><strong>Design implication:</strong> ${h.implication}</p>
      <div style="margin-top:10px">${h.themes.map((t) => `<span class="tag theme">${themeName(t)}</span>`).join("")}</div>
    </div>`)
    .join("");
}

/* ---------- Case studies ---------- */
function renderCases() {
  $("#caseGrid").innerHTML = DATA.caseStudies
    .map((c) => `<div class="card">
      <h3><a href="${c.url}" target="_blank" rel="noopener">${c.name} ↗</a></h3>
      <div>${c.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      <p class="muted" style="margin-top:8px">${c.notes || "Add notes in data.js"}</p>
    </div>`)
    .join("");
}

/* ---------- Undercurrents page ---------- */
const evQuote = ([q, p]) => DATA.quotes.find((x) => x.q === q - 1 && x.p === p);
const theoryById = (id) => DATA.theory.find((t) => t.id === id);
const underById = (id) => DATA.undercurrents.find((u) => u.id === id);

function renderUnder() {
  $("#underList").innerHTML = DATA.undercurrents
    .map((u) => {
      const quotes = u.evidence.map(evQuote).filter(Boolean);
      const echoes = DATA.echoes.filter((e) => e.under === u.id);
      return `<div class="card under-card" id="under-${u.id}">
        <div class="q-title">Undercurrent</div>
        <h2 style="margin-top:2px">${u.name}</h2>
        <p>${u.desc}</p>
        <p class="muted" style="margin-top:10px">${esc(u.reading)}</p>
        ${quotes.map((q) => `<div class="quote" style="font-size:17px">“${esc(q.text)}”<div class="quote-meta">— ${q.p} · Q${q.q + 1}</div></div>`).join("")}
        ${echoes.length ? `<div class="echo-box">${echoes.map((e) => `<div><strong>Echo · ${e.name}:</strong> ${e.note}</div>`).join("")}</div>` : ""}
        <div class="provocation"><span>Design provocation</span>${u.provocation}</div>
        <div style="margin-top:10px">
          ${u.theory.map((t) => `<span class="tag theory">${theoryById(t)?.name}</span>`).join("")}
          ${u.themes.map((t) => `<span class="tag theme">${themeName(t)}</span>`).join("")}
        </div>
      </div>`;
    })
    .join("");

  $("#theoryGrid").innerHTML = DATA.theory
    .map((t) => {
      const used = DATA.undercurrents.filter((u) => u.theory.includes(t.id));
      return `<div class="card">
        <h3>${t.name}</h3>
        <div class="muted" style="font-size:13px;margin-bottom:6px">${t.who}</div>
        <p>${esc(t.line)}</p>
        <div style="margin-top:8px">${used.map((u) => `<span class="tag under">${u.name}</span>`).join("")}</div>
      </div>`;
    })
    .join("");
}

/* ---------- Form lab ---------- */
const STATUS_KEY = "llwu-status";
const STATUSES = ["idea", "testing", "done", "cut"];
function loadStatus() { try { return JSON.parse(localStorage.getItem(STATUS_KEY)) || {}; } catch { return {}; } }
function saveStatus(s) { try { localStorage.setItem(STATUS_KEY, JSON.stringify(s)); } catch {} }
let formSection = "all";

function swatchMeters() {
  return DATA.swatches
    .map((s) => {
      const bars = Object.entries(s.reactions)
        .map(([k, v]) => {
          const pct = s.total ? Math.round((v / s.total) * 100) : 0;
          return `<div class="muted" style="font-size:12px">${k} · ${pct}%</div><div class="meter"><span style="width:${pct}%"></span></div>`;
        })
        .join("");
      return `<div class="card">
        ${s.img ? `<img class="swatch-img" src="${s.img}" alt="${esc(s.name)}">` : `<div class="swatch-img">add image</div>`}
        <h3>${s.name}</h3>
        <p class="muted" style="margin-bottom:10px">${s.notes} · ${s.total} testers</p>
        ${bars}
      </div>`;
    })
    .join("");
}

function renderForm() {
  const secs = DATA.formLab.sections;
  const status = loadStatus();

  $("#formFilters").innerHTML = [{ id: "all", name: "All" }, ...secs]
    .map((s) => `<button class="chip ${s.id === formSection ? "on" : ""}" data-s="${s.id}">${s.name}</button>`)
    .join("");
  $$("#formFilters .chip").forEach((c) => (c.onclick = () => { formSection = c.dataset.s; renderForm(); }));

  const counts = STATUSES.map((st) => `${st}: ${DATA.formLab.items.filter((i) => (status[i.name] || "idea") === st).length}`).join(" · ");
  $("#formCounts").textContent = counts;

  $("#formSections").innerHTML = secs
    .filter((s) => formSection === "all" || formSection === s.id)
    .map((s) => {
      const items = DATA.formLab.items.filter((i) => i.type === s.id);
      return `<div class="form-section">
        <h2>${s.name}</h2>
        <p class="muted" style="margin-bottom:14px">${s.desc}</p>
        <div class="grid">
          ${items.map((i) => {
            const st = status[i.name] || "idea";
            return `<div class="card form-card st-${st}">
              <button class="pill ${st}" data-name="${esc(i.name)}" title="Click to change status">${st}</button>
              <h3>${esc(i.name)}</h3>
              <p>${esc(i.body)}</p>
              <p class="try"><span>Try</span>${esc(i.try)}</p>
              <div>${(i.under || []).map((u) => `<a class="tag under" href="#undercurrents" data-under="${u}">${underById(u)?.name || u}</a>`).join("")}</div>
            </div>`;
          }).join("")}
        </div>
        ${s.id === "material" ? `<h3 style="margin:22px 0 10px">Tester reactions</h3><div class="grid">${swatchMeters()}</div>` : ""}
      </div>`;
    })
    .join("");

  $$("#formSections .pill").forEach((p) => (p.onclick = () => {
    const s = loadStatus();
    const cur = s[p.dataset.name] || "idea";
    s[p.dataset.name] = STATUSES[(STATUSES.indexOf(cur) + 1) % STATUSES.length];
    saveStatus(s);
    renderForm();
  }));
  $$("#formSections [data-under]").forEach((a) => (a.onclick = () => {
    setTimeout(() => document.getElementById("under-" + a.dataset.under)?.scrollIntoView({ behavior: "smooth" }), 60);
  }));
}

/* ---------- Notes (localStorage) ---------- */
const NOTE_KEY = "llwu-notes";
function loadNotes() { try { return JSON.parse(localStorage.getItem(NOTE_KEY)) || []; } catch { return []; } }
function saveNotes(n) { try { localStorage.setItem(NOTE_KEY, JSON.stringify(n)); } catch {} }

function linkify(text) {
  return esc(text).replace(/\[\[(.+?)\]\]/g, (_, name) => {
    const t = DATA.themes.find((x) => x.name.toLowerCase() === name.toLowerCase());
    return t ? `<span class="wikilink" data-theme="${t.id}">${name}</span>` : `<span class="wikilink">${name}</span>`;
  }).replace(/\n/g, "<br>");
}

function pinnedNotes() {
  return (DATA.pinnedNotes || []).map((n) => `<div class="card embrace-card">
    <div class="q-title" style="color:var(--c-embrace)">Pinned</div>
    <h3>${esc(n.title)}</h3>
    <p>${linkify(n.body)}</p>
    <div style="margin-top:8px">${n.tags.map((t) => `<span class="tag">#${esc(t)}</span>`).join("")}</div>
  </div>`).join("");
}

function renderNotes() {
  const notes = loadNotes();
  $("#noteList").innerHTML = pinnedNotes() + (notes.length
    ? notes.map((n, i) => `<div class="card">
        <button class="del" data-i="${i}" title="Delete">×</button>
        <h3>${esc(n.title)}</h3>
        <div class="muted" style="font-size:12px;margin-bottom:8px">${new Date(n.date).toLocaleDateString()}</div>
        <p>${linkify(n.body)}</p>
        <div style="margin-top:8px">${n.tags.map((t) => `<span class="tag">#${esc(t)}</span>`).join("")}</div>
      </div>`).join("")
    : (DATA.pinnedNotes?.length ? "" : `<p class="muted">No notes yet.</p>`));

  $$("#noteList .del").forEach((b) => (b.onclick = () => {
    const n = loadNotes(); n.splice(+b.dataset.i, 1); saveNotes(n); renderNotes();
  }));
  $$("#noteList .wikilink[data-theme]").forEach((w) => (w.onclick = () => {
    location.hash = "themes";
    setTimeout(() => document.getElementById("theme-" + w.dataset.theme)?.scrollIntoView({ behavior: "smooth" }), 50);
  }));
}

$("#noteForm").onsubmit = (e) => {
  e.preventDefault();
  const notes = loadNotes();
  notes.unshift({
    title: $("#noteTitle").value.trim(),
    body: $("#noteBody").value.trim(),
    tags: $("#noteTags").value.split(",").map((t) => t.trim()).filter(Boolean),
    date: Date.now(),
  });
  saveNotes(notes);
  e.target.reset();
  renderNotes();
};

$("#exportNotes").onclick = () => {
  const blob = new Blob([JSON.stringify(loadNotes(), null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "llwu-notes.json";
  a.click();
};

/* ---------- Search ---------- */
$("#search").addEventListener("input", (e) => {
  const term = e.target.value.trim().toLowerCase();
  if (!term) return;
  location.hash = "interviews";
  filterP = "All";
  renderInterviews();
  $$("#interviewList .q-block").forEach((b) => {
    b.style.display = b.textContent.toLowerCase().includes(term) ? "" : "none";
  });
});

/* ---------- Graph (Obsidian-style force layout) ---------- */
const canvas = $("#graph");
const ctx = canvas.getContext("2d");
const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
let W, H, DPR = window.devicePixelRatio || 1;
let ALL = [], ALL_LINKS = [], BY_ID = {};
let nodes = [], links = [], hover = null, drag = null, panning = null, moved = false;
const view = { x: 0, y: 0, k: 1 };

const TYPES = {
  core: { color: "--c-core", label: "Core" },
  embrace: { color: "--c-embrace", label: "Embrace" },
  person: { color: "--c-person", label: "Participants" },
  theme: { color: "--c-theme", label: "Themes" },
  hyp: { color: "--c-hyp", label: "Hypotheses" },
  under: { color: "--c-under", label: "Undercurrents" },
  echo: { color: "--c-echo", label: "Echoes" },
  theory: { color: "--c-theory", label: "Theory" },
  form: { color: "--c-form", label: "Form ideas" },
};
const LAYERS = { embrace: true, person: true, theme: true, hyp: true, under: true, echo: true, theory: false, form: false };
const HYP_UNDER = { h1: ["inheritance", "mirror"], h2: ["witnessed", "ambivalence"], h3: ["exposure", "double"], h4: ["caging", "elevating"] };

function buildGraph() {
  const add = (id, label, type, r, ref) => {
    const n = { id, label, type, r, ref, x: Math.random() * 600 - 300, y: Math.random() * 400 - 200, vx: 0, vy: 0 };
    ALL.push(n); BY_ID[id] = n;
  };
  add("core", "Learning to Love What Is Ugly", "core", 14);
  if (DATA.embrace) add("embrace", "The Embrace", "embrace", 12, DATA.embrace);
  DATA.participants.forEach((p) => add("p-" + p, p, "person", 9, p));
  DATA.themes.forEach((t) => add("t-" + t.id, t.name, "theme", 6 + DATA.quotes.filter((q) => q.t.includes(t.id)).length * 0.4, t));
  DATA.hypotheses.forEach((h, i) => add("h-" + h.id, "H" + (i + 1) + ": " + h.title, "hyp", 8, h));
  DATA.undercurrents.forEach((u) => add("u-" + u.id, u.name, "under", 9, u));
  DATA.echoes.forEach((e) => add("e-" + e.id, "↔ " + e.name, "echo", 4.5, e));
  DATA.theory.forEach((t) => add("x-" + t.id, t.name, "theory", 5, t));
  DATA.formLab.items.forEach((f, i) => add("f-" + i, f.name, "form", 4, f));

  const seen = new Set();
  const link = (a, b, kind = "") => {
    const k = [a, b].sort().join("|");
    if (seen.has(k) || !BY_ID[a] || !BY_ID[b]) return;
    seen.add(k); ALL_LINKS.push({ s: BY_ID[a], t: BY_ID[b], kind });
  };
  DATA.participants.forEach((p) => link("core", "p-" + p));
  if (DATA.embrace) {
    link("core", "embrace", "embrace");
    ["u-caging", "u-elevating", "h-h4", "x-rogers", "x-hooks", "x-grandin"].forEach((id) => link("embrace", id, "embrace"));
  }
  DATA.hypotheses.forEach((h) => {
    link("core", "h-" + h.id);
    h.themes.forEach((t) => link("h-" + h.id, "t-" + t));
    (HYP_UNDER[h.id] || []).forEach((u) => link("h-" + h.id, "u-" + u, "under"));
  });
  DATA.quotes.forEach((q) => q.t.forEach((t) => link("p-" + q.p, "t-" + t)));
  DATA.undercurrents.forEach((u) => {
    link("core", "u-" + u.id, "under");
    u.themes.forEach((t) => link("u-" + u.id, "t-" + t, "under"));
    u.evidence.forEach(([, p]) => link("u-" + u.id, "p-" + p, "under"));
    u.theory.forEach((t) => link("u-" + u.id, "x-" + t, "theory"));
  });
  DATA.echoes.forEach((e) => {
    link("e-" + e.id, "p-" + e.a[1], "echo");
    link("e-" + e.id, "p-" + e.b[1], "echo");
    link("e-" + e.id, "u-" + e.under, "echo");
  });
  DATA.formLab.items.forEach((f, i) => (f.under || []).forEach((u) => link("f-" + i, "u-" + u, "form")));
  DATA.formLab.items.forEach((f, i) => { if (f.type === "embrace") link("f-" + i, "embrace", "form"); });
  applyLayers();
}

function applyLayers() {
  nodes = ALL.filter((n) => n.type === "core" || LAYERS[n.type]);
  const vis = new Set(nodes);
  links = ALL_LINKS.filter((l) => vis.has(l.s) && vis.has(l.t));
  nodes.forEach((n) => { n.vx += (Math.random() - 0.5) * 3; n.vy += (Math.random() - 0.5) * 3; });
  setTimeout(fit, 1400);
}

function renderLayers() {
  $("#layers").innerHTML =
    Object.entries(LAYERS)
      .map(([k, on]) => `<button class="layer ${on ? "on" : ""}" data-l="${k}"><i style="background:var(${TYPES[k].color})"></i>${TYPES[k].label}</button>`)
      .join("") + `<button class="layer" id="fitBtn">⤢ Fit</button>`;
  $$("#layers .layer[data-l]").forEach((b) => (b.onclick = () => { LAYERS[b.dataset.l] = !LAYERS[b.dataset.l]; renderLayers(); applyLayers(); }));
  $("#fitBtn").onclick = fit;
}

function fit() {
  if (!nodes.length || !W) return;
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  nodes.forEach((n) => { x0 = Math.min(x0, n.x); y0 = Math.min(y0, n.y); x1 = Math.max(x1, n.x); y1 = Math.max(y1, n.y); });
  const k = Math.min(2, Math.min((W - 120) / (x1 - x0 || 1), (H - 120) / (y1 - y0 || 1)));
  view.k = Math.max(0.3, k);
  view.x = -((x0 + x1) / 2) * view.k;
  view.y = -((y0 + y1) / 2) * view.k;
}

function resizeGraph() {
  const r = canvas.getBoundingClientRect();
  if (!r.width) return;
  W = r.width; H = r.height;
  canvas.width = W * DPR; canvas.height = H * DPR;
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
}

function tick() {
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j];
      let dx = b.x - a.x, dy = b.y - a.y, d2 = dx * dx + dy * dy || 1;
      if (d2 > 250000) continue;
      const f = 2600 / d2, d = Math.sqrt(d2);
      dx /= d; dy /= d;
      a.vx -= dx * f; a.vy -= dy * f; b.vx += dx * f; b.vy += dy * f;
    }
  }
  links.forEach(({ s, t, kind }) => {
    const rest = kind === "form" || kind === "theory" ? 70 : kind === "echo" ? 80 : 120;
    const dx = t.x - s.x, dy = t.y - s.y, d = Math.sqrt(dx * dx + dy * dy) || 1;
    const f = (d - rest) * 0.004;
    s.vx += (dx / d) * f; s.vy += (dy / d) * f; t.vx -= (dx / d) * f; t.vy -= (dy / d) * f;
  });
  nodes.forEach((n) => {
    if (n === drag) return;
    n.vx -= n.x * 0.002; n.vy -= n.y * 0.002;
    n.vx *= 0.85; n.vy *= 0.85;
    n.x += n.vx; n.y += n.vy;
  });
}

const colorFor = (t) => css(TYPES[t].color);
const neighbors = (n) => links.filter((l) => l.s === n || l.t === n).map((l) => (l.s === n ? l.t : l.s));
let hoverSet = new Set();

function draw() {
  if (!W) return;
  ctx.clearRect(0, 0, W, H);
  ctx.save();
  ctx.translate(W / 2 + view.x, H / 2 + view.y);
  ctx.scale(view.k, view.k);
  hoverSet = hover ? new Set([hover, ...neighbors(hover)]) : new Set();

  links.forEach((l) => {
    const active = hover && (l.s === hover || l.t === hover);
    const base = l.kind === "embrace" ? "242,166,90" : l.kind === "echo" ? "232,196,216" : l.kind === "under" ? "167,139,219" : "90,90,100";
    ctx.strokeStyle = active ? "rgba(220,200,230,0.9)" : `rgba(${base},${hover ? 0.1 : l.kind ? 0.35 : 0.45})`;
    ctx.lineWidth = (active ? 1.5 : 0.8) / view.k;
    ctx.setLineDash(l.kind === "echo" ? [4 / view.k, 4 / view.k] : []);
    ctx.beginPath(); ctx.moveTo(l.s.x, l.s.y); ctx.lineTo(l.t.x, l.t.y); ctx.stroke();
  });
  ctx.setLineDash([]);

  nodes.forEach((n) => {
    const dim = hover && !hoverSet.has(n);
    ctx.globalAlpha = dim ? 0.15 : 1;
    const c = colorFor(n.type);
    ctx.fillStyle = c; ctx.shadowColor = c; ctx.shadowBlur = n === hover ? 18 : 6;
    ctx.beginPath();
    if (n.type === "echo") { ctx.save(); ctx.translate(n.x, n.y); ctx.rotate(Math.PI / 4); ctx.rect(-n.r, -n.r, n.r * 2, n.r * 2); ctx.restore(); }
    else ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fill();
    if (n.type === "under") { ctx.shadowBlur = 0; ctx.strokeStyle = c; ctx.lineWidth = 1 / view.k; ctx.beginPath(); ctx.arc(n.x, n.y, n.r + 4, 0, Math.PI * 2); ctx.stroke(); }
    ctx.shadowBlur = 0;

    const small = n.type === "form" || n.type === "theory" || n.type === "echo";
    if (!small || hoverSet.has(n) || view.k > 1.3) {
      ctx.fillStyle = n.type === "under" ? css("--c-under") : css("--text");
      const fs = (n.type === "core" ? 13 : n.type === "under" ? 12 : small ? 10 : 11) / Math.min(view.k, 1.4) * Math.min(view.k, 1);
      ctx.font = `${n.type === "under" ? "italic " : ""}${Math.max(fs, 8 / view.k)}px Inter, sans-serif`;
      ctx.textAlign = "center";
      const label = n.label.length > 34 ? n.label.slice(0, 32) + "…" : n.label;
      ctx.fillText(label, n.x, n.y + n.r + 13 / Math.max(view.k, 0.7));
    }
  });
  ctx.globalAlpha = 1;
  ctx.restore();
}

function loop() { tick(); draw(); requestAnimationFrame(loop); }

function toWorld(e) {
  const r = canvas.getBoundingClientRect();
  return { x: (e.clientX - r.left - W / 2 - view.x) / view.k, y: (e.clientY - r.top - H / 2 - view.y) / view.k };
}
const pick = (p) => {
  let best = null, bd = Infinity;
  nodes.forEach((n) => { const d = (n.x - p.x) ** 2 + (n.y - p.y) ** 2; const rr = (n.r + 6 / view.k) ** 2; if (d < rr && d < bd) { bd = d; best = n; } });
  return best;
};

canvas.addEventListener("pointerdown", (e) => {
  moved = false;
  drag = pick(toWorld(e));
  if (!drag) panning = { x: e.clientX, y: e.clientY, vx: view.x, vy: view.y };
  canvas.setPointerCapture(e.pointerId);
});
canvas.addEventListener("pointermove", (e) => {
  if (drag) { const p = toWorld(e); drag.x = p.x; drag.y = p.y; drag.vx = drag.vy = 0; moved = true; }
  else if (panning) { view.x = panning.vx + e.clientX - panning.x; view.y = panning.vy + e.clientY - panning.y; canvas.style.cursor = "grabbing"; }
  else { hover = pick(toWorld(e)); canvas.style.cursor = hover ? "pointer" : "grab"; }
});
canvas.addEventListener("pointerup", () => {
  if (drag && !moved) openNode(drag);
  drag = null; panning = null; canvas.style.cursor = "grab";
});
canvas.addEventListener("wheel", (e) => {
  e.preventDefault();
  const r = canvas.getBoundingClientRect();
  const mx = e.clientX - r.left - W / 2, my = e.clientY - r.top - H / 2;
  const k2 = Math.min(4, Math.max(0.25, view.k * Math.exp(-e.deltaY * 0.0015)));
  view.x = mx - (mx - view.x) * (k2 / view.k);
  view.y = my - (my - view.y) * (k2 / view.k);
  view.k = k2;
}, { passive: false });

const nodeChip = (id) => {
  const n = BY_ID[id];
  return n ? `<span class="tag node-link" data-node="${id}" style="color:var(${TYPES[n.type].color})">${esc(n.label)}</span>` : "";
};
const smallQuote = (q) => q ? `<div class="quote" style="font-size:15px">“${esc(q.text)}”<div class="quote-meta">— ${q.p} · Q${q.q + 1}</div></div>` : "";

function openNode(n) {
  const panel = $("#nodePanel");
  let html = `<span class="close-x" id="closePanel">×</span><div class="q-title" style="color:var(${TYPES[n.type].color})">${TYPES[n.type].label.replace(/s$/, "")}</div><h3>${esc(n.label)}</h3>`;
  const r = n.ref;
  if (n.type === "person") {
    const ech = DATA.echoes.filter((e) => e.a[1] === r || e.b[1] === r);
    const und = DATA.undercurrents.filter((u) => u.evidence.some(([, p]) => p === r));
    html += `<div style="margin:6px 0">${und.map((u) => nodeChip("u-" + u.id)).join("")}</div>`;
    if (ech.length) html += `<div class="echo-box">${ech.map((e) => `<div>${nodeChip("e-" + e.id)} ${e.note}</div>`).join("")}</div>`;
    html += DATA.quotes.filter((q) => q.p === r).map((q) => quoteHTML(q, true)).join("");
  } else if (n.type === "theme") {
    html += `<p class="muted">${r.desc}</p>` + DATA.quotes.filter((q) => q.t.includes(r.id)).map((q) => quoteHTML(q)).join("");
  } else if (n.type === "hyp") {
    html += `<p>${r.body}</p><p style="margin-top:8px"><strong>Implication:</strong> ${r.implication}</p><div style="margin-top:8px">${(HYP_UNDER[r.id] || []).map((u) => nodeChip("u-" + u)).join("")}</div>`;
  } else if (n.type === "under") {
    html += `<p>${r.desc}</p><p class="muted" style="margin-top:8px">${esc(r.reading)}</p>`;
    html += r.evidence.map(evQuote).map(smallQuote).join("");
    html += `<div class="provocation"><span>Design provocation</span>${r.provocation}</div>`;
    html += `<div style="margin-top:8px">${r.theory.map((t) => nodeChip("x-" + t)).join("")}</div>`;
    const forms = DATA.formLab.items.map((f, i) => [f, i]).filter(([f]) => (f.under || []).includes(r.id));
    if (forms.length) html += `<div class="q-title" style="margin-top:12px">Form ideas</div>${forms.map(([, i]) => nodeChip("f-" + i)).join("")}`;
  } else if (n.type === "echo") {
    html += `<p>${r.note}</p>${smallQuote(evQuote(r.a))}${smallQuote(evQuote(r.b))}<div>${nodeChip("u-" + r.under)}</div>`;
  } else if (n.type === "theory") {
    html += `<div class="muted" style="font-size:13px">${r.who}</div><p style="margin-top:6px">${esc(r.line)}</p>`;
    html += `<div style="margin-top:8px">${DATA.undercurrents.filter((u) => u.theory.includes(r.id)).map((u) => nodeChip("u-" + u.id)).join("")}</div>`;
  } else if (n.type === "form") {
    const sec = DATA.formLab.sections.find((s) => s.id === r.type);
    html += `<div class="muted" style="font-size:13px">${sec?.name}</div><p style="margin-top:6px">${esc(r.body)}</p><p class="try"><span>Try</span>${esc(r.try)}</p><div>${(r.under || []).map((u) => nodeChip("u-" + u)).join("")}</div>`;
  } else if (n.type === "embrace") {
    html += `<p>${r.concept}</p>${embraceSplit()}<div style="margin-top:8px">${nodeChip("u-caging")}${nodeChip("u-elevating")}${nodeChip("h-h4")}</div>`;
  } else {
    html += `<p class="muted">${DATA.project.statement}</p>`;
  }
  panel.innerHTML = html;
  panel.classList.add("show");
  panel.scrollTop = 0;
  $("#closePanel").onclick = () => panel.classList.remove("show");
  $$("#nodePanel [data-node]").forEach((c) => (c.onclick = () => {
    const t = BY_ID[c.dataset.node];
    if (!LAYERS[t.type] && t.type !== "core") { LAYERS[t.type] = true; renderLayers(); applyLayers(); }
    hover = t; openNode(t);
  }));
}

/* ---------- Init ---------- */
renderOverview(); renderInterviews(); renderThemes(); renderUnder(); renderHyp(); renderCases(); renderForm(); renderNotes();
renderLayers();
resizeGraph();
buildGraph();
window.addEventListener("resize", () => { resizeGraph(); });
loop();
show(location.hash.slice(1) || "graph");
