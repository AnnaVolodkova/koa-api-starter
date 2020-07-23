const writerService = require('../writer.service');

async function handler(ctx) {
  const { book } = ctx.request.body;
  const updatedWriter = await writerService.update({ _id: ctx.params.id },
    (old) => ({
      ...old,
      books: [...old.books, book],
    }));
  ctx.body = updatedWriter;
}

module.exports.register = (router) => {
  router.post('/books/:id', handler);
};
