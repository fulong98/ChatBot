class CoffeeManager {
    constructor (){this.orders = []}
    getCurrentOrders(order){
        return this.orders;
    }
    receiveOrder(orders){
        return this.orders.push(orders);
    }

}

module export = CoffeeManager.js