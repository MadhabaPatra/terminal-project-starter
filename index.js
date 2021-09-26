const readline = require("readline");
const app = require("./app");

const path=require("path")

const question = `
Choose any  ? 
1.Add README to your project
1.React Base folder structure
`;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const targetFolder = process.cwd();
// const targetFolder=path.join(__dirname,"target")

rl.question(question, function (type) {
  switch (type) {
    case "1":
      app.addReadMe(targetFolder);
      break;
    case "2":
      app.createReactBase(targetFolder);
      break;
    default:
      console.log("❌ invalid template");
  }
  rl.close();
});


