// ===== LLWU SURVEY =====
// Google Form responses: 15 anonymous participants (18+), collected Nov 2026.
// Some written answers were cut off in the summary export. Paste in the
// full answers from the Sheets/CSV export to complete them.

DATA.survey = {
  n: 15,
  collected: "Nov 2026",
  note: "Some written answers were cut off in the Google Forms summary, so quotes and word counts come from the answers that were readable. Demographic rows are sorted separately, so no one can be traced across rows.",

  demographics: [
    { label: "Age", total: 15, cats: [["18–23", 12], ["24–34", 2], ["35–44", 1]] },
    { label: "Gender", total: 15, cats: [["Female", 10], ["Male", 5]] },
    { label: "Ethnicity", total: 15, cats: [["Arab", 4], ["Asian", 4], ["Black", 2], ["North African", 2], ["Hispanic / Latinx", 1], ["White", 1], ["Black & Southeast Asian", 1]] },
    { label: "Faith that shaped them", total: 15, cats: [["Islam", 9], ["Christianity", 4], ["Buddhism", 1], ["Islam & Christianity", 1]] },
    { label: "Where they grew up", total: 15, cats: [["US only", 6], ["US + another country", 4], ["Outside the US", 3], ["Unclear (cut off)", 2]] },
  ],

  embrace: { n: 13, lift: 9, hold: 2, go: 2 },

  conflict: { n: 14, cats: [["Communication & compassion", 7], ["Balance & compromise", 6], ["Logical reasoning", 1]] },

  coping: [["Friends", 4], ["Family", 2], ["God", 2], ["Therapy", 1], ["Acceptance", 1], ["Avoidance", 1], ["Detachment", 1], ["Time to myself", 1], ["A hobby or a good show", 1]],

  sections: [
    { name: "Making yourself easier to love", quotes: [
      "Tone down personality, allow people to get away with treating me badly bc I think that's the love I deserve",
      "Self-care & personality adaption",
      "Trying to be cooperative and understanding and open minded to different opinions",
      "I take care of my mental and physical health",
      "Working on myself where I feel like I'm lacking, not based on other opinions, but also giving myself some grace when I need to.",
    ]},
    { name: "When you feel rejected", quotes: [
      "I usually wallow in self hate but then remind myself I'm not always going to be someone's person",
      "Difference of opinion and personality, there is always someone out there who won't make you feel that way",
      "Not everyone is meant to necessarily agree or like you. It may not be personal, or it could be.",
      "I self reflect on why that could have happened and try to better myself if I do believe it was my fault",
    ]},
    { name: "Beliefs to unlearn", quotes: [
      "I am bothersome / too much to people.",
      "That I have to be perfect and that I must bend to everything and everyone around me.",
      "I think that I'm too \"sensitive\" or \"too mad\"",
      "I shut down anytime there's a negative emotion involved until I deal with it myself internally",
    ]},
    { name: "What a \"good person\" looks like", quotes: [
      "Obedient, selfless",
      "Someone who works hard, maintains religious principles, respectful, humble.",
      "Someone who is kind and well liked.",
      "Good girls serve their families and become mothers while good boys grow up to be providers",
    ]},
    { name: "Who you were before shame", quotes: ["A free spirit", "Free", "I was way too outgoing", "Someone very expressive", "I was very all over the place"] },
    { name: "Once hated, now protected", quotes: [
      "My hair :)! I was told it was too big, or too messy… Now that I'm away from those environments and saw the breadth of appreciation of my hair texture, I embraced it more.",
      "My personality was something I always toned down but now I embrace it",
      "My sensitive side. I cry very easily and have always been ashamed of it so I've started hiding it by using humor",
      "Too much self-expression and happiness",
      "My ethnicity",
    ]},
    { name: "To your younger self", quotes: [
      "You're allowed to be upset and you're allowed to say no and stand up for yourself",
      "Don't try to please your parents, it's ok to have arguments that will not take their love away",
      "You will be okay. Stop overthinking",
      "Not to hate herself because she was fat",
      "Keep believing yourself and you can do anything, FIND CONNECTIONS",
      "Do not let the world change your morals",
    ]},
    { name: "Someone who made you feel bigger", quotes: [
      "I have a dear friend who I feel like mirrors me… She just talks to me how I talk to other people. Very positive and pushes me to grow.",
      "Any time someone shows me who I am to them… it makes me realize that I judge myself too harshly",
      "A random person at work who said can't wait to see how you will change the world",
      "When they told me I've grown as a person",
      "My communications teacher told me I had a personality that people drew towards",
    ]},
  ],

  findings: [
    {
      id: "lift",
      title: "Lift, don't just hold",
      stat: "9 of 13",
      statLabel: "want to be lifted",
      evidence: "Asked what an embrace should do, 9 chose lift you, 2 chose hold you and 2 chose let you go.",
      means: "Make elevation the peak of the experience, not comfort. The form rises, light moves upward and the sound climbs. Holding is only the middle step.",
      under: ["elevating"], hyp: ["h4", "h5"],
    },
    {
      id: "shrink",
      title: "People shrink to be loved",
      stat: "Toned down",
      statLabel: "the most common move",
      evidence: "\"Tone down personality.\" \"Personality adaption.\" \"I must bend to everything and everyone.\" \"I am bothersome / too much.\"",
      means: "The form starts compressed and folded into itself. Acceptance means permission to take up space, so it slowly expands past its frame.",
      under: ["conditional", "toomuch", "caging"], hyp: ["h6"],
    },
    {
      id: "toomuch",
      title: "The shame of being too much",
      stat: "Free",
      statLabel: "who they were before shame",
      evidence: "Before shame: \"a free spirit,\" \"way too outgoing,\" \"very expressive.\" What they hid: sensitivity, self-expression, happiness, crying easily.",
      means: "The ugly thing may not be a body part but excess: overflow, spill, too loud, too soft. The transformation should celebrate the overflow instead of containing it.",
      under: ["toomuch"], hyp: ["h6"],
    },
    {
      id: "mirrored",
      title: "Healed by being mirrored kindly",
      stat: "Others' words",
      statLabel: "made them feel bigger",
      evidence: "\"A friend who mirrors me.\" \"Someone shows me who I am to them.\" A coworker: \"can't wait to see how you'll change the world.\"",
      means: "The mirror can turn from judge into friend. The installation reflects the viewer back cold and fragmented at first, then warm and whole.",
      under: ["mirror", "witnessed", "elevating"], hyp: ["h7"],
    },
    {
      id: "context",
      title: "The environment changes the reading",
      stat: "Hair, ethnicity",
      statLabel: "once hated, now protected",
      evidence: "\"Now that I'm away from those environments and saw the breadth of appreciation of my hair texture, I embraced it more.\"",
      means: "The same form in a different light reads differently, which is exactly the cage/cradle idea. Change light, color and heat around the form, not the form itself.",
      under: ["exposure", "double"], hyp: ["h1", "h3"],
    },
    {
      id: "connection",
      title: "Repair happens through people",
      stat: "7 of 14",
      statLabel: "choose communication & compassion",
      evidence: "Another 6 chose balance & compromise; only 1 chose logic. Coping answers name friends, family and God far more than anything solitary.",
      means: "Healing should feel relational: two heartbeats syncing, a form that fully opens with two people, balance between soft and rigid.",
      under: ["witnessed", "elevating"], hyp: ["h5"],
    },
    {
      id: "gap",
      title: "Belief vs. behavior",
      stat: "\"No\"",
      statLabel: "most say love isn't earned",
      evidence: "Most readable answers said love shouldn't have to be earned, yet people describe toning down, bending, and accepting bad treatment to be loved.",
      means: "The installation lives in that gap. It shouldn't argue that love is unconditional; it should let people feel it.",
      under: ["conditional", "caging"], hyp: ["h8"],
    },
    {
      id: "good",
      title: "The \"good person\" cage",
      stat: "Obedient",
      statLabel: "what the world taught",
      evidence: "\"Obedient, selfless.\" \"Kind and well liked.\" \"Good girls serve their families and become mothers.\"",
      means: "Expectations are a kind of embrace too. The rigid structure can carry this: it isn't cruel, it's the shape of being good.",
      under: ["inheritance", "caging"], hyp: ["h1"],
    },
  ],
};

