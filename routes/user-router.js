const UsersController = require('../controllers/users-controller');
const router = require('express').Router();

router.post('/sign-in', UsersController.signIn);
router.post('/sign-up', UsersController.signUp)

module.exports = router;