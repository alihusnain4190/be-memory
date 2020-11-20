const { familyImage } = require("../data/index");
exports.seed = function (knex) {
  return knex
    .insert(familyImage)
    .into("family-image")
    .returning("*")
    .then((image) => {
      console.log(image);
    });
};
