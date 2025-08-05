const { rl } = require("./utils/input");
const { searchEmoByName } = require("./utils/search-emojis");

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
      console.log("type emoji to find its name: ");
      rl.close();
    }
  }
}

rl.on("close", function () {
  process.exit(0);
});
