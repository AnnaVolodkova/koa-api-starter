const writerService = require('../writer.service');

async function handler(ctx) {
  const { id } = ctx.params;
  const writer = await writerService.remove({ _id: id });
  ctx.body = writer;
}


module.exports.register = (router) => {
  router.delete('/remove/:id', handler);
};
