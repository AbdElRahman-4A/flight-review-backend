const Review = require("../models/Review");

exports.getReviewsByFlight = async (req, res) => {
  try {
    const reviews = await Review.find({ flight: req.params.flightId }).populate(
      "user",
      "name"
    );
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createReview = async (req, res) => {
  const {
    flight,
    rating,
    comment,
    staffRating,
    foodRating,
    cleanlinessRating,
    takeoffLandingRating,
  } = req.body;

  try {
    const review = new Review({
      flight,
      user: req.user.id, 
      rating,
      comment,
      staffRating,
      foodRating,
      cleanlinessRating,
      takeoffLandingRating,
    });

    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