/* ---------- New hypotheses from the survey ---------- */
DATA.hypotheses.push(
  {
    id: "h5",
    title: "People want to be lifted, not only held",
    body: "When given the choice, most respondents (9 of 13) wanted an embrace that lifts them. Comfort alone isn't the resolution people are looking for.",
    implication: "The climax of the installation is elevation: the form rises, light moves upward, the sound climbs.",
    themes: ["safety"],
  },
  {
    id: "h6",
    title: "Shame makes people smaller",
    body: "Respondents describe toning themselves down, bending to others and hiding being 'too much.' Shame works by shrinking.",
    implication: "The form begins compressed and expands as it's accepted. Taking up space is the transformation.",
    themes: ["editing", "containment"],
  },
  {
    id: "h7",
    title: "A kind mirror heals what a judging mirror wounds",
    body: "The moments that made people feel bigger came from someone reflecting them back with warmth: a friend who 'mirrors me,' someone showing 'who I am to them.'",
    implication: "Reflection in the installation should shift from cold and fragmented to warm and whole.",
    themes: ["evaluation", "safety"],
  },
  {
    id: "h8",
    title: "What we believe about love isn't how we act for it",
    body: "Most respondents say love shouldn't have to be earned, but describe working, bending and shrinking to receive it.",
    implication: "Don't tell the viewer love is unconditional. Let the installation give it without conditions and let them feel the difference.",
    themes: ["editing", "learned"],
  }
);

