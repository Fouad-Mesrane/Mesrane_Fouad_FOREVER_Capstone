import Product from "../models/Product.js";
import cloudinary from "cloudinary";
// function for adding product to cart
export const addToCart = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

   
    const image1 = req.files.image1 && req.files.image1[0].path;
    const image2 = req.files.image2 && req.files.image2[0].path;
    const image3 = req.files.image3 && req.files.image3[0].path;
    const image4 = req.files.image4 && req.files.image4[0].path;

    const images = [image1, image2, image3, image4].filter(
      (image) => image !== undefined
    );
    let imagesUrl = await Promise.all(
      images.map(async (image) => {
        let result = await cloudinary.uploader.upload(image, {resource_type: "image"});
        return result.secure_url;
      })
    );
    imagesUrl = imagesUrl.filter((image) => image !== undefined);
    const product = await Product.create({
      name,
      description,
      price : Number(price),
      category,
      subCategory,
      sizes : JSON.parse(sizes),
      bestseller : bestseller === "true" ? true : false,
      images: imagesUrl,
    });
 
    res.status(200).json({ success: true, product, message: "Product added to cart" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// funtion for listing products
export const listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// function for getting product by id
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
};
// function for updating product by id
export const updateProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// function for deleting product by id
export const deleteProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.body.id);
    res.status(200).json({ success: true, message : "Product deleted" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
};
