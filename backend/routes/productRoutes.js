import express from "express";
import {
  addToCart,
  deleteProductById,
  getProductById,
  listProducts,
  updateProductById,
} from "../controllers/productController.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();

router.get("/", listProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProductById);
router.delete("/:id", deleteProductById);
router.post(
  "/add",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addToCart
);

export default router;
