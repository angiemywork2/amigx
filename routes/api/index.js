const router = require("express").Router();
const prescriptionRoutes = require("./prescriptions");

// Prescription routes
router.use("/prescriptions", prescriptionRoutes);

module.exports = router;
