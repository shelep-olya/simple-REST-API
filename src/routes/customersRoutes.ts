import { createCustomerController } from "../controllers/createCustomer";
import { getCustomersController } from "../controllers/getCustomers";
import { getCustomerController } from "../controllers/getCustomer";
import { deleteCustomerController } from "../controllers/deleteCustomer";
import { updateCustomerController } from "../controllers/updateCustomer";

const express = require("express");
const router = express.Router();

console.log("customers route");

router.post("/", createCustomerController);
router.get("/", getCustomersController);
router.get("/:id", getCustomerController);
router.delete("/:id", deleteCustomerController);
router.patch("/:id", updateCustomerController);


module.exports = router;