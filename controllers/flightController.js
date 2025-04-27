const Flight = require("../models/Flight");

exports.getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createFlight = async (req, res) => {
  const { flightNumber, airline, from, to, date } = req.body;
  try {
    const newFlight = new Flight({ flightNumber, airline, from, to, date });
    await newFlight.save();
    res.status(201).json(newFlight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ➡️ New: Get Flight By ID
exports.getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) {
      return res.status(404).json({ message: "Flight not found" });
    }
    res.json(flight);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
