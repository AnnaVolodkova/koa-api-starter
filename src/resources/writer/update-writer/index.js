const writerService = require('../writer.service');

async function handler(ctx) {
  const { data } = ctx.request.body;
  const updatedWriter = await writerService.update({ _id: ctx.params.id },
    (old) => ({
      ...old,
      firstName: data,
    }));
  ctx.body = updatedWriter;
}


module.exports.register = (router) => {
  router.put('/writers/:id', handler);
};
