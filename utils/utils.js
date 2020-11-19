// const faker = require("faker");
// var fs = require("fs");
// function stores() {
//   let arr = [];
//   let obj = {};
//   for (let i = 0; i < 20; i++) {
//     obj.img_sml = faker.image.image();

//     obj.img_full = obj.img_sml;
//     obj.description = faker.lorem.paragraph();
//     obj.date = faker.date.past();
//     obj.day = faker.date.weekday();
//     obj.time = faker.time.recent();
//     arr.push(obj);
//   }
//   fs.writeFile("newfile.txt",JSON.stringify( arr), function (err) {
//     if (err) throw err;
//     console.log("File is created successfully.");
//   });
// }
// stores();
