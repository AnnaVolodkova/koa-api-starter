const Router = require('@koa/router');


const router = new Router();

require('./create-writer').register(router);
require('./delete-writer').register(router);
require('./get-writer').register(router);
require('./update-writer').register(router);
require('./get-all').register(router);
require('./book-add').register(router);
require('./books-update').register(router);
require('./get-sorted-list').register(router);


module.exports = router.routes();
