const express = require('express');
const multer = require('multer');
const path = require('path');
const { 
    getProducts, 
    newProduct, 
    getSingleProduct, 
    updateProduct, 
    deleteProduct, 
    createReview, 
    getReviews, 
    deleteReview, 
    getAdminProducts 
} = require('../controllers/productController');
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/authenticate');

const upload = multer({storage: multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '..', 'uploads/product'))
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})})

router.route('/products').get(getProducts); // isAuthenticatedUser, getProducts
router.route('/product/:id')
    .get(getSingleProduct)
    .put(updateProduct)
    .delete(deleteProduct);
router.route('/review').put(isAuthenticatedUser, createReview)
                        .get(getReviews)
                        .delete(deleteReview);

// Admin routes
router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), upload.array('images'), newProduct);
router.route('/admin/products').get(isAuthenticatedUser, authorizeRoles('admin'), getAdminProducts);

module.exports = router; 