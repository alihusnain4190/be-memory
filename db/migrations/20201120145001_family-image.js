const { familyImage } = require("../data/testData");

exports.up = function (knex) {
  return knex.schema.createTable("fimage", (family_image) => {
    family_image.increments("id").primary();
    family_image.string("img_sml").notNullable();
    family_image.string("img_full").notNullable();
    family_image.text("description").notNullable();
    family_image.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("fimage");
};
