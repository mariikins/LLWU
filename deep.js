// ===== LLWU DEEP LAYER =====
// Undercurrents (deeper psychological patterns), echoes (where participants
// mirror each other), theory, and Form Exploration ideas.
// Evidence uses [question number (1-10), participant].

/* ---------- UNDERCURRENTS ---------- */
DATA.undercurrents = [
  {
    id: "mirror",
    name: "The Internal Mirror",
    desc: "Other people's gaze slowly becomes your own. Eventually no one needs to be watching for you to feel watched.",
    evidence: [[2, "Leila"], [8, "Leila"], [4, "Leila"], [3, "Alex"]],
    reading: "Leila 'started noticing it myself' after others commented, and now imagines how she looks 'even when no one's looking.' She avoids mirrors on bad days. Alex learned what not to show from other people's discomfort. The mirror is both the wound and the thing avoided.",
    theory: ["cooley", "berger", "lacan"],
    themes: ["evaluation", "learned", "hiding"],
    provocation: "What if the sculpture works as a mirror that refuses to judge, reflecting the viewer back slowly, softly, and only once they stay?",
  },
  {
    id: "inheritance",
    name: "Inherited Shame",
    desc: "Shame is passed down without anyone saying it out loud. It's learned by watching the people you love watch themselves.",
    evidence: [[3, "Maya"], [2, "Maya"], [3, "Leila"]],
    reading: "Maya's mother never meant to teach her anything, but 'your body is a project you're supposed to keep fixing' was absorbed anyway. Leila learned 'which things got complimented.' Nobody delivered the lesson directly.",
    theory: ["bandura", "berger"],
    themes: ["learned"],
    provocation: "Layered casts or strata, with older 'generations' of the form visible beneath the surface.",
  },
  {
    id: "double",
    name: "The Double Standard",
    desc: "The same feature is beautiful on someone else and shameful on yourself.",
    evidence: [[5, "Leila"], [5, "Alex"]],
    reading: "Leila found features she criticized on herself beautiful on other women. Alex's traits stopped being 'proof that I was weird' once he saw them in others. Compassion flows outward but not inward.",
    theory: ["neff", "zajonc"],
    themes: ["familiarity", "evaluation"],
    provocation: "Let the viewer meet the 'ugly' form as something other than themselves first, then reveal it as theirs.",
  },
  {
    id: "conditional",
    name: "Conditional Belonging",
    desc: "Being accepted feels like it depends on editing yourself. Showing the whole self risks being left.",
    evidence: [[1, "Alex"], [2, "Alex"], [8, "Alex"], [9, "Alex"]],
    reading: "Alex makes himself 'more digestible' and feels he has to 'pick which version of me gets to exist.' The abyss isn't one trait. It's the fear that the unedited self would push people away. This is close to abandonment fear.",
    theory: ["winnicott-false", "bowlby"],
    themes: ["editing", "containment"],
    provocation: "The form only reveals its soft interior if the viewer doesn't flinch or leave. Acceptance has to be mutual.",
  },
  {
    id: "avoidance",
    name: "Avoidance as Survival",
    desc: "Everyone has a way of not looking: hiding, intellectualizing or staying busy.",
    evidence: [[4, "Leila"], [4, "Alex"], [4, "Maya"]],
    reading: "All three described a different defense: Leila deletes photos and avoids mirrors, Alex turns it into theory, Maya keeps busy. None of them described sitting with the feeling directly.",
    theory: ["afreud", "brown"],
    themes: ["hiding", "shape"],
    provocation: "The work pulls back if you rush it. It can only be approached slowly, which teaches the opposite of avoidance.",
  },
  {
    id: "unfinished",
    name: "The Unfinished Self",
    desc: "The body as a project, and the sense that you're supposed to be 'complete' by now.",
    evidence: [[2, "Maya"], [3, "Maya"], [8, "Maya"]],
    reading: "Maya doesn't hate her changing body. She just feels she's 'supposed to be doing something about it,' and that time is passing before she's become 'a more complete person.'",
    theory: ["berger"],
    themes: ["learned"],
    provocation: "A form that never finishes forming: visible armature, open seams, slow continuous change.",
  },
  {
    id: "ambivalence",
    name: "Attraction / Repulsion",
    desc: "Not knowing whether to touch or stay away. Beautiful and uncomfortable at once.",
    evidence: [[9, "Maya"], [9, "Alex"], [9, "Leila"]],
    reading: "Maya imagines something where 'you can't tell if you're supposed to touch it or stay away.' Alex's form 'might look pretty, but it'd be uncomfortable to watch.' This ambivalence is exactly where the installation lives.",
    theory: ["kristeva", "uncanny"],
    themes: ["containment"],
    provocation: "Materials that sit between flesh and object, alive and inert, so the first reaction is uncertainty rather than disgust.",
  },
  {
    id: "witnessed",
    name: "Being Witnessed",
    desc: "Wanting to be recognized without having to explain or perform.",
    evidence: [[7, "Leila"], [7, "Maya"], [10, "Maya"], [10, "Leila"]],
    reading: "Leila wants to be understood 'without explaining it.' Maya felt 'something got recognized' in front of a painting. But nobody wants false comfort. Being witnessed is not the same as being told it's all beautiful.",
    theory: ["winnicott-holding", "brown"],
    themes: ["safety", "shape"],
    provocation: "The work responds to presence, not performance. Just being there is enough to change it.",
  },
  {
    id: "exposure",
    name: "Exposure Softens",
    desc: "Time and closeness change how something is seen.",
    evidence: [[5, "Maya"], [5, "Alex"], [5, "Leila"]],
    reading: "All three described acceptance coming through exposure: seeing the trait in others, or simply having 'spent enough time with it.' This is the most direct mechanic the interviews offer.",
    theory: ["zajonc"],
    themes: ["familiarity"],
    provocation: "Dwell time is the main input. The longer you stay, the warmer and softer it becomes.",
  },
];

