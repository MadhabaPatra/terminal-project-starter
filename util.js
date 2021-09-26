const path = require("path");
const fs = require("fs");

//Remove file
const removeFile=function(targetPath){
  fs.unlinkSync(targetPath);
}

// Remove directory
const removeDir = function (targetPath) {

  if (fs.existsSync(targetPath)) {
    const files = fs.readdirSync(targetPath);

    if (files.length > 0) {
      files.forEach(function (filename) {
        if (fs.statSync(targetPath + "/" + filename).isDirectory()) {
          removeDir(targetPath + "/" + filename);
        } else {
          fs.unlinkSync(targetPath + "/" + filename);
        }
      });
      fs.rmdirSync(targetPath);
    } else {
      fs.rmdirSync(targetPath);
    }
  } else {
    console.log("Directory path not found.");
  }
};

function copyFile(source, target) {
  var targetFile = target;

  // If target is a directory, a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolder(source, target) {
  var files = [];

  var targetFolder = target

  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    files.forEach(function (file) {
      var curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolder(curSource, targetFolder);
      } else {
        copyFile(curSource, targetFolder);
      }
    });
  }
}

fileSystem = {
  copyFolder: copyFolder,
  copyFile: copyFile,
  deleteFolder: removeDir,
  deleteFile:removeFile
};

module.exports = fileSystem;
