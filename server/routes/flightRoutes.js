const express = require("express");
const router = express.Router();
const flightController = require("../controllers/flightController");

// GET all flights
router.get("/", flightController.getAllFlights);

// POST new flight
router.post("/", flightController.createFlight);

router.get("/:id", flightController.getFlightById);


module.exports = router;
