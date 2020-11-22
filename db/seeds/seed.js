const familyImage = require("../data/index");
console.log(familyImage);
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

  const topicsPromise = await knex("family-image").insert(
    [
      {
        img_sml: "http://placeimg.com/640/480/nightlife",
        img_full: "http://placeimg.com/640/480/nightlife",
        description:
          "Eos dolore laborum odio est similique autem nulla et. Quis ut magnam officia cupiditate qui et. Quaerat autem aliquam. Eaque repellendus illo velit et. Minima quo dolore ipsam consequatur aspernatur corrupti quo nihil quia.",
      },
      {
        img_sml: "http://placeimg.com/640/480/nightlife",
        img_full: "http://placeimg.com/640/480/nightlife",
        description:
          "Eos dolore laborum odio est similique autem nulla et. Quis ut magnam officia cupiditate qui et. Quaerat autem aliquam. Eaque repellendus illo velit et. Minima quo dolore ipsam consequatur aspernatur corrupti quo nihil quia.",
      },
      {
        img_sml: "http://placeimg.com/640/480/nightlife",
        img_full: "http://placeimg.com/640/480/nightlife",
        description:
          "Eos dolore laborum odio est similique autem nulla et. Quis ut magnam officia cupiditate qui et. Quaerat autem aliquam. Eaque repellendus illo velit et. Minima quo dolore ipsam consequatur aspernatur corrupti quo nihil quia.",
      },
      {
        img_sml: "http://placeimg.com/640/480/nightlife",
        img_full: "http://placeimg.com/640/480/nightlife",
        description:
          "Eos dolore laborum odio est similique autem nulla et. Quis ut magnam officia cupiditate qui et. Quaerat autem aliquam. Eaque repellendus illo velit et. Minima quo dolore ipsam consequatur aspernatur corrupti quo nihil quia.",
      },
      {
        img_sml: "http://placeimg.com/640/480/nightlife",
        img_full: "http://placeimg.com/640/480/nightlife",
        description:
          "Eos dolore laborum odio est similique autem nulla et. Quis ut magnam officia cupiditate qui et. Quaerat autem aliquam. Eaque repellendus illo velit et. Minima quo dolore ipsam consequatur aspernatur corrupti quo nihil quia.",
      },
      {
        img_sml: "http://placeimg.com/640/480/nightlife",
        img_full: "http://placeimg.com/640/480/nightlife",
        description:
          "Eos dolore laborum odio est similique autem nulla et. Quis ut magnam officia cupiditate qui et. Quaerat autem aliquam. Eaque repellendus illo velit et. Minima quo dolore ipsam consequatur aspernatur corrupti quo nihil quia.",
      },
      {
        img_sml: "http://placeimg.com/640/480/nightlife",
        img_full: "http://placeimg.com/640/480/nightlife",
        description:
          "Eos dolore laborum odio est similique autem nulla et. Quis ut magnam officia cupiditate qui et. Quaerat autem aliquam. Eaque repellendus illo velit et. Minima quo dolore ipsam consequatur aspernatur corrupti quo nihil quia.",
      },
      {
        img_sml: "http://placeimg.com/640/480/nightlife",
        img_full: "http://placeimg.com/640/480/nightlife",
        description:
          "Eos dolore laborum odio est similique autem nulla et. Quis ut magnam officia cupiditate qui et. Quaerat autem aliquam. Eaque repellendus illo velit et. Minima quo dolore ipsam consequatur aspernatur corrupti quo nihil quia.",
      },
      {
        img_sml: "http://placeimg.com/640/480/nightlife",
        img_full: "http://placeimg.com/640/480/nightlife",
        description:
          "Eos dolore laborum odio est similique autem nulla et. Quis ut magnam officia cupiditate qui et. Quaerat autem aliquam. Eaque repellendus illo velit et. Minima quo dolore ipsam consequatur aspernatur corrupti quo nihil quia.",
      },
      {
        img_sml: "http://placeimg.com/640/480/nightlife",
        img_full: "http://placeimg.com/640/480/nightlife",
        description:
          "Eos dolore laborum odio est similique autem nulla et. Quis ut magnam officia cupiditate qui et. Quaerat autem aliquam. Eaque repellendus illo velit et. Minima quo dolore ipsam consequatur aspernatur corrupti quo nihil quia.",
      },
    ],
    "*"
  );

  // const usersPromise = knex('users').insert(userData, '*');
  // await Promise.all([topicsPromise, usersPromise]);

  // const formattedArticleData = articleData.map(convertTimestampToDate);
  // const articleRows = await knex('articles').insert(formattedArticleData, '*');

  // const articleIdLookup = createRef(articleRows, 'title', 'article_id');
  // const formattedCommentData = formatComments(commentData, articleIdLookup);
  // return knex('comments').insert(formattedCommentData);
};