/* ---------- ECHOES: where participants mirror each other ---------- */
DATA.echoes = [
  { id: "e1", name: "No single moment", a: [3, "Leila"], b: [3, "Alex"], note: "Neither remembers one insult. Both learned through accumulated reactions.", under: "mirror" },
  { id: "e2", name: "Absorbed, not taught", a: [2, "Leila"], b: [3, "Maya"], note: "Nobody said anything cruel, and nobody meant to teach anything, but the lesson landed anyway.", under: "inheritance" },
  { id: "e3", name: "Seeing it in others", a: [5, "Leila"], b: [5, "Alex"], note: "Both changed their view of themselves by seeing the same trait on someone else first.", under: "double" },
  { id: "e4", name: "The container", a: [9, "Leila"], b: [9, "Alex"], note: "A soft thing pushing against a shell, and a thing squeezed into a space too small. Same image, two angles.", under: "conditional" },
  { id: "e5", name: "Don't trick me", a: [10, "Leila"], b: [10, "Maya"], note: "Both want to be understood but distrust comfort that feels fake or manipulative.", under: "witnessed" },
  { id: "e6", name: "Outside the body", a: [7, "Alex"], b: [6, "Maya"], note: "Art gives a shapeless feeling a form you can stand outside of and look at.", under: "witnessed" },
];

