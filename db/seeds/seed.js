const familyImage = require("../data/index");
const arr = familyImage.familyImage;

// exports.seed = function (knex) {
//   return knex.migrate
//     .rollback()
//     .then(() => {
//       return knex.migrate.latest();
//     })
//     .then(() => {
//       return Promise.all([knex("fimage").insert(familyImage).returning("*")]);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
exports.seed = async (knex) => {
  await knex.migrate.rollback();
  await knex.migrate.latest();

  const topicsPromise = await knex("family-image").insert(arr, "*");

  // const usersPromise = knex('users').insert(userData, '*');
  // await Promise.all([topicsPromise, usersPromise]);

  // const formattedArticleData = articleData.map(convertTimestampToDate);
  // const articleRows = await knex('articles').insert(formattedArticleData, '*');

  // const articleIdLookup = createRef(articleRows, 'title', 'article_id');
  // const formattedCommentData = formatComments(commentData, articleIdLookup);
  // return knex('comments').insert(formattedCommentData);
};
