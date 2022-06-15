const express = require("express");
const router = express.Router();
const Brand = require("../models/brand.model");
router.get("/", async (req, res) => {
  try {
    const brands = await Brand.find().lean().exec();

    res.status(200).send({ data: brands, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});

router.post("/create", async (req, res) => {
  try {
    const brand = await Brand.create(req.body);
    return res.status(201).send({ data: brand, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id).lean().exec();

    if (!brand) {
      return res
        .status(404)
        .send({ data: brand, message: "error", error: "User Not found.." });
    }
    return res.status(200).send({ data: brand, message: "success" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});

module.exports = router;