/* ---------- THEORY ---------- */
DATA.theory = [
  { id: "cooley", name: "Looking-Glass Self", who: "Charles Horton Cooley", line: "We form our self-image from how we imagine others see and judge us." },
  { id: "berger", name: "Ways of Seeing", who: "John Berger", line: "\"Men look at women. Women watch themselves being looked at.\" The surveyor and the surveyed live inside one person." },
  { id: "lacan", name: "Mirror Stage", who: "Jacques Lacan", line: "The sense of self forms by identifying with an external image, so the self is always partly outside us." },
  { id: "kristeva", name: "Abjection", who: "Julia Kristeva, Powers of Horror", line: "What we expel to define the edges of the self, and what both repels and fascinates us." },
  { id: "uncanny", name: "The Uncanny", who: "Sigmund Freud", line: "The familiar made strange; the unsettling feeling of something known returning in an unfamiliar form." },
  { id: "winnicott-false", name: "True Self / False Self", who: "D. W. Winnicott", line: "A compliant 'false self' develops to protect a hidden, spontaneous true self." },
  { id: "winnicott-holding", name: "Holding Environment", who: "D. W. Winnicott", line: "A space that feels safe enough to contain difficult feelings without collapse." },
  { id: "bowlby", name: "Attachment Theory", who: "John Bowlby", line: "Early bonds shape how we expect closeness, rejection and abandonment to unfold." },
  { id: "zajonc", name: "Mere Exposure Effect", who: "Robert Zajonc", line: "Repeated exposure to something tends to increase how much we like it." },
  { id: "neff", name: "Self-Compassion", who: "Kristin Neff", line: "Offering yourself the kindness you would naturally give someone else." },
  { id: "brown", name: "Shame Resilience", who: "Brené Brown", line: "Shame grows in secrecy, silence and judgment; empathy is what weakens it." },
  { id: "bandura", name: "Social Learning", who: "Albert Bandura", line: "We learn behaviors and values by observing the people around us." },
  { id: "afreud", name: "Defense Mechanisms", who: "Anna Freud", line: "Avoidance, intellectualization and other strategies the mind uses to protect itself from pain." },
];

