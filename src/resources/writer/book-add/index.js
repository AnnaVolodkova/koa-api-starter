const uid = require('uid');
const writerService = require('../writer.service');

async function handler(ctx) {
  const { title, genre } = ctx.request.body;
  const _id = uid();
  const updatedWriter = await writerService._collection
    .update({ _id: ctx.params.id }, { $push: { books: { _id, title, genre } } });
  ctx.body = updatedWriter;
}

module.exports.register = (router) => {
  router.post('/books/:id', handler);
};
