const express = require("express");
const User = require("../models/user.model");
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send(error);
  }
});
router.get("/:id/addresses", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    return res.status(201).send(user.address);
  } catch (err) {
    return res.status(500).send(error);
  }
});
router.patch("/:id/edit", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send(error);
  }
});
router.patch("/:id/addresses/create", async (req, res) => {
  try {
    let user = await User.updateOne(
      { _id: req.params.id },
      { $push: { address: req.body } }
    );

    return res.status(200).send(user);
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});
router.patch("/:id/addresses/:idx/edit", async (req, res) => {
  try {
    let address = address._id;
    const user = await User.findone({
      _id: req.params.id,
      address: req.params.idx,
    });
    return res.status(200).send(user);
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
});
module.exports = router;