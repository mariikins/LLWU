// ===== LLWU SURVEY =====
// Google Form, 15 anonymous respondents (18+), all collected Nov 2, 2026.
// Source: full Sheets export. One duplicate submission removed.
// "codes" group written answers into themes. These groupings are an
// interpretation: review them and adjust the counts if you read them differently.

DATA.survey = {
  n: 15,
  collected: "Nov 2, 2026",
  note: "Counts come from the full response sheet with one duplicate submission removed. Written answers were grouped into themes by hand, so treat those counts as a reading of the data, not a fact. Demographic rows are sorted separately so no one can be traced across rows.",

  // minutes after 12:00 PM for each submission
  timeline: [42, 60, 64, 69, 71, 71, 72, 74, 75, 80, 83, 85, 87, 90, 149],

  demographics: [
    { label: "Age", total: 15, cats: [["18–23", 11], ["24–34", 3], ["35–44", 1]] },
    { label: "Gender", total: 15, cats: [["Female", 10], ["Male", 5]] },
    { label: "Ethnicity", total: 15, cats: [["Arab", 4], ["Asian", 3], ["North African", 3], ["Black", 2], ["Hispanic / Latinx", 1], ["White", 1], ["Black & Southeast Asian", 1]] },
    { label: "Faith that shaped them", total: 15, cats: [["Islam", 9], ["Christianity", 4], ["Buddhism", 1], ["Islam & Christianity", 1]] },
    { label: "Where they grew up", total: 15, cats: [["US only", 8], ["US + another country", 5], ["Outside the US", 2]] },
  ],

  embrace: { n: 13, lift: 8, hold: 3, go: 2 },

  conflict: { n: 14, cats: [["Communication & compassion", 8], ["Balance & compromise", 5], ["Logical reasoning", 1]] },

  coping: [["Faith & prayer", 6], ["Friends", 6], ["Family", 3], ["Therapy", 1], ["Music", 1], ["A hobby or a good show", 1], ["Being at home in yourself", 1], ["Time alone, not isolating", 1], ["Acceptance", 1], ["Avoidance", 1], ["Detachment", 1], ["Process addictions", 1]],

  // Written answers grouped into themes
  codes: [
    { q: "Does love have to be earned?", n: 15, cats: [["No", 9], ["Not earned, but built over time", 3], ["Yes", 3]] },
    { q: "What do you do to be easier to love?", n: 15, cats: [["Shrink or adapt myself", 5], ["Work on myself", 5], ["Be more understanding", 5]] },
    { q: "Who were you before shame?", n: 15, cats: [["Free, loud, expressive", 9], ["Not ashamed / the same", 3], ["Something else", 3]] },
    { q: "What are you hiding?", n: 15, cats: [["My vulnerable or sensitive side", 5], ["Nothing", 3], ["Something else", 7]] },
    { q: "Which version do you exaggerate?", n: 15, cats: [["Strength: confident, fine, unbothered", 6], ["Social and fun", 3], ["My authentic self", 3], ["Something else", 3]] },
    { q: "Once hated, now protected", n: 14, cats: [["Sensitivity and kindness", 5], ["Identity, body, hair", 4], ["Expressiveness and play", 4], ["Never hated anything", 1]] },
    { q: "What part are you still angry at?", n: 15, cats: [["Letting people walk over me", 5], ["Avoiding or overthinking", 3], ["Something else", 5], ["Nothing", 2]] },
    { q: "One thing for your younger self", n: 15, cats: [["Stop people-pleasing, you can say no", 5], ["Worry less, be patient", 4], ["Something else", 6]] },
  ],

  sections: [
    { name: "Making yourself easier to love", quotes: [
      "Tone down personality, allow people to get away with treating me badly bc I think that's the love I deserve",
      "Stopped myself from being super enthusiastic about things and trying not be clingy",
      "I sometimes put others' needs before my own and hold back my feelings to avoid conflict or being seen as difficult.",
      "I think that practicing love makes you easier to love. You attract what you practice.",
    ]},
    { name: "Does love have to be earned?", quotes: [
      "I do not think love should have to be earned, but I sometimes feel I need to be helpful and understanding to keep it.",
      "No, I think that love should not be earned. I think it comes from reinforcing a belief that we must bend to make ourselves lovable",
      "Love has to be natural. More magnetic. It's given and not earned.",
      "Yes because rejection or dismissal takes place if one is not loved or tolerated",
    ]},
    { name: "When you feel rejected", quotes: [
      "I tend to question whether I was too much or did something wrong, even when their reaction may not be about me.",
      "I usually wallow in self hate but then remind myself I'm not always going to be someone's person",
      "That they must be feeling that way about themselves.",
      "I'm at fault because of a shortcoming I had.",
    ]},
    { name: "What you hide", quotes: [
      "My vulnerable side, especially how much I need reassurance, affection, and emotional support. I worry it will be seen as weakness or neediness.",
      "My sensitive side because it is a very easy emotion to take advantage of",
      "I wish I could show more of my social side but I don't know fully how to",
    ]},
    { name: "The version you exaggerate", quotes: [
      "The strong, capable version who has everything handled, because it feels safer than admitting I am overwhelmed or need help.",
      "The confident side, since I don't feel confident on the inside and don't want anyone to see that or to think I'm weak.",
      "I show that I don't really care and let things slide off me but I'm a really emotional person",
      "I feel like I exaggerate I'm doing fine most of the time.",
    ]},
    { name: "Beliefs to unlearn", quotes: [
      "That I have to be strong, useful, and easy to be around to deserve love.",
      "That I have to constantly prove myself",
      "I am bothersome / too much to people.",
      "I wish I didn't think my smile was ugly",
    ]},
    { name: "What a \"good person\" looks like", quotes: [
      "Someone who puts others first, stays agreeable, and does not disappoint people, even at her own expense.",
      "An obedient person who does not express themself.",
      "A person who's kind to everyone, is not obnoxious or loud",
      "Good girls serve their families and become mothers while good boys grow up to be providers",
    ]},
    { name: "Who you were before shame", quotes: ["Someone very expressive, happily loud, and outgoing", "Curious, expressive, affectionate, and less worried about how others perceived me.", "A free spirit", "I was very all over the place when I was younger, I kind of toned myself down for the public."] },
    { name: "Still angry at", quotes: [
      "The part of me that stays quiet about my needs, then feels hurt when they go unmet.",
      "The part where I forgave people continuously when they wronged me rather than holding them accountable",
      "Being so obedient to parents wishes",
    ]},
    { name: "Once hated, now protected", quotes: [
      "My hair :)! I was told it was too big, or too messy… Now that I'm away from those environments and saw the breadth of appreciation of my hair texture, I embraced it more.",
      "In high school I rejected my creativity, nerdiness, and unseriousness… I now covet those parts of myself",
      "My sensitivity. I am learning to protect it because it allows me to care deeply and connect with others.",
      "My heart. Was too kind to those who didn't deserve it but now I see it as a blessing",
    ]},
    { name: "To your younger self", quotes: [
      "You do not have to earn love by being everything to everyone. Your needs and feelings matter, too.",
      "People pleasing is dumb and no one asked you to do it",
      "You're allowed to be upset and you're allowed to say no and stand up for yourself",
      "You have everything you need",
      "Stop trying to act like an adult… stay curious, don't assume the world is as you're told it is.",
    ]},
    { name: "Someone who made you feel bigger", quotes: [
      "My sister. She listens without judging, reminds me of my strengths, and makes me feel loved without having to prove anything.",
      "My boyfriend, he always celebrates my small wins with me and that is something I'm not used to",
      "I have a dear friend who I feel like mirrors me… Very positive and pushes me to grow.",
      "Mother, they congratulated me when I was happy and was by my side when I was sad. I felt like I wasn't doing everything alone.",
      "A random person at work who said can't wait to see how you will change the world",
    ]},
  ],

  findings: [
    {
      id: "lift", title: "Lift, don't just hold", stat: "8 of 13", statLabel: "want to be lifted",
      evidence: "Asked what an embrace should do, 8 chose lift you, 3 chose hold you and 2 chose let you go.",
      means: "Make elevation the peak of the experience, not comfort. The form rises, light moves upward and the sound climbs. Holding is only the middle step.",
      under: ["elevating"], hyp: ["h4", "h5"],
    },
    {
      id: "armor", title: "The shell is performed strength", stat: "6 of 15", statLabel: "exaggerate being strong or fine",
      evidence: "\"The strong, capable version who has everything handled, because it feels safer than admitting I am overwhelmed.\" \"The confident side, since I don't feel confident on the inside.\"",
      means: "The rigid metal isn't only something done to people; it's armor they wear. Let the viewer see the structure as a performance the soft form is hiding behind.",
      under: ["conditional", "avoidance", "caging"], hyp: ["h9"],
    },
    {
      id: "sensitive", title: "Most hidden, most reclaimed", stat: "5 of 15", statLabel: "hide their vulnerable side",
      evidence: "Vulnerability and sensitivity are the most common things people hide, and sensitivity and kindness are also the most common thing people have learned to protect (5 of 14).",
      means: "The soft core is the point. What the embrace finally reveals and celebrates is the sensitive, needy, tender part.",
      under: ["witnessed", "elevating", "toomuch"], hyp: ["h9"],
    },
    {
      id: "shrink", title: "People shrink to be loved", stat: "5 of 15", statLabel: "shrink or adapt to be loved",
      evidence: "\"Tone down personality.\" \"Stopped myself from being super enthusiastic… trying not be clingy.\" \"Hold back my feelings to avoid… being seen as difficult.\"",
      means: "The form starts compressed and folded into itself. Acceptance means permission to take up space, so it slowly expands past its frame.",
      under: ["conditional", "toomuch", "caging"], hyp: ["h6"],
    },
    {
      id: "toomuch", title: "Before shame, they were free", stat: "9 of 15", statLabel: "describe a freer, louder self",
      evidence: "\"Someone very expressive, happily loud, and outgoing.\" \"Curious, expressive, affectionate.\" \"I kind of toned myself down for the public.\"",
      means: "The 'ugly' thing may not be a body part but excess: overflow, spill, too loud, too soft. The transformation should celebrate the overflow instead of containing it.",
      under: ["toomuch"], hyp: ["h6"],
    },
    {
      id: "selferase", title: "Angry at their own silence", stat: "5 of 15", statLabel: "angry at letting others walk over them",
      evidence: "\"The part of me that stays quiet about my needs.\" \"The part that let people walk over me.\" \"My inability to say no.\" 5 would tell their younger self to stop people-pleasing.",
      means: "The installation shouldn't ask anything of the viewer. Let it give without needing to be pleased: no performance required to get warmth back.",
      under: ["conditional", "caging"], hyp: ["h6", "h8"],
    },
    {
      id: "mirrored", title: "Healed by being mirrored kindly", stat: "13", statLabel: "named someone who made them feel bigger",
      evidence: "Sisters, mothers, partners, friends, teachers, coworkers. What they did: listened without judging, celebrated small wins, \"mirrors me,\" \"reminds me of my strengths.\"",
      means: "The mirror can turn from judge into friend. The installation reflects the viewer back cold and fragmented at first, then warm and whole.",
      under: ["mirror", "witnessed", "elevating"], hyp: ["h7"],
    },
    {
      id: "gap", title: "Belief vs. behavior", stat: "9 of 15", statLabel: "say love doesn't have to be earned",
      evidence: "\"I do not think love should have to be earned, but I sometimes feel I need to be helpful and understanding to keep it.\" Many 'no' answers add that love has to be worked on or maintained.",
      means: "The installation lives in that gap. It shouldn't argue that love is unconditional; it should let people feel it.",
      under: ["conditional", "caging"], hyp: ["h8"],
    },
    {
      id: "connection", title: "Repair happens through people and faith", stat: "8 of 14", statLabel: "choose communication & compassion",
      evidence: "5 chose balance & compromise; only 1 chose logic. When asked what helped them cope, 6 named faith or prayer and 6 named friends.",
      means: "Healing should feel relational and almost ritual: two heartbeats syncing, a form that fully opens with two people, a repeated gesture like prayer.",
      under: ["witnessed", "elevating"], hyp: ["h5"],
    },
    {
      id: "context", title: "The environment changes the reading", stat: "4 of 14", statLabel: "reclaimed identity, body or hair",
      evidence: "\"Now that I'm away from those environments and saw the breadth of appreciation of my hair texture, I embraced it more.\" Others named culture, ethnicity and their body.",
      means: "The same form in a different light reads differently, which is exactly the cage/cradle idea. Change light, color and heat around the form, not the form itself.",
      under: ["exposure", "double"], hyp: ["h1", "h3"],
    },
    {
      id: "good", title: "The \"good person\" cage", stat: "Obedient", statLabel: "what the world taught",
      evidence: "\"Someone who puts others first, stays agreeable, and does not disappoint people, even at her own expense.\" \"An obedient person who does not express themself.\"",
      means: "Expectations are a kind of embrace too. The rigid structure can carry this: it isn't cruel, it's the shape of being good.",
      under: ["inheritance", "caging"], hyp: ["h1"],
    },
  ],
};

