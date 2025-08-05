const { rl } = require("./utils/input");
const { searchEmoByName, searchNameOfEmo } = require("./utils/search-emojis");

rl.question(
  "== choose: 1. find [emoji by name] | 2. find [name by emoji] ==\n(1/2): \t",
  chooseOptions
);

function chooseOptions(option) {
  const optionNum = Number(option);

  const nums = [1, 2];
  if (nums.includes(optionNum)) {
    if (optionNum === 1) {
      rl.question("type emoji by using name: ", searchEmoByName);
    } else if (optionNum === 2) {
      rl.question("type emoji to find its name: ", searchNameOfEmo);
    }
  } else {
    console.log("only input 1 or 2!");
    rl.close();
  }
}

rl.on("close", function () {
  process.exit(0);
});
