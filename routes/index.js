
const router = require('express').Router();
const userRouter = require('./user-router');
const photosRouter = require('./photos-router');
const errorMiddleware = require('../middleware/error-middleware');

router.use(userRouter)
router.use('/photos', photosRouter)

router.use((req, res, next) => {
    next({name : 'PageNotFound'});
})

router.use(errorMiddleware)


module.exports = router;