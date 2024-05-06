const express = require("express");
const router = express.Router();
const mycontrollers = require("../controllers/auth-controller");
const { signupSchema, loginSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/").get(mycontrollers.home);
router.route("/register").post(validate(signupSchema), mycontrollers.register);
router.route("/login").post(validate(loginSchema), mycontrollers.login);
router.route("/user").get(authMiddleware, mycontrollers.user);
module.exports = router;
