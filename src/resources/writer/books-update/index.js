const writerService = require('../writer.service');

async function handler(ctx) {
  const { _id, books } = ctx.request.body;
  const updatedWriter = await writerService.update({ _id },
    (old) => ({
      ...old,
      books: [...books],
    }));
  ctx.body = updatedWriter;
}

module.exports.register = (router) => {
  router.post('/books', handler);
};
