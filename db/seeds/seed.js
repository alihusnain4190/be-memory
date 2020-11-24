const familyImage = require("../data/index");
const arr = familyImage.familyImage;
console.log(familyImage.familyImage)
exports.seed = async (knex) => {
  await knex.migrate.rollback();
  await knex.migrate.latest();

  const topicsPromise = await knex("family-image").insert(familyImage.familyImage, "*");
  try{
    console.log(topicsPromise)
  }catch{
    console.log(topicsPromise);
  }
  // const usersPromise = knex('users').insert(userData, '*');
  // await Promise.all([topicsPromise, usersPromise]);

  // const formattedArticleData = articleData.map(convertTimestampToDate);
  // const articleRows = await knex('articles').insert(formattedArticleData, '*');

  // const articleIdLookup = createRef(articleRows, 'title', 'article_id');
  // const formattedCommentData = formatComments(commentData, articleIdLookup);
  // return knex('comments').insert(formattedCommentData);
};