/* ---------- New undercurrent ---------- */
DATA.undercurrents.push({
  id: "toomuch",
  name: "Too Much",
  desc: "Shame about excess: too sensitive, too expressive, too loud, too free. People learn to turn themselves down.",
  evidence: [[2, "Alex"], [1, "Alex"]],
  survey: [
    "I am bothersome / too much to people.",
    "Too much self-expression and happiness",
    "My sensitive side. I cry very easily and have always been ashamed of it",
    "I was way too outgoing",
  ],
  reading: "The survey widened the picture beyond bodies. A lot of what people hide is intensity: crying easily, being outgoing, being happy, being 'too mad.' Alex's 'more digestible' fits right in.",
  theory: ["winnicott-false", "rogers"],
  themes: ["editing", "hiding"],
  provocation: "The 'ugly' form overflows its frame. The embrace doesn't contain the overflow, it celebrates it.",
});

/* Survey voices that deepen existing undercurrents */
const addSurvey = (id, quotes) => { const u = DATA.undercurrents.find((x) => x.id === id); if (u) u.survey = (u.survey || []).concat(quotes); };
addSurvey("mirror", ["I have a dear friend who I feel like mirrors me… Very positive and pushes me to grow."]);
addSurvey("conditional", ["Tone down personality, allow people to get away with treating me badly bc I think that's the love I deserve", "I must bend to everything and everyone around me."]);
addSurvey("caging", ["Obedient, selfless", "Don't try to please your parents, it's ok to have arguments that will not take their love away"]);
addSurvey("elevating", ["A random person at work who said can't wait to see how you will change the world", "Any time someone shows me who I am to them… I am a better person than I think I am"]);
addSurvey("exposure", ["Now that I'm away from those environments and saw the breadth of appreciation of my hair texture, I embraced it more."]);
addSurvey("inheritance", ["Good girls serve their families and become mothers while good boys grow up to be providers"]);
addSurvey("avoidance", ["I shut down anytime there's a negative emotion involved until I deal with it myself internally", "Acceptance, avoidance, seeing my friends"]);

/* ---------- Form Exploration ideas from the survey ---------- */
DATA.formLab.items.push(
  { type: "interaction", src: "survey", name: "Rise", body: "9 of 13 people want to be lifted. The peak of the experience: the form lifts, light climbs and the tone rises.", try: "Linear actuator or counterweight. Pair a slow upward light sweep with a rising pitch over 10–15 seconds.", under: ["elevating"] },
  { type: "form", src: "survey", name: "Taking Up Space", body: "The form starts compressed and folded into itself, then expands past its frame as the viewer stays.", try: "Pneumatic silicone that inflates beyond the edge of its metal frame. Compare 'contained' vs. 'overflowing' with testers.", under: ["toomuch", "conditional"] },
  { type: "material", src: "survey", name: "Overflow", body: "Material that spills over its edges: too much, and beautiful because of it.", try: "Pour silicone or wax so it drips over a rigid rim and sets mid-spill.", under: ["toomuch"] },
  { type: "projection", src: "survey", name: "The Kind Mirror", body: "Like 'a friend who mirrors me.' The viewer's reflection starts cold and fragmented and becomes warm and whole.", try: "Webcam silhouette broken into shards, re-forming and warming in color with dwell time.", under: ["mirror", "elevating"] },
  { type: "sound", src: "survey", name: "To Your Younger Self", body: "Whispered messages from the survey: 'You're allowed to say no.' 'You will be okay.' Released one at a time when someone stays.", try: "Get respondents' consent first, then record volunteers reading them. Trigger on touch or dwell.", under: ["witnessed", "elevating"] },
  { type: "embrace", src: "survey", name: "Compassion Over Logic", body: "Only 1 of 14 picked logic to resolve conflict. The work shouldn't explain itself; it should feel warm.", try: "Keep wall text minimal. Let warmth, color and sound carry the meaning.", under: ["witnessed"] },
  { type: "question", src: "survey", name: "Lift for whom?", body: "Most respondents were 18–23 and most were women. Does that change with age or gender?", try: "Ask the next round of testers the same hold / lift / let go question and compare.", under: ["elevating"] }
);

/* Balance gets survey backing */
(() => {
  const b = DATA.formLab.items.find((i) => i.name === "Balance");
  if (b) b.body += " 6 of 14 respondents said balance and compromise is what resolves conflict.";
})();
