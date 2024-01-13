import mongoose from "mongoose";

const sizeQuantitySchema = new mongoose.Schema({
    size: { type: String },
    quantity: { type: Number, default: 0 }
  });

const productSchema = new mongoose.Schema({
  productname: { 
    type: String, 
    required: true 
  },
  brand: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true 
  },
  sizes: [sizeQuantitySchema], 
  tags:[String],
  description: { 
    type: String 
  },
  imagesLinks: [String], 
  imagesFiles: {
    data: Buffer,
    contentType: String
  },
  colors: [String], 
  manufacturer: { 
    type: String 
  },
  countryOfOrigin: { 
    type: String 
  },
  articleCode: { 
    type: String 
  },
  importedBy: { 
    type: String 
  },
  weight: { 
    type: Number 
  },
  category: { 
    type: String 
  }, 
  inCart: { 
    type: Boolean, 
    default: false  
  },
  isLiked: { 
    type: Boolean, 
    default: false  
  },
},{timestamps: true}
);

const productModel = mongoose.model("products", productSchema);

export default productModel