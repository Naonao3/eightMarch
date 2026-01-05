// Empowerment messages featuring quotes from influential women

export interface Quote {
  text: string;
  author: string;
}

export const empowermentMessages: Quote[] = [
  {
    text: "I raise up my voice—not so I can shout, but so that those without a voice can be heard.",
    author: "Malala Yousafzai"
  },
  {
    text: "There is no limit to what we, as women, can accomplish.",
    author: "Michelle Obama"
  },
  {
    text: "We realize the importance of our voices only when we are silenced.",
    author: "Malala Yousafzai"
  },
  {
    text: "I learned a long time ago that there is something worse than missing the goal, and that's not pulling the trigger.",
    author: "Mia Hamm"
  },
  {
    text: "Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.",
    author: "Oprah Winfrey"
  },
  {
    text: "The question isn't who's going to let me; it's who is going to stop me.",
    author: "Ayn Rand"
  },
  {
    text: "I have learned over the years that when one's mind is made up, this diminishes fear.",
    author: "Rosa Parks"
  },
  {
    text: "There's something so special about a woman who dominates in a man's world. It takes a certain grace, strength, intelligence, fearlessness, and the nerve to never take no for an answer.",
    author: "Rihanna"
  },
  {
    text: "We need to reshape our own perception of how we view ourselves. We have to step up as women and take the lead.",
    author: "Beyoncé"
  },
  {
    text: "You may not control all the events that happen to you, but you can decide not to be reduced by them.",
    author: "Maya Angelou"
  },
  {
    text: "A woman is like a tea bag; you never know how strong it is until it's in hot water.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "The most courageous act is still to think for yourself. Aloud.",
    author: "Coco Chanel"
  },
  {
    text: "I am not free while any woman is unfree, even when her shackles are very different from my own.",
    author: "Audre Lorde"
  },
  {
    text: "Women belong in all places where decisions are being made.",
    author: "Ruth Bader Ginsburg"
  },
  {
    text: "If you want something said, ask a man; if you want something done, ask a woman.",
    author: "Margaret Thatcher"
  },
  {
    text: "I alone cannot change the world, but I can cast a stone across the waters to create many ripples.",
    author: "Mother Teresa"
  },
  {
    text: "Life shrinks or expands in proportion to one's courage.",
    author: "Anaïs Nin"
  },
  {
    text: "Nothing is impossible; the word itself says 'I'm possible!'",
    author: "Audrey Hepburn"
  },
  {
    text: "I was taught that the way of progress was neither swift nor easy.",
    author: "Marie Curie"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  }
];

// Track shown quotes to avoid immediate repeats
let shownQuotes: Set<number> = new Set();

export function getRandomQuote(): Quote {
  // Reset if all quotes have been shown
  if (shownQuotes.size >= empowermentMessages.length) {
    shownQuotes.clear();
  }

  let randomIndex: number;
  do {
    randomIndex = Math.floor(Math.random() * empowermentMessages.length);
  } while (shownQuotes.has(randomIndex));

  shownQuotes.add(randomIndex);
  return empowermentMessages[randomIndex];
}

export function resetQuotes(): void {
  shownQuotes.clear();
}
