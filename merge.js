// ===== LLWU THEMES (merged) =====
// Themes and undercurrents are merged into one list of 10 themes.
// The detailed theme content lives in deep.js and survey.js (DATA.undercurrents);
// this file folds the older, simpler themes into them and keeps every link pointing
// at the merged list. To rename or re-describe a theme, edit RENAME below.

(() => {
  // Undercurrents absorbed into another one
  const ABSORB = { double: "exposure", unfinished: "inheritance" };
  // Old simple themes → the merged theme that now holds them
  const THEME_TO = {
    hiding: "avoidance", evaluation: "mirror", learned: "inheritance", editing: "conditional",
    familiarity: "exposure", containment: "caging", shape: "witnessed", safety: "witnessed",
  };
  const RENAME = {
    mirror: ["The Internal Mirror", "Feeling watched and judged, even alone. Other people's gaze slowly becomes your own."],
    inheritance: ["Learned Shame", "Shame absorbed slowly from family, peers and reactions rather than one moment, including the sense that the body is a project to keep fixing."],
    conditional: ["Conditional Belonging", "Making yourself more digestible. Acceptance feels like it depends on editing yourself, and showing the whole self risks being left."],
    avoidance: ["Hiding & Avoidance", "Hiding is the first response to shame. Everyone has their own way of not looking: deleting photos, intellectualizing, staying busy."],
    exposure: ["Familiarity Softens", "Time, closeness and seeing a trait on someone else change how it's seen. The same feature can be beautiful on others and shameful on yourself."],
    caging: ["The Caging Embrace", "Something soft held inside a shell that pushes back. Love that protects, corrects and holds in place, and teaches shame without meaning to."],
    witnessed: ["Being Witnessed", "Wanting to be understood without explaining, and without being told it's all beautiful. Art gives a shapeless feeling a form you can stand outside of."],
  };
  const OLD_NAMES = { "Learned Shame": "Learned Shame", "Soft Inside a Shell": "The Caging Embrace", "Safety, Not Fixing": "Being Witnessed", "Familiarity": "Familiarity Softens" };

  const U = DATA.undercurrents;
  const byId = (id) => U.find((u) => u.id === id);
  const uniq = (a) => [...new Set(a)];
  const mapU = (id) => ABSORB[id] || id;
  const mapT = (id) => THEME_TO[id] || mapU(id);

  // 1. Fold absorbed undercurrents into their targets
  Object.entries(ABSORB).forEach(([from, to]) => {
    const a = byId(from), b = byId(to);
    if (!a || !b) return;
    b.evidence = b.evidence.concat(a.evidence.filter(([q, p]) => !b.evidence.some(([q2, p2]) => q2 === q && p2 === p)));
    b.survey = uniq((b.survey || []).concat(a.survey || []));
    b.theory = uniq(b.theory.concat(a.theory));
    b.reading = b.reading + " " + a.reading;
    b.provocation = b.provocation + " " + a.provocation;
    U.splice(U.indexOf(a), 1);
  });

  // 2. Rename and clear the old theme tags
  U.forEach((u) => {
    if (RENAME[u.id]) [u.name, u.desc] = RENAME[u.id];
    u.themes = [];
  });

  // 3. Re-point every reference
  DATA.quotes.forEach((q) => { q.t = uniq(q.t.map(mapT)); });
  DATA.hypotheses.forEach((h) => { h.themes = uniq((h.themes || []).map(mapT)); });
  (DATA.echoes || []).forEach((e) => { e.under = mapU(e.under); });
  (DATA.formLab?.items || []).forEach((f) => { if (f.under) f.under = uniq(f.under.map(mapU)); });
  (DATA.survey?.findings || []).forEach((f) => { f.under = uniq(f.under.map(mapU)); });
  (DATA.pinnedNotes || []).forEach((n) => {
    n.body = n.body.replace(/\[\[(.+?)\]\]/g, (m, name) => `[[${OLD_NAMES[name] || name}]]`);
  });

  // 4. Themes and undercurrents are now the same list
  DATA.themes = U.map((u) => ({ id: u.id, name: u.name, desc: u.desc }));
})();
