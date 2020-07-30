const writerService = require('../writer.service');

async function handler(ctx) {
  const { _id, books } = ctx.request.body;
  ctx.body = await writerService.update({ _id }, { $set: { books } });
}

module.exports.register = (router) => {
  router.post('/books', handler);
};
