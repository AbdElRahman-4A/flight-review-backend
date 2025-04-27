const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    flight: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flight",
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
    staffRating: { type: Number, min: 1, max: 5 },
    foodRating: { type: Number, min: 1, max: 5 },
    cleanlinessRating: { type: Number, min: 1, max: 5 },
    takeoffLandingRating: { type: Number, min: 1, max: 5 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema);
