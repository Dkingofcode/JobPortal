const express  =  require("express");
const isAuthenticated = require("../middlewares/isAuthenticated.js");
const { getAllCompanies, getCompany, getCompanyById, registerCompany, updateCompany } = require("../controllers/company.js");
//const { singleUpload } = require("../middlewares/multer.js");

const router = express.Router();

router.route("/register").post(isAuthenticated, registerCompany);
router.route("/get").get(isAuthenticated, getCompany);
router.route("/get/:id").get(isAuthenticated, getCompanyById);
router.route("/update/:id").put(isAuthenticated, updateCompany);
router.route("/allCompanies").get(getAllCompanies);


module.exports = router;