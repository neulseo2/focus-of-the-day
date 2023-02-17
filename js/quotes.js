const quotes = [
  {
    quote:
      "Taste and see how good the Lord is! The one who takes refuge in him is truely happy.",
    author: "Psalm 34:8",
  },
  { quote: "If God is for us, who is against us?", author: "Romans 8:31" },
  {
    quote:
      "Be happy in your hope, stand your ground when you're in trouble, and devote yourselves to prayer.",
    author: "Romans 12:12",
  },
  {
    quote:
      "Jesus answered, 'I am the way, the truth, and the life. No one comes to the Father except through me.",
    author: "John 14:6",
  },
  {
    quote:
      "Be happy with those who are happy, and cry with those who are crying.",
    author: "Romans 12:15",
  },
  {
    quote:
      "Now faith, hope, and love remain - these three things - and the greatest of these is love.",
    author: "1 Corinthians 13:13",
  },
  {
    quote:
      "He is only my rock and my salvation, my fortress; I shall not be shaken.",
    author: "Psalm 62:6",
  },
  {
    quote:
      "Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go.",
    author: "Joshua 1:9",
  },
  { quote: "The Lord is my shepherd, I lack nothing.", author: "Psalm 23:1" },
  {
    quote:
      "But seek first the kingdom of God and his righteousness, and all these things will be added to you.",
    author: "Matthew 6:33",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

console.log(todaysQuote);