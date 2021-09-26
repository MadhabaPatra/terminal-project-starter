const fileSystem = require("./util");
const path = require("path");
const fs = require("fs");




function successMessage() {
  console.log(" Successfully structured");
}

function errorMessage() {
  console.log("❌ Failed to structure");
}

function addReadMe(targetPath) {
  console.log("✨ Template:-- " + "Add README to your project");
  console.log("Project location: ", targetPath);

  const sourceFolder = path.join(__dirname, "templates/add-readme");
  const targetFolder = targetPath;

  var files = [];
  files = fs.readdirSync(sourceFolder);
  files.forEach(function (file) {
    var curSource = path.join(sourceFolder, file);
    if (fs.lstatSync(curSource).isDirectory()) {
      fileSystem.deleteFolder(
        path.join(targetFolder, path.basename(curSource))
      );
      fileSystem.copyFolder(
        curSource,
        path.join(targetFolder, path.basename(curSource))
      );
    } else {
      fileSystem.copyFile(curSource, targetFolder);
    }
  });
  successMessage();
}

function reactBase(targetPath) {
  console.log("✨ Template:-- " + "React Base folder structure");
  console.log("Project location: ", targetPath);

  const sourceFolder = path.join(__dirname, "templates/react-base");
  const targetFolder = targetPath;

  var files = [];
  files = fs.readdirSync(sourceFolder);
  files.forEach(function (file) {
    var curSource = path.join(sourceFolder, file);
    if (fs.lstatSync(curSource).isDirectory()) {
      fileSystem.deleteFolder(
        path.join(targetFolder, path.basename(curSource))
      );
      fileSystem.copyFolder(
        curSource,
        path.join(targetFolder, path.basename(curSource))
      );
    } else {
      fileSystem.copyFile(curSource, targetFolder);
    }
  });
  successMessage();
}
const app = {
  addReadMe:addReadMe,
  createReactBase: reactBase,
};

module.exports = app;
