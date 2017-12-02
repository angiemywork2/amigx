const router = require("express").Router();
const prescriptionsController = require("../../controllers/prescriptionsController");

// Matches with "/api/prescriptions"
router.route("/")
  .get(prescriptionsController.findAll)
  .post(prescriptionsController.create);

// Matches with "/api/prescriptions/:id"
router
  .route("/:id")
  .get(prescriptionsController.findById)
  .put(prescriptionsController.update)
  .delete(prescriptionsController.remove);

module.exports = router;
