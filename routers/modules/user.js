var express = require("express");
var router = express.Router();

const auth = require.main.require("./middleware/CheckAuthentication");

const AuthController = require.main.require("./controllers/AuthController");
const UserController = require.main.require("./controllers/UserController");

router.get("/", auth, (req, res) => {
	new UserController().index(req, res);
});
router.get("/:id", (req, res) => {
	new UserController().show(req, res);
});
router.post("/", auth, AuthController.register);
router.patch("/:id", auth, (req, res) => {
	new UserController().update(req, res);
});
router.delete("/:id", auth, (req, res) => {
	new UserController().destroy(req, res);
});

module.exports = router;
