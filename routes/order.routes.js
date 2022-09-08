import express  from "express";
import OrderController from "../controllers/order.controller.js";

const router = express.Router();

router.get('/order', OrderController.getOrders);

router.post('/order', OrderController.placeOrder);

router.patch('/order', OrderController.updateOrder);

router.patch('/order/deliveryStatus', OrderController.updateStatus);

router.delete('/order/:id', OrderController.deleteOrder);

router.get('/order/totalByClient/:client', OrderController.getTotalByClient);

router.get('/order/totalByProduct/:product', OrderController.getTotalByProduct);

router.get('/order/topSales', OrderController.getTopSales);

router.get('/order/:id', OrderController.getOrder);

router.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message });
});


export default router;