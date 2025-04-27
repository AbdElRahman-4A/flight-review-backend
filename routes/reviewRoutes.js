const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");
const authMiddleware = require("../middleware/authMiddleware");

// GET all reviews for a specific flight
router.get("/:flightId", reviewController.getReviewsByFlight);

router.post("/", authMiddleware, reviewController.createReview);

module.exports = router;
