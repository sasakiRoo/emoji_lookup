const { rl } = require("./input");
let data = require("../data-by-emoji.json");
const keywordSet = require("emojilib");

function searchEmoByName(name) {
  const targetSearch = name;
  const matches = [];
  for (const emoji in data) {
    const keywords = keywordSet[emoji];
    if (Array.isArray(keywords) && keywords.includes(targetSearch)) {
      matches.push({ emoji, name: data[emoji].name });
    }
  }
  if (matches.length > 0) {
    for (const match of matches) {
      console.log(`"${targetSearch}" - ${match.emoji} (${match.name})`);
    }
    rl.close();
  } else {
    console.log("emoji is not available, try again!");
    rl.close();
  }
}

function searchNameOfEmo(givenEmoji) {
  const targetEmoji = givenEmoji;
  if (!data[targetEmoji]) {
    console.log(`${targetEmoji} is not available, try again!`);
    rl.close();
  }
  console.log(`${targetEmoji}'s name is: ${data[targetEmoji].name}`);
  rl.close();
}

module.exports = { searchEmoByName, searchNameOfEmo };
