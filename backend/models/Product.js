import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  sizes: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  bestseller: {
    type: Boolean,
    default: false,
  },
});

// Export the model
export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
