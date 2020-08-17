const uid = require('uid');

const writerService = require('../writer.service');

async function handler(ctx) {
  const {
    firstName, lastName, age, books,
  } = ctx.request.body;

  const booksWithId  = books.map((item) => {
    return {
      ...item,
      _id: uid(),
    };
  });

  await writerService.create({
    firstName, lastName, age, booksWithId,
  });
  ctx.status = 200;
  ctx.body = 'Ok';
}


module.exports.register = (router) => {
  router.post('/writer', handler);
};
