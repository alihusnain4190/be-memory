const family = require("../data/index");

exports.seed = async (knex) => {
  await knex.migrate.rollback();
  await knex.migrate.latest();

  const topicsPromise = knex("family-image").insert(family.familyImage, "*");
  const familyTask = knex("family-task").insert(family.familyTask, "*");
  await Promise.all([topicsPromise, familyTask])
    .then((resp) => {
      // console.log(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};
