const express = require("express");
const Reviews = require("../models/reviews.model");

const router = express.Router();

router.post("/create", async (req, res, next) => {
  try {
    const reviews = await Reviews.create(req.body);
    return res.status(200).send(reviews);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const reviews = await Reviews.find()
      .populate({
        path: "productId",
        select: { name: 1, email: 1, _id: 0 },
      })
      .populate({ path: "userId", select: { name: 1, _id: 0 } })
      .lean()
      .exec();
    return res.status(200).send(reviews);
  } catch (err) {
    return res.status(404).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const reviews = await Reviews.findById({ _id: req.params.id })
      .lean()
      .exec();

    res.status(200).json(reviews);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.patch("/:id/edit", async (req, res) => {
  try {
    const reviews = await Reviews.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(reviews);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router;