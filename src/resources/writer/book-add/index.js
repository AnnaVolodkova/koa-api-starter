const writerService = require('../writer.service');

async function handler(ctx) {
  const { book } = ctx.request.body;
  const updatedWriter = await writerService._collection
    .update({ _id: ctx.params.id }, { $push: { books: book } });
  ctx.body = updatedWriter;
}

module.exports.register = (router) => {
  router.post('/books/:id', handler);
};
