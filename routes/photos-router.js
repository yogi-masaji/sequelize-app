const PhotoController = require('../controllers/photo-controller')
const router = require('express').Router();
const authMiddleware = require('../middleware/authentication-middleware')

router.get('/', authMiddleware, PhotoController.findAll);
router.get('/:id', PhotoController.findById);
router.post('/', PhotoController.create);
router.delete('/:id', PhotoController.deletePhoto);
router.put('/:id', PhotoController.updatePhoto);


module.exports = router;