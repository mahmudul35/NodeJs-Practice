const fs = require("fs");
//console.log(fs);
// fs.writeFile("filer name","ki lekihbo?","callback function")
fs.readFile("demotext.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// fs.renameFile("demotext.txt", "text2", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successful");
//   }
// });
