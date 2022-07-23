import express from "express";
import { createProduct, deleteProductByID, getAllProducts, getProductByID, updateProductByID } from "../controllers/products.controllers.js";
import { isUserOrAdmin, isAdmin } from "../middlewares/roles.middleware.js";

const router = express.Router();

router.get('/', [isUserOrAdmin], getAllProducts); 
router.get('/:id', [isUserOrAdmin], getProductByID);
router.post('/', [isAdmin], createProduct);
router.put('/:id', [isAdmin], updateProductByID);
router.delete('/:id', [isAdmin], deleteProductByID);

export default router;

