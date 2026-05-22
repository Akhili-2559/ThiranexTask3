const express = require("express");

const Product = require("../models/Product");

const router = express.Router();


// ADD PRODUCT

router.post("/add", async (req, res) => {

  try {

    const newProduct = new Product(req.body);

    await newProduct.save();

    res.json({
      message: "Product Added"
    });

  } catch (error) {

    res.status(500).json(error);

  }

});


// GET PRODUCTS

router.get("/", async (req, res) => {

  try {

    const products = await Product.find();

    res.json(products);

  } catch (error) {

    res.status(500).json(error);

  }

});

module.exports = router;