/* ---------- FORM EXPLORATION ---------- */
// type: material | form | interaction | projection | sound | ritual | question
// under = linked undercurrents (shows in graph when "Form ideas" layer is on)
DATA.formLab = {
  sections: [
    { id: "material", name: "Materials", desc: "Swatches to make and test. Log gut reactions from testers." },
    { id: "form", name: "Form Studies", desc: "Sculptural ideas drawn from participants' own images." },
    { id: "interaction", name: "Interaction Experiments", desc: "Sensor-driven behaviors to prototype." },
    { id: "projection", name: "Projection & Light", desc: "What gets projected onto or around the form." },
    { id: "sound", name: "Sound", desc: "How the work sounds as the viewer approaches." },
    { id: "ritual", name: "The Ritual Arc", desc: "Stages of the viewer's experience, from rejection to intimacy." },
    { id: "question", name: "Open Questions", desc: "Things to answer through testing." },
  ],
  items: [
    // Materials
    { type: "material", name: "Ecoflex silicone, skin tone", body: "Soft, translucent, uncomfortably skin-like.", try: "Pour thin and thick versions. Embed fibers or veins.", under: ["ambivalence"] },
    { type: "material", name: "Silicone over wire mesh", body: "Flesh pressing through a grid.", try: "Pour silicone over mesh so it bulges through the holes.", under: ["conditional"] },
    { type: "material", name: "Wax over metal fragments", body: "Soft skin over a broken interior.", try: "Dip rusted fragments in wax; warm with a heat gun to reveal them.", under: ["unfinished"] },
    { type: "material", name: "Latex skin, heated", body: "A membrane that is warm to the touch.", try: "Stretch latex over a heating pad (low voltage, temperature-capped).", under: ["witnessed"] },
    { type: "material", name: "Agar / gelatin", body: "Decays and changes over the course of the show.", try: "Cast small forms and photograph daily as they shrink and wrinkle.", under: ["unfinished"] },
    { type: "material", name: "Broken mirror shards", body: "Fragmented self-image embedded in the flesh.", try: "Press shards into wet silicone; see how much reflection reads.", under: ["mirror"] },
    { type: "material", name: "Cast resin shell", body: "A hard, glossy exterior that contains something soft.", try: "Cast a shell around a silicone core; crack it partially open.", under: ["conditional", "ambivalence"] },
    { type: "material", name: "Stretched fabric over armature", body: "Skin pulled taut over visible bones.", try: "Nylon or lycra over bent steel rod; light it from inside.", under: ["unfinished"] },

    // Form studies
    { type: "form", name: "The Shell", body: "From Leila: 'something soft with a hard shell around it… every time it moves, the shell pushes back.'", try: "Inflatable silicone bladder inside a rigid metal cage.", under: ["conditional"] },
    { type: "form", name: "The Shapeshifter", body: "From Alex: 'something that keeps changing shape to fit into a space that's too small.'", try: "Soft form forced into a narrow frame; let it slowly expand when the viewer stays.", under: ["conditional"] },
    { type: "form", name: "Touch or Stay Away", body: "From Maya: a form you can't tell whether to approach or avoid.", try: "Test which surface qualities trigger hesitation versus curiosity.", under: ["ambivalence"] },
    { type: "form", name: "The Broken Mirror", body: "A reflective surface fragmented across a fleshy body.", try: "Mirror pieces that only show the viewer from close up.", under: ["mirror"] },
    { type: "form", name: "Strata", body: "Layered casts, with older layers showing through.", try: "Cast several bodies or body parts and layer them translucently.", under: ["inheritance"] },
    { type: "form", name: "The Unfinished", body: "A form that looks mid-process: open seams, visible armature.", try: "Leave part of the sculpture as raw structure.", under: ["unfinished"] },
    { type: "form", name: "The Fold", body: "The places where bodies fold, crease and hide.", try: "Study folds in skin and fabric; build a form made mostly of creases.", under: ["avoidance"] },

    // Interaction experiments
    { type: "interaction", name: "Recoil", body: "Approach fast and the form contracts; the sound tightens.", try: "Distance sensor + speed threshold → servo or pneumatic contraction.", under: ["avoidance"] },
    { type: "interaction", name: "Dwell to Soften", body: "Stay still and the form slowly warms, glows and relaxes.", try: "Timer starts when the viewer is within range and still for 20+ seconds.", under: ["exposure"] },
    { type: "interaction", name: "Distance-Triggered Heat", body: "The form starts giving off warmth as you get closer, so you feel it before you touch it. Getting near is rewarded, not punished.", try: "Distance sensor (VL53L0X or HC-SR04) → Arduino → MOSFET driving low-voltage heating pads behind the silicone. Ramp heat up with closeness and how long you stay. Cap the temperature with a thermistor. Heat pads warm slowly, so pre-warm them a little and pair with light or sound for instant feedback.", under: ["exposure", "witnessed", "ambivalence"] },
    { type: "interaction", name: "Touch Releases Heat", body: "Contact spreads warmth outward from where you touched.", try: "Capacitive sensor under silicone → heating pad + projection bloom.", under: ["witnessed"] },
    { type: "interaction", name: "The Watched", body: "Projected eyes track you; they close once you stay.", try: "Webcam tracking in TouchDesigner; eyes fade after dwell time.", under: ["mirror"] },
    { type: "interaction", name: "Reflection Dissolve", body: "Your silhouette appears on the form and slowly melts into its texture.", try: "Kinect or webcam silhouette mapped onto skin texture.", under: ["mirror", "double"] },
    { type: "interaction", name: "Breath Sync", body: "The form's breathing slows to match yours.", try: "Microphone or chest-strap sensor → pneumatic bladder rhythm.", under: ["witnessed"] },
    { type: "interaction", name: "Two Bodies", body: "The form only fully opens when two people are present.", try: "Two distance zones; full response requires both occupied.", under: ["conditional", "witnessed"] },

    // Projection & light
    { type: "projection", name: "Skin Macro", body: "Extreme close-ups of pores, scars and stretch marks projected onto the form.", try: "Shoot macro footage (with consent) and map it onto the surface.", under: ["ambivalence"] },
    { type: "projection", name: "Words Up Close", body: "Interview fragments only become readable when you stand near.", try: "Text opacity tied to distance.", under: ["witnessed"] },
    { type: "projection", name: "Light From the Cracks", body: "Warm light leaks out from fractures in the hard shell.", try: "LEDs inside the core; brightness rises with dwell time.", under: ["conditional"] },
    { type: "projection", name: "Oversized Shadow", body: "The viewer's shadow looms larger than the form at first, then shrinks.", try: "Move a light source with distance.", under: ["mirror"] },

    // Sound
    { type: "sound", name: "Heartbeat Clarifying", body: "Muffled from far away, clear and close when you're near.", try: "Low-pass filter cutoff mapped to distance.", under: ["exposure"] },
    { type: "sound", name: "Whispered Fragments", body: "Anonymized lines from interviews and the form, whispered.", try: "Record volunteers reading responses; trigger on touch.", under: ["witnessed"] },
    { type: "sound", name: "Tension → Warmth", body: "Dissonant drone when the viewer moves fast, warm tone when still.", try: "Map movement speed to harmonic consonance.", under: ["avoidance"] },
    { type: "sound", name: "Silence as Reward", body: "After long enough, everything goes quiet.", try: "Test how long people stay once the sound stops.", under: ["witnessed"] },

    // Ritual arc
    { type: "ritual", name: "1. Encounter", body: "From a distance: rejection, disgust, uncertainty.", try: "What does the form look like from the doorway?", under: ["ambivalence"] },
    { type: "ritual", name: "2. Approach", body: "Tension; the work reacts to being looked at, but a first hint of warmth reaches you.", try: "Recoil + tight sound + distance-triggered heat starting to rise.", under: ["mirror"] },
    { type: "ritual", name: "3. Hesitation", body: "The viewer pauses. The work notices.", try: "Stillness detection begins.", under: ["avoidance"] },
    { type: "ritual", name: "4. Contact", body: "Touch. Warmth answers.", try: "Heat + light bloom.", under: ["witnessed"] },
    { type: "ritual", name: "5. Staying", body: "Softening. The form relaxes and opens.", try: "Dwell-based transformation.", under: ["exposure"] },
    { type: "ritual", name: "6. Leaving", body: "An afterimage: a trace of warmth or a mark left behind.", try: "Does the form remember the viewer? A heat trace, a projected handprint?", under: ["witnessed"] },

    // Open questions
    { type: "question", name: "Should viewers see themselves literally?", body: "A real reflection versus an abstract echo.", try: "A/B test a mirror version against a silhouette version.", under: ["mirror"] },
    { type: "question", name: "Ugly without exploiting shame?", body: "How to make it uncomfortable without humiliating anyone.", try: "Ask testers whether they felt tricked (Maya's concern).", under: ["witnessed"] },
    { type: "question", name: "How long is long enough?", body: "How much dwell time does a perception shift actually take?", try: "Time testers and ask before/after how they'd describe the form.", under: ["exposure"] },
    { type: "question", name: "What does the work give back?", body: "What does someone leave with?", try: "Exit prompt: one word for how you feel now.", under: ["witnessed"] },
    { type: "question", name: "Adolescents vs. adult women?", body: "Do the two communities react differently?", try: "Compare form responses by age range.", under: ["inheritance"] },
  ],
};

