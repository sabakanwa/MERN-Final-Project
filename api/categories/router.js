const app = require('express');
const router = app.Router();
const {postCategories, getCategoryByName, getAllCategories, getCategoryById, updateCategoryById, deleteProductsByCategory, deleteCategory } = require('./controller');


router.post('/categories', postCategories);
router.get('/getallcategories', getAllCategories);
router.get('/getcategorybyname', getCategoryByName);
router.get('/getcategorybyid', getCategoryById);
router.put('/updatecategory/:id', updateCategoryById);
router.delete('/deletecategory/:_id', deleteCategory)
router.delete('/deleteproductsbycategory', deleteProductsByCategory);

module.exports = router;