/* ---------- New hypotheses from the survey ---------- */
DATA.hypotheses.push(
  {
    id: "h5", title: "People want to be lifted, not only held",
    body: "Most respondents (8 of 13) wanted an embrace that lifts them; only 3 wanted to be held. Comfort alone isn't the resolution people are looking for.",
    implication: "The climax of the installation is elevation: the form rises, light moves upward, the sound climbs.",
    themes: ["safety"],
  },
  {
    id: "h6", title: "Shame makes people smaller",
    body: "Respondents describe toning themselves down, holding back feelings, and not saying no. 9 of 15 remember a freer, louder self from before shame.",
    implication: "The form begins compressed and expands as it's accepted. Taking up space is the transformation.",
    themes: ["editing", "containment"],
  },
  {
    id: "h7", title: "A kind mirror heals what a judging mirror wounds",
    body: "The moments that made people feel bigger came from someone reflecting them back with warmth: a sister who 'reminds me of my strengths,' a friend who 'mirrors me.'",
    implication: "Reflection in the installation should shift from cold and fragmented to warm and whole.",
    themes: ["evaluation", "safety"],
  },
  {
    id: "h8", title: "What we believe about love isn't how we act for it",
    body: "9 of 15 say love shouldn't have to be earned, but many describe working, bending and staying quiet to keep it.",
    implication: "Don't tell the viewer love is unconditional. Let the installation give it without conditions and let them feel the difference.",
    themes: ["editing", "learned"],
  },
  {
    id: "h9", title: "The hard shell is armor people choose",
    body: "6 of 15 exaggerate being strong, confident or fine, and the most common thing hidden is vulnerability. The rigid exterior is often self-protection, not just something imposed.",
    implication: "Treat the metal as armor the form wears. The embrace helps it set the armor down, rather than breaking it off.",
    themes: ["containment", "hiding"],
  }
);

