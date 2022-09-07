import {promises as fs} from "fs";

const {readFile, writeFile} = fs;

global.fileName = "pedidos.json";

async function getOrders() {
    const data = JSON.parse(await readFile(global.fileName));
    return data.pedidos;
}

async function placeOrder( client, product, value) {
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

    //Returns -1 when index not found
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

    //Returns -1 when index not found
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

async function getTotalByClient() {
    return data;
}

async function getTotalByProduct() {
    return data;
}

async function getTopSales() {
    return data;
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



