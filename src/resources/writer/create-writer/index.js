const writerService = require('../writer.service');

async function handler(ctx) {
  const writer = ctx.request.body;
  await writerService.create([writer]);
  ctx.status = 200;
  ctx.body = 'Ok';
}


module.exports.register = (router) => {
  router.post('/writer', handler);
};
