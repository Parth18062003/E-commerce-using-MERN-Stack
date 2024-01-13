import express  from "express";
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js' 
import {productController, createProductController, singleProductController, deleteProductController, updateProductController, filterProductController, cartProductController, LikedProductController} from "../controllers/ProductController.js";

const router = express.Router()
router.post('/create-product',requireSignIn, isAdmin,  createProductController
)

router.get('/product-details', productController)

router.get('/product-details/:productname', singleProductController)

router.get('/product-details/filter/:attributes/:values', filterProductController)

router.delete('/delete-product/:id', deleteProductController)

router.put('/update-product/:id', updateProductController)

router.put('/product-cart/:id', cartProductController)

router.put('/product-cart/liked/:id', LikedProductController)

export default router