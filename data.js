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
    { q: 0, p: "Leila", t: ["learned", "evaluation"], text: "Embarrassment is when you do something awkward. Shame is when you feel like the awkward thing says something about who you are. Like it's not just that you did something wrong, but that there's something wrong with you." },
    { q: 0, p: "Alex", t: ["editing"], text: "Shame is the feeling that some part of you has to be edited before other people can see it." },
    { q: 0, p: "Maya", t: ["hiding"], text: "I associate shame with hiding. You might know rationally that you've done nothing wrong, but you still don't want anyone to find out." },

    { q: 1, p: "Leila", t: ["learned", "evaluation"], text: "My skin, mostly. I remember people commenting on it when I was younger. Nobody had to say anything particularly cruel. After a while, I just started noticing it myself." },
    { q: 1, p: "Alex", t: ["editing"], text: "Certain parts of my personality. I've learned to make myself more digestible depending on who I'm around." },
    { q: 1, p: "Maya", t: ["learned"], text: "My body changing as I've gotten older. I don't know if I hate it, exactly. I just feel like I'm supposed to be doing something about it." },

    { q: 2, p: "Leila", t: ["learned", "evaluation"], text: "Probably middle school. Everyone was suddenly looking at everyone else. I don't remember one specific insult. It was more like learning which things got complimented." },
    { q: 2, p: "Alex", t: ["learned", "editing"], text: "I think I learned it through reactions. People weren't always directly rejecting me. Sometimes they just got uncomfortable, so I learned what not to show." },
    { q: 2, p: "Maya", t: ["learned"], text: "My mother used to talk about her own appearance constantly. I don't think she intended to teach me anything, but I absorbed the idea that your body is a project you're supposed to keep fixing." },

    { q: 3, p: "Leila", t: ["hiding", "evaluation"], text: "I change clothes, take pictures and delete them, or avoid mirrors when I'm having a bad day. Sometimes I go online, which is probably the opposite of helpful." },
    { q: 3, p: "Alex", t: ["shape"], text: "I intellectualize it. I turn it into a theory or make something out of it. That's easier than just admitting that something hurts." },
    { q: 3, p: "Maya", t: ["hiding"], text: "I keep busy. I don't necessarily think of myself as ashamed, but there are things I avoid thinking about because I don't know what to do with them." },

    { q: 4, p: "Leila", t: ["familiarity", "evaluation"], text: "I started seeing pictures of women with features I used to criticize on myself, and I thought they looked beautiful. Eventually I realized I was applying a completely different standard to myself." },
    { q: 4, p: "Alex", t: ["familiarity"], text: "I met people who had the same traits I'd been trying to hide. Suddenly those traits weren't evidence that I was strange. They were just part of being a person." },
    { q: 4, p: "Maya", t: ["familiarity"], text: "I think familiarity changes things. Sometimes you stop seeing something as a problem because you've spent enough time with it." },

    { q: 5, p: "Leila", t: ["shape"], text: "Maybe pain makes you notice things you normally ignore. When you're really sad, even something tiny can feel significant. A song can describe a feeling you didn't know how to explain." },
    { q: 5, p: "Alex", t: ["editing", "shape"], text: "I think pain can strip away the version of yourself that you perform for other people. You're left with something more honest. But I don't think suffering automatically makes anyone a better artist." },
    { q: 5, p: "Maya", t: ["shape"], text: "Maybe art gives suffering a shape. Something that was just overwhelming becomes a song or a painting you can actually look at. But I don't believe people need to suffer to make something meaningful." },

    { q: 6, p: "Leila", t: ["safety", "shape"], text: "Sometimes a song makes me feel understood without me having to tell anyone what's wrong. I can experience the feeling without having to explain it to another person." },
    { q: 6, p: "Alex", t: ["shape"], text: "When I make art, I can put an emotion somewhere outside my body. It doesn't mean the emotion disappears, but it stops being this completely shapeless thing inside me." },
    { q: 6, p: "Maya", t: ["shape", "safety"], text: "I've stood in front of a painting and felt unexpectedly emotional. I didn't necessarily understand why. I just felt like something had been recognized." },

    { q: 7, p: "Leila", t: ["evaluation"], text: "Mine is the feeling that I'm always being evaluated. Even when nobody is looking at me, I imagine how I would look to someone else." },
    { q: 7, p: "Alex", t: ["editing"], text: "Mine is feeling like I have to choose which version of myself gets to exist in a particular space." },
    { q: 7, p: "Maya", t: ["learned"], text: "Mine might be the feeling that time is passing and I'm supposed to have become a more complete person by now. I don't know if that counts as an abyss." },

    { q: 8, p: "Leila", t: ["containment"], text: "Something soft that has a hard shell around it. Maybe it's trying to push out, but every time it moves, the shell pushes back." },
    { q: 8, p: "Alex", t: ["containment", "editing"], text: "Something that keeps changing shape to fit a space that's too small for it. It might look beautiful, but the movement would be uncomfortable to watch." },
    { q: 8, p: "Maya", t: ["containment", "safety"], text: "Something almost organic. Something you can't immediately tell whether you're supposed to touch or stay away from." },

    { q: 9, p: "Leila", t: ["safety"], text: "I would want to feel understood, but I wouldn't want it to tell me that everything is beautiful. Sometimes that feels fake." },
    { q: 9, p: "Alex", t: ["safety", "shape"], text: "I want to be challenged. I don't want the work to solve the feeling for me. I want it to help me see it differently." },
    { q: 9, p: "Maya", t: ["safety"], text: "I'd want to feel safe enough to stay with it. I don't necessarily need to leave feeling happier, but I don't want to feel tricked into being vulnerable." },
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
