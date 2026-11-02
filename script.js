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
  if (view === "graph") resizeGraph();
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
function renderInterviews() {
  $("#interviewFilters").innerHTML = ["All", ...DATA.participants]
    .map((p) => `<button class="chip ${p === filterP ? "on" : ""}" data-p="${p}">${p}</button>`)
    .join("");
  $$("#interviewFilters .chip").forEach((c) => (c.onclick = () => { filterP = c.dataset.p; renderInterviews(); }));

  $("#interviewList").innerHTML = DATA.questions
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

/* ---------- Form lab ---------- */
function renderForm() {
  $("#formGrid").innerHTML = DATA.swatches
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

function renderNotes() {
  const notes = loadNotes();
  $("#noteList").innerHTML = notes.length
    ? notes.map((n, i) => `<div class="card">
        <button class="del" data-i="${i}" title="Delete">×</button>
        <h3>${esc(n.title)}</h3>
        <div class="muted" style="font-size:12px;margin-bottom:8px">${new Date(n.date).toLocaleDateString()}</div>
        <p>${linkify(n.body)}</p>
        <div style="margin-top:8px">${n.tags.map((t) => `<span class="tag">#${esc(t)}</span>`).join("")}</div>
      </div>`).join("")
    : `<p class="muted">No notes yet.</p>`;

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
let nodes = [], links = [], hover = null, drag = null;

function buildGraph() {
  const add = (id, label, type, r) => nodes.push({ id, label, type, r, x: Math.random() * 600 - 300, y: Math.random() * 400 - 200, vx: 0, vy: 0 });
  add("core", "Learning to Love What Is Ugly", "core", 14);
  DATA.participants.forEach((p) => add("p-" + p, p, "person", 9));
  DATA.themes.forEach((t) => add("t-" + t.id, t.name, "theme", 7 + DATA.quotes.filter((q) => q.t.includes(t.id)).length * 0.5));
  DATA.hypotheses.forEach((h, i) => add("h-" + h.id, "H" + (i + 1) + ": " + h.title, "hyp", 8));

  const seen = new Set();
  const link = (a, b) => { const k = a + "|" + b; if (!seen.has(k)) { seen.add(k); links.push({ a, b }); } };
  DATA.hypotheses.forEach((h) => { link("core", "h-" + h.id); h.themes.forEach((t) => link("h-" + h.id, "t-" + t)); });
  DATA.quotes.forEach((q) => q.t.forEach((t) => link("p-" + q.p, "t-" + t)));
  DATA.participants.forEach((p) => link("core", "p-" + p));
  links.forEach((l) => { l.s = nodes.find((n) => n.id === l.a); l.t = nodes.find((n) => n.id === l.b); });
}

function resizeGraph() {
  const r = canvas.getBoundingClientRect();
  W = r.width; H = r.height;
  canvas.width = W * DPR; canvas.height = H * DPR;
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
}

function tick() {
  // repulsion
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j];
      let dx = b.x - a.x, dy = b.y - a.y, d2 = dx * dx + dy * dy || 1;
      const f = 2800 / d2, d = Math.sqrt(d2);
      dx /= d; dy /= d;
      a.vx -= dx * f; a.vy -= dy * f; b.vx += dx * f; b.vy += dy * f;
    }
  }
  // springs
  links.forEach(({ s, t }) => {
    const dx = t.x - s.x, dy = t.y - s.y, d = Math.sqrt(dx * dx + dy * dy) || 1;
    const f = (d - 120) * 0.004;
    s.vx += (dx / d) * f; s.vy += (dy / d) * f; t.vx -= (dx / d) * f; t.vy -= (dy / d) * f;
  });
  // gravity + damping
  nodes.forEach((n) => {
    if (n === drag) return;
    n.vx -= n.x * 0.002; n.vy -= n.y * 0.002;
    n.vx *= 0.85; n.vy *= 0.85;
    n.x += n.vx; n.y += n.vy;
  });
}

const colorFor = (t) => ({ core: css("--c-core"), person: css("--c-person"), theme: css("--c-theme"), hyp: css("--c-hyp") }[t]);
const isLinked = (n) => hover && (n === hover || links.some((l) => (l.s === hover && l.t === n) || (l.t === hover && l.s === n)));

function draw() {
  ctx.clearRect(0, 0, W, H);
  ctx.save();
  ctx.translate(W / 2, H / 2);
  links.forEach((l) => {
    const active = hover && (l.s === hover || l.t === hover);
    ctx.strokeStyle = active ? "rgba(180,142,173,0.8)" : hover ? "rgba(90,90,100,0.15)" : "rgba(90,90,100,0.45)";
    ctx.lineWidth = active ? 1.4 : 0.8;
    ctx.beginPath(); ctx.moveTo(l.s.x, l.s.y); ctx.lineTo(l.t.x, l.t.y); ctx.stroke();
  });
  nodes.forEach((n) => {
    const dim = hover && !isLinked(n);
    ctx.globalAlpha = dim ? 0.2 : 1;
    ctx.fillStyle = colorFor(n.type);
    ctx.shadowColor = colorFor(n.type);
    ctx.shadowBlur = n === hover ? 18 : 6;
    ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = css("--text");
    ctx.font = `${n.type === "core" ? 13 : 11}px Inter, sans-serif`;
    ctx.textAlign = "center";
    const label = n.label.length > 32 ? n.label.slice(0, 30) + "…" : n.label;
    ctx.fillText(label, n.x, n.y + n.r + 14);
  });
  ctx.globalAlpha = 1;
  ctx.restore();
}

function loop() { tick(); draw(); requestAnimationFrame(loop); }

function pos(e) {
  const r = canvas.getBoundingClientRect();
  const p = e.touches ? e.touches[0] : e;
  return { x: p.clientX - r.left - W / 2, y: p.clientY - r.top - H / 2 };
}
const pick = (p) => nodes.find((n) => (n.x - p.x) ** 2 + (n.y - p.y) ** 2 < (n.r + 5) ** 2);
let moved = false;

canvas.addEventListener("pointerdown", (e) => { drag = pick(pos(e)); moved = false; if (drag) canvas.setPointerCapture(e.pointerId); });
canvas.addEventListener("pointermove", (e) => {
  const p = pos(e);
  if (drag) { drag.x = p.x; drag.y = p.y; drag.vx = drag.vy = 0; moved = true; }
  else { hover = pick(p) || null; canvas.style.cursor = hover ? "pointer" : "grab"; }
});
canvas.addEventListener("pointerup", () => { if (drag && !moved) openNode(drag); drag = null; });

function openNode(n) {
  const panel = $("#nodePanel");
  let html = `<span class="close-x" onclick="this.parentElement.classList.remove('show')">×</span><h3>${esc(n.label)}</h3>`;
  if (n.type === "person") {
    const p = n.id.slice(2);
    html += DATA.quotes.filter((q) => q.p === p).map((q) => quoteHTML(q, true)).join("");
  } else if (n.type === "theme") {
    const t = DATA.themes.find((x) => "t-" + x.id === n.id);
    html += `<p class="muted">${t.desc}</p>` + DATA.quotes.filter((q) => q.t.includes(t.id)).map((q) => quoteHTML(q)).join("");
  } else if (n.type === "hyp") {
    const h = DATA.hypotheses.find((x) => "h-" + x.id === n.id);
    html += `<p>${h.body}</p><p style="margin-top:8px"><strong>Implication:</strong> ${h.implication}</p>`;
  } else {
    html += `<p class="muted">${DATA.project.statement}</p>`;
  }
  panel.innerHTML = html;
  panel.classList.add("show");
}

/* ---------- Init ---------- */
renderOverview(); renderInterviews(); renderThemes(); renderHyp(); renderCases(); renderForm(); renderNotes();
buildGraph();
resizeGraph();
window.addEventListener("resize", resizeGraph);
loop();
show(location.hash.slice(1) || "graph");
