const router = require("express").Router();
const Bus = require("../models/busModel");
const authMiddleware = require("../middlewares/authMiddleware");


router.post("/add-bus", authMiddleware, async (req, res) => {
  const console = require('console');

  try {
    const existingBus = await Bus.findOne({ number: req.body.number });
    if (existingBus) {
      return res.status(200).send({
        success: false,
        message: "Bus already exists",
      });
    }
    const newBus = new Bus(req.body);
    console.log(newBus);
    await newBus.validate();
    await newBus.save();
    return res.status(200).send({
      success: true,
      message: "Bus added successfully",
    });
  } catch (error) {
    console.error('Error adding bus:', error);
    if (error.errors) {
      // Validation error occurred, handle it
      const validationErrors = {};
      for (const key in error.errors) {
        validationErrors[key] = error.errors[key].message;
      }}
      else{  
     res.status(500).send({ success: false, message: error});}
  }
});


router.post("/update-bus", authMiddleware, async (req, res) => {
  try {
    await Bus.findByIdAndUpdate(req.body._id, req.body);
    return res.status(200).send({
      success: true,
      message: "Bus updated successfully",
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});


router.post("/delete-bus", authMiddleware, async (req, res) => {
  try {
    await Bus.findByIdAndDelete(req.body._id);
    return res.status(200).send({
      success: true,
      message: "Bus deleted successfully",
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});


router.post("/get-all-buses", authMiddleware, async (req, res) => {
  try {
    const buses = await Bus.find(req.body);
    return res.status(200).send({
      success: true,
      message: "Buses fetched successfully",
      data: buses,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});


router.post("/get-bus-by-id", authMiddleware, async (req, res) => {
  try {
    const bus = await Bus.findById(req.body._id);
    return res.status(200).send({
      success: true,
      message: "Bus fetched successfully",
      data: bus,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});

module.exports = router;