/* ---------- New undercurrent ---------- */
DATA.undercurrents.push({
  id: "toomuch",
  name: "Too Much",
  desc: "Shame about excess: too sensitive, too expressive, too loud, too needy. People learn to turn themselves down.",
  evidence: [[2, "Alex"], [1, "Alex"]],
  survey: [
    "I am bothersome / too much to people.",
    "I tend to question whether I was too much or did something wrong",
    "Stopped myself from being super enthusiastic about things and trying not be clingy",
    "I was very all over the place when I was younger, I kind of toned myself down for the public.",
  ],
  reading: "The survey widened the picture beyond bodies. A lot of what people hide is intensity: crying easily, needing reassurance, being loud, being enthusiastic. Alex's 'more digestible' fits right in.",
  theory: ["winnicott-false", "rogers"],
  themes: ["editing", "hiding"],
  provocation: "The 'ugly' form overflows its frame. The embrace doesn't contain the overflow, it celebrates it.",
});

/* Survey voices that deepen existing undercurrents */
const addSurvey = (id, quotes) => { const u = DATA.undercurrents.find((x) => x.id === id); if (u) u.survey = (u.survey || []).concat(quotes); };
addSurvey("mirror", ["I have a dear friend who I feel like mirrors me… Very positive and pushes me to grow."]);
addSurvey("conditional", ["That I have to be strong, useful, and easy to be around to deserve love.", "I sometimes put others' needs before my own and hold back my feelings to avoid conflict or being seen as difficult."]);
addSurvey("caging", ["Someone who puts others first, stays agreeable, and does not disappoint people, even at her own expense.", "Being so obedient to parents wishes"]);
addSurvey("elevating", ["My sister. She listens without judging, reminds me of my strengths, and makes me feel loved without having to prove anything.", "My boyfriend, he always celebrates my small wins with me"]);
addSurvey("exposure", ["Now that I'm away from those environments and saw the breadth of appreciation of my hair texture, I embraced it more."]);
addSurvey("inheritance", ["Good girls serve their families and become mothers while good boys grow up to be providers"]);
addSurvey("avoidance", ["I push most negative feelings/memories to the back of my mind rather than dealing with it", "The strong, capable version who has everything handled, because it feels safer than admitting I am overwhelmed"]);
addSurvey("witnessed", ["My vulnerable side, especially how much I need reassurance, affection, and emotional support. I worry it will be seen as weakness or neediness."]);

