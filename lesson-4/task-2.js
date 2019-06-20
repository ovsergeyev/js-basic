'use strict';

const apple = {
    name: 'apple',
    price: 105,
    count: 1
};

const banana = {
    name: 'banana',
    price: 57,
    count: 2
};

const orange = {
    name: 'orange',
    price: 62,
    count: 1
};

const cart = {
    elements: [
        apple,
        banana,
        orange
    ],

    getCost: function () {
        let cost = 0;
        for (let i = 0; i < this.elements.length; i++) {
            cost += this.elements[i].price;
        }
        return cost;
    }
};

console.log(cart.getCost());