/* ===================================================================
   THE EMBRACE
   An embrace can cage someone or lift them up, even when both come
   from love. The elevating embrace is more powerful than shame.
   =================================================================== */
DATA.embrace = {
  concept:
    "An embrace can cage someone in, or it can lift them up, accept them and celebrate them, even when both come from love. The caging embrace protects, corrects and holds a person in place. The elevating embrace is warm, balanced and full of color, and holds a person up instead of holding them in. This project argues that the second kind of love is far more powerful than shame, and lets the viewer feel one embrace turn into the other.",
  caging: ["Protects", "Corrects", "Holds in place", "Asks you to change first", "Cold, tight, rigid"],
  elevating: ["Accepts", "Celebrates", "Holds you up", "Lets you stay as you are", "Warm, balanced, full of color"],
  questions: [
    { section: "Being held", qs: [
      "Think of a hug or embrace that made you feel completely accepted. What made it feel that way?",
      "What makes a hug feel safe instead of suffocating?",
      "If love had a color, temperature or texture, what would it be? What about shame?",
    ]},
    { section: "Love that cages", qs: [
      "Have you ever been loved in a way that felt like a cage? What did that feel like?",
      "Has someone ever tried to fix or change you because they loved you? How did that land?",
      "What's the difference between being protected and being held back?",
      "Have you ever held onto someone too tightly? What were you scared of?",
    ]},
    { section: "Love that lifts", qs: [
      "Who made you feel bigger, freer or more yourself? What did they do differently?",
      "What does it feel like to be celebrated instead of just tolerated?",
      "Can you remember a moment when someone's love made a part of you that you'd hidden feel okay?",
    ]},
    { section: "Love vs. shame", qs: [
      "Can someone love you and still make you feel ashamed? How do you hold both?",
      "Do you think love is stronger than shame? When has it been, and when hasn't it?",
      "What would it take for you to embrace the part of yourself you hide?",
    ]},
    { section: "The artwork", qs: [
      "If an artwork could embrace you, what would you want it to do: hold you, lift you, or let you go?",
      "What would make a warm, hopeful ending feel earned to you instead of fake?",
    ]},
  ],
};

