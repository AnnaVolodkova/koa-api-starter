const writerService = require('../writer.service');

async function handler(ctx) {
  const {
    firstName, lastName, age, books,
  } = ctx.request.body;
  ctx.body = await writerService._collection.update(
    { _id: ctx.params.id },
    {
      $set: {
        firstName, lastName, age, books,
      },
    },
  );
}


module.exports.register = (router) => {
  router.put('/writers/:id', handler);
};
