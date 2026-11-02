// ===== LLWU DEEP LAYER =====
// Undercurrents (deeper psychological patterns), echoes (where participants
// mirror each other), theory, and Form Lab explorations.
// Evidence uses [question number (1-10), participant].

/* ---------- UNDERCURRENTS ---------- */
DATA.undercurrents = [
  {
    id: "mirror",
    name: "The Internal Mirror",
    desc: "Other people's gaze slowly becomes your own. Eventually no one needs to be watching for you to feel watched.",
    evidence: [[2, "Leila"], [8, "Leila"], [4, "Leila"], [3, "Alex"]],
    reading: "Leila 'started noticing it myself' after others commented, and now imagines how she looks 'even when nobody is looking.' She avoids mirrors on bad days. Alex learned what not to show from other people's discomfort. The mirror is both the wound and the thing avoided.",
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
    reading: "Leila found features she criticized on herself beautiful on other women. Alex's traits stopped being 'evidence that I was strange' once he saw them in others. Compassion flows outward but not inward.",
    theory: ["neff", "zajonc"],
    themes: ["familiarity", "evaluation"],
    provocation: "Let the viewer meet the 'ugly' form as something other than themselves first, then reveal it as theirs.",
  },
  {
    id: "conditional",
    name: "Conditional Belonging",
    desc: "Being accepted feels like it depends on editing yourself. Showing the whole self risks being left.",
    evidence: [[1, "Alex"], [2, "Alex"], [8, "Alex"], [9, "Alex"]],
    reading: "Alex makes himself 'more digestible' and feels he has to 'choose which version of myself gets to exist.' The abyss isn't one trait. It's the fear that the unedited self would push people away. This is close to abandonment fear.",
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
    reading: "Maya imagines 'something you can't immediately tell whether you're supposed to touch or stay away from.' Alex's form 'might look beautiful, but the movement would be uncomfortable to watch.' This ambivalence is exactly where the installation lives.",
    theory: ["kristeva", "uncanny"],
    themes: ["containment"],
    provocation: "Materials that sit between flesh and object, alive and inert, so the first reaction is uncertainty rather than disgust.",
  },
  {
    id: "witnessed",
    name: "Being Witnessed",
    desc: "Wanting to be recognized without having to explain or perform.",
    evidence: [[7, "Leila"], [7, "Maya"], [10, "Maya"], [10, "Leila"]],
    reading: "Leila wants to be understood 'without having to explain it to another person.' Maya felt 'something had been recognized' in front of a painting. But nobody wants false comfort. Being witnessed is not the same as being told it's all beautiful.",
    theory: ["winnicott-holding", "brown"],
    themes: ["safety", "shape"],
    provocation: "The work responds to presence, not performance. Just being there is enough to change it.",
  },
  {
    id: "exposure",
    name: "Exposure Softens",
    desc: "Time and closeness change how something is seen.",
    evidence: [[5, "Maya"], [5, "Alex"], [5, "Leila"]],
    reading: "All three described acceptance coming through exposure: seeing the trait in others, or simply 'spending enough time with it.' This is the most direct mechanic the interviews offer.",
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

/* ---------- FORM LAB ---------- */
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
    { type: "form", name: "The Shapeshifter", body: "From Alex: 'something that keeps changing shape to fit a space that's too small for it.'", try: "Soft form forced into a narrow frame; let it slowly expand when the viewer stays.", under: ["conditional"] },
    { type: "form", name: "Touch or Stay Away", body: "From Maya: a form you can't tell whether to approach or avoid.", try: "Test which surface qualities trigger hesitation versus curiosity.", under: ["ambivalence"] },
    { type: "form", name: "The Broken Mirror", body: "A reflective surface fragmented across a fleshy body.", try: "Mirror pieces that only show the viewer from close up.", under: ["mirror"] },
    { type: "form", name: "Strata", body: "Layered casts, with older layers showing through.", try: "Cast several bodies or body parts and layer them translucently.", under: ["inheritance"] },
    { type: "form", name: "The Unfinished", body: "A form that looks mid-process: open seams, visible armature.", try: "Leave part of the sculpture as raw structure.", under: ["unfinished"] },
    { type: "form", name: "The Fold", body: "The places where bodies fold, crease and hide.", try: "Study folds in skin and fabric; build a form made mostly of creases.", under: ["avoidance"] },

    // Interaction experiments
    { type: "interaction", name: "Recoil", body: "Approach fast and the form contracts; the sound tightens.", try: "Distance sensor + speed threshold → servo or pneumatic contraction.", under: ["avoidance"] },
    { type: "interaction", name: "Dwell to Soften", body: "Stay still and the form slowly warms, glows and relaxes.", try: "Timer starts when the viewer is within range and still for 20+ seconds.", under: ["exposure"] },
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
    { type: "ritual", name: "2. Approach", body: "Tension; the work reacts to being looked at.", try: "Recoil + tight sound.", under: ["mirror"] },
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
