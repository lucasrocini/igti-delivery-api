import { promises as fs } from "fs";
import { loggers } from "winston";

const { readFile, writeFile } = fs;

global.fileName = "pedidos.json";

async function getOrders() {
    const data = JSON.parse(await readFile(global.fileName));
    return data.pedidos;
}

async function placeOrder(client, product, value) {
    const data = JSON.parse(await readFile(global.fileName));

    let newOrder = {
        id: data.nextId++,
        cliente: client,
        produto: product,
        valor: value,
        entregue: false,
        timestamp: new Date()
    }

    data.pedidos.push(newOrder);

    await writeFile(global.fileName, JSON.stringify(data, null, 2));

    return newOrder;
}

async function updateOrder(order) {
    const data = JSON.parse(await readFile(global.fileName));
    const index = data.pedidos.findIndex(a => a.id === order.id);

    if (index === -1) {
        throw new Error("Registro não Encontrado");
    }

    data.pedidos[index].cliente = order.cliente;
    data.pedidos[index].produto = order.produto;
    data.pedidos[index].valor = order.valor;
    data.pedidos[index].entregue = order.entregue;
    data.pedidos[index].timestamp = new Date();

    await writeFile(global.fileName, JSON.stringify(data, null, 2));

    return data.pedidos[index];
}
async function updateStatus(order) {
    const data = JSON.parse(await readFile(global.fileName));
    const index = data.pedidos.findIndex(a => a.id === order.id);

    if (index === -1) {
        throw new Error("Registro não Encontrado");
    }

    data.pedidos[index].entregue = order.entregue;

    await writeFile(global.fileName, JSON.stringify(data, null, 2));

    return data.pedidos[index];
}
async function deleteOrder(id) {
    const data = JSON.parse(await readFile(global.fileName));
    const index = data.pedidos.findIndex(a => a.id === parseInt(id));

    if (index === -1) {
        throw new Error("Registro não Encontrado");
    }

    data.pedidos = data.pedidos.filter(
        pedido => pedido.id !== parseInt(id)
    );

    await writeFile(global.fileName, JSON.stringify(data, null, 2));
}

async function getOrder(id) {
    const data = JSON.parse(await readFile(global.fileName));
    const index = data.pedidos.findIndex(a => a.id === parseInt(id));

    if (index === -1) {
        throw new Error("Registro não Encontrado");
    }

    return data.pedidos[index];
}

async function getTotalByClient(client) {
    const data = JSON.parse(await readFile(global.fileName));

    let totalOrdersDeliveredByClient =
        data.pedidos.reduce((acc, cur) => {
            if (cur.entregue) {
                if (cur.cliente === client)
                    return acc + cur.valor;
            }
            return acc;
        }, 0);

    return JSON.stringify(totalOrdersDeliveredByClient);
}

async function getTotalByProduct(product) {
    const data = JSON.parse(await readFile(global.fileName));

    let totalOrdersDeliveredByProduct =
        data.pedidos.reduce((acc, cur) => {
            if (cur.entregue) {
                if (cur.produto === product)
                    return acc + cur.valor;
            }
            return acc;
        }, 0);

    return JSON.stringify(totalOrdersDeliveredByProduct);
}

async function getTopProducts() {
    const data = JSON.parse(await readFile(global.fileName));

    let topProducts = [];

    data.pedidos.forEach(pedido => {
        if (pedido.entregue) {
            if (!topProducts.filter(p => p.productName === pedido.produto).length > 0) {
                topProducts.push({ productName: pedido.produto, totalSales: 1 })
            } else {
                let index = topProducts.findIndex(p => p.productName === pedido.produto);
                topProducts[index].totalSales++;
            }
        }
    });

    topProducts.sort((a, b) => {
        if (a.totalSales < b.totalSales) return 1;
        if (a.totalSales > b.totalSales) return -1;
        return 0;
    });

    topProducts = topProducts
        .map((p) => `${p.productName} - ${p.totalSales}`);

    return JSON.stringify(topProducts);
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
    getTopProducts
}



