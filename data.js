// ===== LLWU DATA =====
// Edit this file to add interviews, notes, case studies and swatches.

const DATA = {
  project: {
    title: "Learning to Love What Is Ugly",
    statement:
      "I keep thinking about the possibility of loving something that feels impossible to love. Something shameful, something uncomfortable, something that we instinctively want to hide. I imagine an installation that begins with a feeling of disgust or rejection, but slowly becomes something warmer, almost intimate.",
    questions: [
      "Why do we reject certain forms?",
      "Why do we associate softness with weakness and imperfection with ugliness?",
    ],
    form: "Interactive sculpture / installation",
    community:
      "Adolescents and women who carry shame about their bodies and the parts of themselves they were taught to hide.",
    interaction: [
      "Flesh-like organic sculpture broken by metal, fragments and rigid structure",
      "Projection around the form",
      "Exudes heat",
      "Distance sensor tracking the viewer",
      "Touch and feedback: agitation and a reaction",
      "Responsive sound",
    ],
  },

  participants: ["Leila", "Alex", "Maya"],

  themes: [
    { id: "hiding", name: "Hiding", desc: "Concealment as the first response to shame." },
    { id: "evaluation", name: "Being Evaluated", desc: "Feeling constantly watched and judged, even alone." },
    { id: "learned", name: "Learned Shame", desc: "Shame absorbed gradually from family, peers and reactions." },
    { id: "editing", name: "Editing the Self", desc: "Making yourself more digestible; choosing which version exists." },
    { id: "familiarity", name: "Familiarity", desc: "Time and closeness change how something is seen." },
    { id: "containment", name: "Soft Inside a Shell", desc: "Something soft pushing against something rigid." },
    { id: "shape", name: "Giving Pain a Shape", desc: "Art moves a feeling outside the body so it can be looked at." },
    { id: "safety", name: "Safety, Not Fixing", desc: "Wanting to be understood without being told it's all beautiful." },
  ],

  hypotheses: [
    {
      id: "h1",
      title: "Shame is learned through observation",
      body: "People may not remember one defining moment when they began to dislike themselves. They may describe gradually absorbing expectations from family, peers, media and their surroundings.",
      implication: "Consider whether the installation should reveal how rejection develops over time, rather than portraying shame as one isolated feeling.",
      themes: ["learned", "evaluation", "hiding"],
    },
    {
      id: "h2",
      title: "The abyss is not the same as suffering",
      body: "Distinguish between pain, the act of expressing pain, and the meaning created when someone encounters that expression.",
      implication: "Transform an experience that feels shapeless or unbearable into something that can be witnessed, approached and understood.",
      themes: ["shape", "safety", "containment"],
    },
    {
      id: "h3",
      title: "Familiarity reduces rejection (draft)",
      body: "Spending time with something, or seeing it in others, slowly changes how we see it.",
      implication: "The longer a viewer stays near the form, the softer and warmer it becomes.",
      themes: ["familiarity", "safety"],
    },
  ],

  questions: [
    "When you hear the word shame, what does it mean to you? Is there a difference between shame, embarrassment, guilt and insecurity?",
    "Can you think of something about yourself that you have felt pressure to hide, correct or change?",
    "Do you remember when you first began to see that part of yourself differently?",
    "What do you usually do when you feel uncomfortable with yourself?",
    "Have you ever changed your opinion about something you once disliked about yourself or another person? What made that possible?",
    "Why do you think some of the most meaningful creative works emerge from periods of profound emotional pain?",
    "Have you ever encountered a work of art that expressed an emotion you couldn't put into words? What did it make possible?",
    "What is your personal \"abyss\"?",
    "If you could encounter that feeling in a physical form outside your body, what would it look or feel like?",
    "When you are struggling emotionally, what would you want from an artwork or environment?",
  ],

  // q = question index (0-based), p = participant
  quotes: [
    { q: 0, p: "Leila", t: ["learned", "evaluation"], text: "Embarrassment is like, you did something awkward. Shame is when it feels like the awkward thing says something about you. It's not that you messed up, it's that something's wrong with you." },
    { q: 0, p: "Alex", t: ["editing"], text: "Shame is feeling like part of you needs to be edited before anyone can see it." },
    { q: 0, p: "Maya", t: ["hiding"], text: "For me shame is hiding. Even if I know I didn't do anything wrong, I still don't want anyone to find out." },

    { q: 1, p: "Leila", t: ["learned", "evaluation"], text: "My skin, mostly. People used to comment on it when I was younger. Nobody was really mean about it, but after a while I just started noticing it myself." },
    { q: 1, p: "Alex", t: ["editing"], text: "Parts of my personality. I kind of make myself more digestible depending on who I'm around." },
    { q: 1, p: "Maya", t: ["learned"], text: "My body changing as I get older. I don't think I hate it, I just feel like I'm supposed to be doing something about it." },

    { q: 2, p: "Leila", t: ["learned", "evaluation"], text: "Probably middle school. Suddenly everyone was looking at everyone. It wasn't one mean comment, it was more like figuring out which things got complimented." },
    { q: 2, p: "Alex", t: ["learned", "editing"], text: "Mostly from people's reactions. Nobody really rejected me, they'd just get uncomfortable, so I learned what not to show." },
    { q: 2, p: "Maya", t: ["learned"], text: "My mom talked about her looks all the time. I don't think she meant to teach me anything, but I picked up that your body is a project you're supposed to keep fixing." },

    { q: 3, p: "Leila", t: ["hiding", "evaluation"], text: "I change outfits, take pics and delete them, or just avoid mirrors on bad days. Sometimes I go online, which probably makes it worse." },
    { q: 3, p: "Alex", t: ["shape"], text: "I overthink it. I turn it into a theory or make art about it. That's easier than just admitting it hurts." },
    { q: 3, p: "Maya", t: ["hiding"], text: "I just stay busy. I wouldn't say I'm ashamed, but there's stuff I avoid thinking about because I don't know what to do with it." },

    { q: 4, p: "Leila", t: ["familiarity", "evaluation"], text: "I started seeing pics of women with the same features I hated on myself, and I thought they looked beautiful. Then I realized I was holding myself to a totally different standard." },
    { q: 4, p: "Alex", t: ["familiarity"], text: "I met people who had the same traits I'd been hiding. Suddenly it wasn't proof that I was weird, it was just part of being a person." },
    { q: 4, p: "Maya", t: ["familiarity"], text: "I think familiarity changes things. Sometimes something stops feeling like a problem once you've spent enough time with it." },

    { q: 5, p: "Leila", t: ["shape"], text: "Maybe pain makes you notice stuff you'd normally ignore. When you're really sad, tiny things feel huge. A song can explain a feeling you couldn't." },
    { q: 5, p: "Alex", t: ["editing", "shape"], text: "Pain kind of strips away the version of you that you perform for people. What's left is more real. But suffering doesn't automatically make you a better artist." },
    { q: 5, p: "Maya", t: ["shape"], text: "Art gives pain a shape. Something overwhelming turns into a song or a painting you can actually look at. But I don't think you have to suffer to make something meaningful." },

    { q: 6, p: "Leila", t: ["safety", "shape"], text: "Sometimes a song makes me feel understood without having to tell anyone what's wrong. I get to feel it without explaining it." },
    { q: 6, p: "Alex", t: ["shape"], text: "When I make art, I get to put the feeling somewhere outside my body. It doesn't go away, but it stops being this shapeless thing inside me." },
    { q: 6, p: "Maya", t: ["shape", "safety"], text: "I've stood in front of a painting and just gotten emotional out of nowhere. I didn't really get why. It just felt like something got recognized." },

    { q: 7, p: "Leila", t: ["evaluation"], text: "Feeling like I'm always being judged. Even when no one's looking, I picture how I'd look to someone else." },
    { q: 7, p: "Alex", t: ["editing"], text: "Feeling like I have to pick which version of me gets to exist in each space." },
    { q: 7, p: "Maya", t: ["learned"], text: "Probably feeling like time's passing and I'm supposed to be a more complete person by now. Not sure if that counts." },

    { q: 8, p: "Leila", t: ["containment"], text: "Something soft with a hard shell around it. It's trying to push out, but every time it moves, the shell pushes back." },
    { q: 8, p: "Alex", t: ["containment", "editing"], text: "Something that keeps changing shape to fit into a space that's too small. It might look pretty, but it'd be uncomfortable to watch." },
    { q: 8, p: "Maya", t: ["containment", "safety"], text: "Something kind of organic. Like you can't tell if you're supposed to touch it or stay away." },

    { q: 9, p: "Leila", t: ["safety"], text: "I'd want to feel understood, but not like it's telling me everything's beautiful. That feels fake." },
    { q: 9, p: "Alex", t: ["safety", "shape"], text: "I want to be challenged. I don't want it to fix the feeling for me, just help me see it differently." },
    { q: 9, p: "Maya", t: ["safety"], text: "I'd want to feel safe enough to stay with it. I don't need to leave happier, I just don't want to feel tricked into being vulnerable." },
  ],

  caseStudies: [
    { name: "A Duet: Human and Robot", url: "https://www.metalocus.es/en/news/a-duet-human-and-robot-do-robots-dream-dancing-sheep", tags: ["performance", "robotics", "body"], notes: "" },
    { name: "Front Evacuo", url: "https://frontevacuo.com/", tags: [], notes: "" },
    { name: "Marco Donnarumma", url: "https://marcodonnarumma.com/", tags: ["body", "prosthetics", "sound"], notes: "" },
    { name: "Stelarc", url: "https://stelarc.org/_.php", tags: ["body", "extension", "performance"], notes: "" },
    { name: "Hermann Nitsch", url: "https://www.artnet.com/artists/hermann-nitsch/", tags: ["ritual", "Viennese Actionism"], notes: "" },
    { name: "David Page", url: "https://bakerartist.org/portfolios/david-page", tags: [], notes: "" },
  ],

  // Add swatches as you test materials. img = path inside /images (optional)
  // reactions = how many testers felt each, out of total
  swatches: [
    { name: "Ecoflex silicone, skin tone", img: "", notes: "To test", reactions: { disgust: 0, curiosity: 0, tenderness: 0 }, total: 0 },
    { name: "Silicone + wire mesh", img: "", notes: "To test", reactions: { disgust: 0, curiosity: 0, tenderness: 0 }, total: 0 },
    { name: "Wax over metal fragments", img: "", notes: "To test", reactions: { disgust: 0, curiosity: 0, tenderness: 0 }, total: 0 },
    { name: "Latex skin, heated", img: "", notes: "To test", reactions: { disgust: 0, curiosity: 0, tenderness: 0 }, total: 0 },
  ],
};
