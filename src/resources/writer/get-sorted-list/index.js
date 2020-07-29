const writerService = require('../writer.service');

async function handler(ctx) {
  let { sortBy } = ctx.request.query;
  const { pageNumber } = ctx.request.query;
  const { documentsInPage } = ctx.request.query;
  const { sortOrder } = ctx.request.query;

  if (!sortBy) {
    sortBy = '_id';
  }
  const sortOrderInNumber = sortOrder === 'asc' ? 1 : -1;

  const writersList = (
    await writerService.find({}, {
      page: pageNumber,
      perPage: +documentsInPage,
      sort: { [sortBy]: sortOrderInNumber },
    })
  );

  const numberOfAllDocuments = await writerService.count();

  ctx.body = {
    data: writersList,
    meta: {
      numberOfAllDocuments,
    },
  };
}

module.exports.register = (router) => {
  router.get('/list', handler);
};
