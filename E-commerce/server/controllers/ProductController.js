import productModel from "../models/productModel.js";

export const createProductController = async (req, res) => {
  try {
    const {
      productname,
      brand,
      price,
      sizes,
      description,
      imagesLinks,
      colors,
      tags,
      manufacturer,
      countryOfOrigin,
      articleCode,
      importedBy,
      weight,
      category,
    } = req.body;

    switch (true) {
      case !productname:
        return res.status(500).send({ error: "Name is required" });
      case !brand:
        return res.status(500).send({ error: "brand is required" });
      case !price:
        return res.status(500).send({ error: "price is required" });
      case !sizes:
        return res.status(500).send({ error: "sizes is required" });
      case !description:
        return res.status(500).send({ error: "description is required" });
      case !colors:
        return res.status(500).send({ error: "colors is required" });
      case !tags:
        return res.status(500).send({ error: "tags is required" });
      case !manufacturer:
        return res.status(500).send({ error: "manufacturer is required" });
      case !countryOfOrigin:
        return res.status(500).send({ error: "countryOfOrigin is required" });
      case !articleCode:
        return res.status(500).send({ error: "articleCode is required" });
      case !importedBy:
        return res.status(500).send({ error: "importedBy is required" });
      case !weight:
        return res.status(500).send({ error: "weight is required" });
      case !category:
        return res.status(500).send({ error: "category is required" });
    }

    const existingProduct = await productModel.findOne({ productname });
    if (existingProduct) {
      return res.status(400).send({ error: "Product already exists" });
    }

    const products = new productModel({
      productname,
      brand,
      price,
      sizes,
      description,
      imagesLinks,
      colors,
      tags,
      manufacturer,
      countryOfOrigin,
      articleCode,
      importedBy,
      weight,
      category,
    });

    await products.save();
    res.status(201).send({
      success: true,
      message: `${products.productname} created successfully`,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating new product",
    });
  }
};

export const productController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .limit(16)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      totalProducts: products.length,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: error.message,
      message: "Error viewing products",
    });
  }
};

export const singleProductController = async (req, res) => {
  try {
    const decodedProductName = decodeURIComponent(
      req.params.productname.replace(":", "")
    );
    console.log(decodedProductName);
    const product = await productModel.findOne({
      productname: decodedProductName,
    });
    res.status(200).send({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Failed to load product details",
    });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: `Product deleted successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      message: "Could not delete Product",
      error,
    });
  }
};

export const updateProductController = async (req, res) => {
  try {
    const {
      productname,
      brand,
      price,
      sizes,
      description,
      imagesLinks,
      colors,
      tags,
      manufacturer,
      countryOfOrigin,
      articleCode,
      importedBy,
      weight,
      category,
    } = req.body;

    switch (true) {
      case !productname:
        return res.status(500).send({ error: "Name is required" });
      case !brand:
        return res.status(500).send({ error: "brand is required" });
      case !price:
        return res.status(500).send({ error: "price is required" });
      case !sizes:
        return res.status(500).send({ error: "sizes is required" });
      case !description:
        return res.status(500).send({ error: "description is required" });
      case !colors:
        return res.status(500).send({ error: "colors is required" });
      case !tags:
        return res.status(500).send({ error: "tags is required" });
      case !manufacturer:
        return res.status(500).send({ error: "manufacturer is required" });
      case !countryOfOrigin:
        return res.status(500).send({ error: "countryOfOrigin is required" });
      case !articleCode:
        return res.status(500).send({ error: "articleCode is required" });
      case !importedBy:
        return res.status(500).send({ error: "importedBy is required" });
      case !weight:
        return res.status(500).send({ error: "weight is required" });
      case !category:
        return res.status(500).send({ error: "category is required" });
    }
    const products = await productModel.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );

    await products.save();
    res.status(201).send({
      success: true,
      message: `${products.productname} updated successfully`,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in updating new product",
    });
  }
};

export const filterProductController = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Get the requested page, default to 1
    const pageSize = 16; // Number of items per page
    const skip = (page - 1) * pageSize;
    const attributes = decodeURIComponent(req.params.attributes)
      .replace(":", "")
      .toLowerCase();
    const values = decodeURIComponent(req.params.values)
      .replace(":", "")
      .toLowerCase();

    let filter = {};
    if (attributes === "sizes") {
      filter["sizes.size"] = values;
    } else if(attributes === 'incart'){
      (filter.inCart = values).replace("'","")
    } else if(attributes === 'isliked'){
      (filter.isLiked = values).replace("'","")
    }
    else {
      filter[attributes] = values;
    }
    const products = await productModel.find(filter).skip(skip).limit(pageSize);
    const totalProducts = await productModel.countDocuments(filter);
    res.status(200).send({
      success: true,
      totalProducts,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Failed to load product details",
    });
  }
};

export const cartProductController = async (req, res) => {
  try {
    const { inCart } = req.body;
    const products = await productModel.findByIdAndUpdate(
      req.params.id,
      { inCart },
      { new: true }
    );
    await products.save();
    res.status(201).send({
      success: true,
      message: `${products.productname} updated successfully`,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error adding to cart",
    });
  }
};

export const LikedProductController = async (req, res) => {
  try {
    const { isLiked } = req.body;
    const products = await productModel.findByIdAndUpdate(
      req.params.id,
      { isLiked },
      { new: true }
    );
    await products.save();
    res.status(201).send({
      success: true,
      message: `${products.productname} updated successfully`,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error adding to cart",
    });
  }
};