DATA.hypotheses.push({
  id: "h4",
  title: "Love can cage or elevate",
  body: "The same intention, love, can create shame or acceptance depending on whether it holds someone in place or holds them up. An embrace that celebrates someone as they are is more powerful than shame.",
  implication: "Use one structure that can read as a cage or a cradle. The viewer's patience turns the cage into an elevating embrace of warmth, color and balance.",
  themes: ["containment", "safety", "learned"],
});

DATA.undercurrents.push(
  {
    id: "caging",
    name: "The Caging Embrace",
    desc: "Love that holds too tight: protecting, correcting, fixing. It comes from love but teaches shame.",
    evidence: [[3, "Maya"], [2, "Alex"], [9, "Leila"], [1, "Alex"]],
    reading: "Maya's mom loved her and still passed on the idea that a body is a project to fix. Alex reshapes himself so the people around him can hold him. Leila's soft thing inside a shell that pushes back is an embrace that has turned into a cage. None of this comes from cruelty.",
    theory: ["bowlby", "winnicott-false"],
    themes: ["learned", "containment", "editing"],
    provocation: "The same arms around the form, lit cold and pulled tight, read as bars.",
  },
  {
    id: "elevating",
    name: "The Elevating Embrace",
    desc: "Love that holds you up instead of in place. Warm, balanced, and celebrating you as you are.",
    evidence: [[5, "Leila"], [5, "Alex"], [10, "Maya"], [7, "Maya"]],
    reading: "What changed things for participants wasn't being fixed. It was being met: seeing their traits celebrated on other people, being recognized, feeling safe enough to stay. Love that elevates doesn't ask the person to change first.",
    theory: ["rogers", "hooks", "winnicott-holding", "grandin"],
    themes: ["familiarity", "safety"],
    provocation: "The same arms open, warm up and lift. The form is held up, not held in.",
  }
);

DATA.echoes.push({
  id: "e7", name: "Held vs. held back", a: [9, "Leila"], b: [10, "Maya"],
  note: "A shell that pushes back versus a space safe enough to stay in. Two kinds of holding.", under: "caging",
});

DATA.theory.push(
  { id: "rogers", name: "Unconditional Positive Regard", who: "Carl Rogers", line: "Accepting and valuing a person fully, without conditions on who they have to become." },
  { id: "hooks", name: "All About Love", who: "bell hooks", line: "Love is an action and a choice, not only a feeling, and it can't coexist with control or domination." },
  { id: "grandin", name: "Squeeze Machine", who: "Temple Grandin", line: "A device that applies deep, even pressure she found calming. Being held can soothe rather than trap." }
);

