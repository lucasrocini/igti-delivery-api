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

async function updateStatus(order) {
    return await OrderRepository.updateStatus(order);
}

async function deleteOrder(id) {
    return await OrderRepository.deleteOrder(id);
}

async function getOrder(id) {
    return await OrderRepository.getOrder(id);
}
async function getTotalByClient(client) {
    return await OrderRepository.getTotalByClient(client);
}

async function getTotalByProduct(product) {
    return await OrderRepository.getTotalByProduct(product);
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