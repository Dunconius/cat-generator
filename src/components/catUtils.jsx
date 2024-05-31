// catUtils.js
export const catList = [
    "Fluffy",
    "Scruffy",
    "Puffy",
    "Buttermilk",
    "Crockett",
    "Trouble",
    "TomTom",
    "Squeaker",
    "Banshee",
    "Jones",
    "Mr Jenkins",
    "Scruff McGraw",
    "Ozzy",
    "Mrs Whiskers",
    "Truffles",
    "Trombone",
    "Pork Chop",
    "Kittykins",
    "Rufus",
    "Doughnut",
    "Sniffles",
    "Tapioca",
    "Popcorn",
    "Wasabi",
    "Toffee",
    "Stuart",
    "Skittles",
    "Chester",
    "Pooky",
    "Miss Kitty",
    "Puddles",
    "Boots",
    "Susie Q",
    "Jingles",
    "Rufus",
    "Smudge",
  ];
  
  export const shuffleArray = (array) => {
    let shuffledArray = array.slice(); // Copy the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };
  