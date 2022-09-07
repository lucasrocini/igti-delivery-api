import OrderRepository from "../repository/order.repository.js"

async function getOrders() {
    return await OrderRepository.getOrders();
}

async function placeOrder(client, product, value) {
    return await OrderRepository.placeOrder(client, product, value);
}

async function updateOrder(order) {
    return await OrderRepository.updateOrder(order);
}

async function updateStatus() {
    return await OrderRepository.updateStatus();
}

async function deleteOrder() {
    return await OrderRepository.deleteOrder();
}

async function getOrder() {
    return await OrderRepository.getOrder();
}
async function getTotalByClient() {
    return await OrderRepository.getTotalByClient();
}

async function getTotalByProduct() {
    return await OrderRepository.getTotalByProduct();
}

async function getTopSales() {
    return await OrderRepository.getTopSales();
}

export default{
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