/* ---------- Form Exploration ideas from the survey ---------- */
DATA.formLab.items.push(
  { type: "interaction", src: "survey", name: "Rise", body: "8 of 13 people want to be lifted. The peak of the experience: the form lifts, light climbs and the tone rises.", try: "Linear actuator or counterweight. Pair a slow upward light sweep with a rising pitch over 10–15 seconds.", under: ["elevating"] },
  { type: "form", src: "survey", name: "Taking Up Space", body: "The form starts compressed and folded into itself, then expands past its frame as the viewer stays.", try: "Pneumatic silicone that inflates beyond the edge of its metal frame. Compare 'contained' vs. 'overflowing' with testers.", under: ["toomuch", "conditional"] },
  { type: "form", src: "survey", name: "Armor Set Down", body: "6 of 15 perform strength. The metal is armor the form wears, and the embrace lets it set the armor down instead of breaking it.", try: "Hinged metal plates over silicone that slowly open and rest on the floor around the form.", under: ["conditional", "avoidance", "elevating"] },
  { type: "material", src: "survey", name: "Overflow", body: "Material that spills over its edges: too much, and beautiful because of it.", try: "Pour silicone or wax so it drips over a rigid rim and sets mid-spill.", under: ["toomuch"] },
  { type: "projection", src: "survey", name: "The Kind Mirror", body: "Like 'a friend who mirrors me.' The viewer's reflection starts cold and fragmented and becomes warm and whole.", try: "Webcam silhouette broken into shards, re-forming and warming in color with dwell time.", under: ["mirror", "elevating"] },
  { type: "sound", src: "survey", name: "To Your Younger Self", body: "Whispered messages from the survey: 'You're allowed to say no.' 'You have everything you need.' Released one at a time when someone stays.", try: "Get respondents' consent first, then record volunteers reading them. Trigger on touch or dwell.", under: ["witnessed", "elevating"] },
  { type: "ritual", src: "survey", name: "Ritual Repetition", body: "6 of 15 coped through faith and prayer. A repeated, patient gesture (approach, stay, return) may feel familiar and safe.", try: "Design the interaction so that coming back a second time deepens the response.", under: ["exposure", "witnessed"] },
  { type: "embrace", src: "survey", name: "Compassion Over Logic", body: "Only 1 of 14 picked logic to resolve conflict. The work shouldn't explain itself; it should feel warm.", try: "Keep wall text minimal. Let warmth, color and sound carry the meaning.", under: ["witnessed"] },
  { type: "embrace", src: "survey", name: "Celebrate Small Wins", body: "'He always celebrates my small wins with me.' Every small step closer gets a small warm response.", try: "Map each step of approach to a small bloom of light or warmth, not just the final moment.", under: ["elevating", "exposure"] },
  { type: "question", src: "survey", name: "Lift for whom?", body: "Most respondents were 18–23 and most were women. Does that change with age or gender?", try: "Ask the next round of testers the same hold / lift / let go question and compare.", under: ["elevating"] }
);

/* Balance gets survey backing */
(() => {
  const b = DATA.formLab.items.find((i) => i.name === "Balance");
  if (b) b.body += " 5 of 14 respondents said balance and compromise is what resolves conflict.";
})();
