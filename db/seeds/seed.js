const { familyImage } = require("../data/index");
exports.seed = function (knex) {
  return knex.migrate
    .rollback()
    .then(() => {
      return knex.migrate.latest();
    })
    .then(() => {
      return Promise.all([
        knex("family-image").insert(familyImage).returning("*"),
      ]);
    });
};