// Form Exploration: new section, placed after the Ritual Arc
DATA.formLab.sections.splice(
  DATA.formLab.sections.findIndex((s) => s.id === "ritual") + 1, 0,
  { id: "embrace", name: "The Embrace", desc: "Warmth, color and balance. One embrace that can cage or lift." }
);
DATA.formLab.items.push(
  { type: "embrace", name: "Cage or Cradle", body: "One set of metal arms around the soft form. Depending on light, heat and the viewer, it reads as bars or as a hold.", try: "Build one armature. Photograph it lit cold and tight vs. warm and open, and ask testers what they see.", under: ["caging", "elevating"] },
  { type: "embrace", name: "The Opening Embrace", body: "Rush in and the arms tighten. Stay and they loosen, open and lift.", try: "Servo or pneumatic ribs. Tension mapped to how fast the viewer moves, release mapped to how long they stay.", under: ["caging", "elevating", "exposure"] },
  { type: "embrace", name: "Lifted, Not Held Down", body: "As the embrace opens, it raises the form slightly off the ground: held up instead of held in.", try: "Counterweight or linear actuator. Test how little lift it takes to read as elevation.", under: ["elevating"] },
  { type: "embrace", name: "Balance", body: "Soft and rigid holding each other up. Neither one wins.", try: "Tensegrity study where the silicone's tension keeps the metal structure standing.", under: ["elevating", "ambivalence"] },
  { type: "embrace", name: "Warmth Blooms in Color", body: "Cold grays and blues while the form is caged. Warm amber, rose and gold bloom outward when the embrace opens.", try: "Projection color mapped to dwell time and touch, with the heat pads rising at the same time so color and warmth arrive together.", under: ["elevating"] },
  { type: "embrace", name: "Two Heartbeats", body: "Two heartbeats, out of sync at first, slowly falling into rhythm as the viewer stays.", try: "Two sound sources whose tempos drift toward each other over dwell time.", under: ["elevating", "witnessed"] },
  { type: "embrace", name: "Weighted Warmth", body: "A heated, weighted surface the viewer can rest a hand or arm in, so the sculpture embraces them back.", try: "Weighted fabric over a low-voltage heating pad. Look at Temple Grandin's squeeze machine as a reference.", under: ["elevating"] },
  { type: "embrace", name: "The Viewer Embraces Back", body: "The last act is the viewer choosing to hold the form they rejected at the start.", try: "Shape part of the form to fit arms. Track how many testers actually hug it.", under: ["elevating", "exposure"] },
  { type: "question", name: "How does someone tell the cage from the cradle?", body: "What makes the same gesture feel like holding in vs. holding up: pressure, time, whether you can leave?", try: "Show testers the armature in both states and ask them to describe what it's doing to the form.", under: ["caging", "elevating"] },
  { type: "question", name: "Does the warm ending feel earned?", body: "Love should feel stronger than shame, not like a forced happy ending. Leila: 'That feels fake.'", try: "Ask testers whether the transformation felt believable.", under: ["elevating", "witnessed"] }
);

// The ritual arc now passes through the embrace
(() => {
  const s = DATA.formLab.items.find((i) => i.name === "5. Staying");
  if (s) {
    s.name = "5. Staying / The Embrace";
    s.body = "Softening. The arms that seemed to cage the form open and lift it. Warmth and color bloom.";
    s.try = "Dwell-based transformation: the opening embrace + color bloom + rising heat.";
    s.under = ["exposure", "elevating"];
  }
})();

// Pinned concept notes (always shown at the top of Notes)
DATA.pinnedNotes = [
  {
    title: "The Embrace: concept",
    body: "An embrace can cage someone or lift them up, even when both come from love.\n\nThe caging embrace protects, corrects and holds in place ([[Learned Shame]], [[Soft Inside a Shell]]). The elevating embrace is warm, balanced and celebrates the person as they are ([[Safety, Not Fixing]], [[Familiarity]]).\n\nThe thesis argues the second is more powerful than shame. The installation should let the viewer feel one turn into the other.",
    tags: ["embrace", "concept"],
  },
  {
    title: "Cage vs. cradle: what's the difference?",
    body: "Same gesture, different meaning. Things to test:\n- Pressure: tight vs. even\n- Time: does it let go?\n- Freedom: can you leave?\n- Conditions: does it ask you to change first?\n- Temperature and color: cold and gray vs. warm and glowing\n- Direction: holding down vs. lifting up",
    tags: ["embrace", "questions"],
  },
];
