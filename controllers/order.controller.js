//import OrderService from "../services/order.service.js";

async function placeOrder(req, res, next) {
    try {

        logger.info(`placeOrder`);
    } catch (err) {
        next(err);
    }
    res.end();
}

async function updateOrder(req, res, next) {
    try {

        logger.info(`updateOrder`);
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
    placeOrder,
    updateOrder,
    updateStatus,
    deleteOrder,
    getOrder,
    getTotalByClient,
    getTotalByProduct,
    getTopSales
}