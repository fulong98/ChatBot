const CoffeeManger = requires(coffeeManager.js)
describe('Coffee Manager', () => {
    let coffeeManager;
    beforeEach(() =>
    {
        coffeeManager = new CoffeeManager();
        order= ['kopi','kopiC'];
    })
    it('it should be able to list current order', () => {
        const coffeeManager = new CoffeeManager();
        expect (coffeeManager.getCurrentOrders()).toEqual([]);
    })
});

it("can receive an order",() =>{
    const coffeeManager = new CoffeeManager();
    coffeeManager.receiveOrder(order);
    expect (coffeeManager.getCurrentOrders()).toEqual([order]);
})

