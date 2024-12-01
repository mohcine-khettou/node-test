const insuranceController = require("./insurance-controller");
const router = require("express").Router();

router.get("/", insuranceController.getAllInsurances);
router.route("/:id").get(insuranceController.getSingleInsurance);
module.exports = router;
