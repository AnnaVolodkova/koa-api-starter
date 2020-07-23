const writerService = require('../writer.service');

async function handler(ctx) {
  const writers = await writerService.find();
  ctx.body = writers;
}


module.exports.register = (router) => {
  router.get('/writers', handler);
};
