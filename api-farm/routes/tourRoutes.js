const express = require("express");

const tourController = require("../controllers/tourController");
const router = express.Router();
router.param("id", (req, res, next, val) => {
  console.log(`Tour id is ${val}`);
  next();
});
router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route("/:id")
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour)
  .get(tourController.getTourById);

module.exports = router;
