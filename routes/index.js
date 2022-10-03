
const router = require('express').Router();
const userRouter = require('./user-router');
const photosRouter = require('./photos-router');

router.use(userRouter)
router.use('/photos', photosRouter)

module.exports = router;