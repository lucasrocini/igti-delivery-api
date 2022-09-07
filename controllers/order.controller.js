import OrderServices from "../services/order.services.js";

async function getOrders(req, res, next) {
    try {

        res.send(await OrderServices.getOrders());

        logger.info(`getOrders`);
    } catch (err) {
        next(err);
    }
    res.end();
}

async function placeOrder(req, res, next) {
    try {
        logger.info(`placeOrder`);

        let order = req.body;

        if (!order.cliente || !order.produto ||order.valor == null) {
            throw new Error("Faltam dados no pedido!");
        }

        res.status(200)
            .send(await OrderServices.placeOrder(order.cliente, order.produto,order.valor ));        
    } catch (err) {
        next(err);
    }
    res.end();
}

async function updateOrder(req, res, next) {
    try {
        logger.info(`updateOrder`);

        let order = req.body;

        if (order.id == null || !order.cliente || 
            !order.produto ||order.valor == null || 
            order.entregue == null) {
            throw new Error("Faltam dados no pedido!");
        }

        res.status(200)
            .send(await OrderServices.updateOrder(order));        

    } catch (err) {
        next(err);
    }
    res.end();
}

async function updateStatus(req, res, next) {
    try {

        logger.info(`updateStatus`);
    } catch (err) {
        next(err);
    }
    res.end();
}

async function deleteOrder(req, res, next) {
    try {

        logger.info(`deleteOrder`);
    } catch (err) {
        next(err);
    }
    res.end();
}

async function getOrder(req, res, next) {
    try {

        logger.info(`getOrder`);
    } catch (err) {
        next(err);
    }
    res.end();
}

async function getTotalByClient(req, res, next) {
    try {

        logger.info(`getTotalByClient`);
    } catch (err) {
        next(err);
    }
    res.end();
}

async function getTotalByProduct(req, res, next) {
    try {

        logger.info(`getTotalByProduct`);
    } catch (err) {
        next(err);
    }
    res.end();
}

async function getTopSales(req, res, next) {
    try {

        logger.info(`getTopSales`);
    } catch (err) {
        next(err);
    }
    res.end();
}


export default {
    getOrders,
    placeOrder,
    updateOrder,
    updateStatus,
    deleteOrder,
    getOrder,
    getTotalByClient,
    getTotalByProduct,
    getTopSales
}