const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: [
    {
      houseNo: { type: String, required: true },
      city: { type: String, required: true },
      pincode: { type: Number, required: true },
      Country: { type: String, required: true },
    },
  ],
},
{
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("user", userSchema);