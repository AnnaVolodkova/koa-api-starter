const writerService = require('../writer.service');

async function handler(ctx) {
  const { id } = ctx.params;
  const writer = await writerService.findOne({ _id: id });
  ctx.body = writer;
}


module.exports.register = (router) => {
  router.get('/writers/:id', handler);
};
