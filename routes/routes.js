//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const productController = require('../controllers/productControllers');
const clientController = require('../controllers/clientControllers');
const bookingController = require('../controllers/bookingControllers');
const orderController = require('../controllers/orderControllers');

//CREATE ===============================
router.post("/product", (req, res) => {
    productController.create(req, res);
});

router.post("/client", (req, res) => {
    clientController.create(req, res);
});

router.post("/booking", (req, res) => {
    bookingController.create(req, res);
});

router.post("/order", (req, res) => {
    orderController.create(req, res);
});
//======================================


//READ all==============================
router.get("/products", (req, res) => {
    productController.reads(req, res);
});

router.get("/clients", (req, res) => {
    clientController.reads(req, res);
});

router.get("/bookings", (req, res) => {
    bookingController.reads(req, res);
});

router.get("/orders", (req, res) => {
    orderController.reads(req, res);
});

//READ one------------------------------

router.get("/product/:id", (req, res) => {
    productController.read(req, res);
});

router.get("/client/:id", (req, res) => {
    clientController.read(req, res);
});

router.get("/booking/:id", (req, res) => {
    bookingController.read(req, res);
});

router.get("/order/:id", (req, res) => {
    orderController.read(req, res);
});
//======================================


//UPDATE================================
router.put("/product/:id", (req, res) => {
    productController.update(req, res);
});

router.put("/client/:id", (req, res) => {
    clientController.update(req, res);
});

router.put("/booking/:id", (req, res) => {
    bookingController.update(req, res);
});

router.put("/order/:id", (req, res) => {
    orderController.update(req, res);
});
//======================================


//DELETE================================
router.delete("/product/:id", (req, res) => {
    productController.delete(req, res);
});

router.delete("/client/:id", (req, res) => {
    clientController.delete(req, res);
});

router.delete("/booking/:id", (req, res) => {
    bookingController.delete(req, res);
});

router.delete("/order/:id", (req, res) => {
    orderController.delete(req, res);
});
//======================================


module.exports = router;