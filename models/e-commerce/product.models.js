import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
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
      default: 0,
    },
    productImage: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },

  { timestamps: true }
);

export const Procuct = mongoose.model("Procuct", productSchema);
