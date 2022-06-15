
const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
router.post("/create", async (req, res) => {
    try {
      const product = await Product.create(req.body);
      return res.status(201).send(product);
    } catch (error) {
      return res.status(500).send(error);
    }
  });
  router.get("/", async (req, res) => {
    try {
      const product = await Product.find().lean().exec();
      return res.status(201).send(product);
    } catch (err) {
      return res.status(500).send(error);
    }
  });
  router.get("/:id", async (req, res) => {
    try {
      const product = await Product.findById(req.params.id).lean().exec();
      return res.status(201).send(product);
    } catch (err) {
      return res.status(500).send(error);
    }
  });
  router.patch("/:id/edit", async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
      return res.status(201).send(product);
    } catch (err) {
      return res.status(500).send(error);
    }
  })
module.exports = router;