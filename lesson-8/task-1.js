'use strict';

const cart = {
    elements: [
    ],

    getFuncCost: function () {
        let cost = 0;
        let newFunc = function(){
            for (let i = 0; i < this.elements.length; i++) {
                cost += this.elements[i].price * this.elements[i].count;
            }
            return cost;
        }
        return newFunc.bind(this);
    }
};

const products = [
    {
        id: 0,
        name: 'Product 1',
        price: 48,
        img: 'img/product1.jpg',
    },
    {
        id: 1,
        name: 'Product 2',
        price: 42,
        img: 'img/product2.jpg',
    },
    {
        id: 2,
        name: 'Product 3',
        price: 38,
        img: 'img/product3.jpg',
    },
    {
        id: 3,
        name: 'Product 4',
        price: 30,
        img: 'img/product4.jpg',
    },
    {
        id: 4,
        name: 'Product 5',
        price: 46,
        img: 'img/product5.jpg',
    },
    {
        id: 5,
        name: 'Product 6',
        price: 44,
        img: 'img/product6.jpg',
    },
    {
        id: 6,
        name: 'Product 7',
        price: 32,
        img: 'img/product7.jpg',
    },
    {
        id: 7,
        name: 'Product 8',
        price: 45,
        img: 'img/product8.jpg',
    },
];

const $cart = document.getElementById('cart');
const $catalog = document.getElementById('products-inner');
const $templateCartItem = document.getElementById('cart-item-template').children[0];
const $templateProductItem = document.getElementById('product-item-template').children[0];

$catalog.addEventListener('click', handleBuyClick);
$cart.addEventListener('click', handleRemoveClick);

function indexOf(id) {
    for (let i = 0; i < cart.elements.length; i++) {
        if (cart.elements[i].id === id) {
            return i;
        }
    }

    return -1;
}

function handleRemoveClick(event) {
    console.log(event);

    if (event.target.classList.contains('pointer')) {
        const $close = event.target.parentElement;
        const id = +$close.dataset.id;
        const idx = indexOf(id);

        //console.log(cart.elements[idx]);
        console.log(idx);

        if (cart.elements[idx].count > 1) {
            cart.elements[idx].count--;
        } else {
            cart.elements.splice(idx, 1);
        }

        countBascketPrice(cart);
    }

}

function handleBuyClick(event) {
    if (event.target.classList.contains('product__add')) {
        const cartItem = {
            id: +event.target.dataset.id,
            name: event.target.dataset.name,
            price: event.target.dataset.price,
            img: event.target.dataset.img
        };

        const idx = indexOf(cartItem.id);

        if (idx === -1) {
            //товара в корзине нет
            cartItem.count = 1;
            cart.elements.push(cartItem);
        } else {
            cart.elements[idx].count++;
        }

        countBascketPrice(cart);
    }
    event.preventDefault();
}

function countBascketPrice(cart) {
    $cart.innerHTML = '';
    // Добавление элемента cartLink
    const $cartLink = document.createElement('div');
    $cartLink.classList.add('cart__link');
    $cartLink.setAttribute('href', 'shoping-cart.html');
    $cart.appendChild($cartLink);
    // Добавление изображения корзины
    const $cartImg = document.createElement('img');
    $cartImg.classList.add('cart__img');
    $cartImg.setAttribute('src', 'img/cart.svg');
    $cartImg.setAttribute('alt', 'cart');
    $cartLink.appendChild($cartImg);
    // Добавление элемента cartDrop
    const $cartDrop = document.createElement('div');
    $cartDrop.classList.add('cart__drop');
    $cartLink.appendChild($cartDrop);
    // Добавление контейнера для Items
    const $cartItems = document.createElement('div');
    $cartDrop.appendChild($cartItems);

    // Добавление элемента cartTotalAmount
    const $cartTotalAmount = document.createElement('div');
    $cartTotalAmount.classList.add('cart__total-amount');
    $cartDrop.appendChild($cartTotalAmount);
    // Добавление кнопки Checkout
    const $cartButtonCheckout = document.createElement('div');
    $cartButtonCheckout.classList.add('cart__button');
    $cartButtonCheckout.textContent = 'Checkout';
    $cartDrop.appendChild($cartButtonCheckout);
    // Добавление кнопки 'Go to cart'
    const $cartButtonGoToCart = document.createElement('div');
    $cartButtonGoToCart.classList.add('cart__button');
    $cartButtonGoToCart.textContent = 'Go to cart';
    $cartDrop.appendChild($cartButtonGoToCart);
    // Добавление Total
    const $cartTotal = document.createElement('p');
    $cartTotal.classList.add('cart__total');
    $cartTotal.textContent = 'TOTAL';
    $cartTotalAmount.appendChild($cartTotal);
    // Добавление TotalPrice
    const $cartAmount = document.createElement('p');
    $cartAmount.classList.add('cart__amount');

    $cartTotalAmount.appendChild($cartAmount);


    if (cart.elements && cart.elements.length) {
        for (let i = 0; i < cart.elements.length; i++) {
            const $item = $templateCartItem.cloneNode('true');
            const $img = $item.querySelector('img');
            const $title = $item.querySelector('.cart__title');
            const $price = $item.querySelector('.cart__price');
            $img.setAttribute('src', cart.elements[i].img);
            $title.textContent = cart.elements[i].name;
            $price.textContent = cart.elements[i].count;
            $price.textContent += ' x ';
            $price.textContent += '$' + cart.elements[i].price;

            const $close = $item.querySelector('.cart__close');
            $close.dataset['id'] = cart.elements[i].id;

            $cartItems.appendChild($item);
        }

        $cartAmount.textContent = '$' + cart.getFuncCost()();
    } else {
        $cartAmount.textContent = 'Корзина пуста';
    }
}

function buildCatalogProducts(products) {
    for (let i = 0; i < products.length; i++) {
        const $item = $templateProductItem.cloneNode(true);
        const keys = Object.keys(products[i]);
        const $button = $item.querySelector('.product__add');
        const $img = $item.querySelector('img');

        $img.setAttribute('src', products[i].img);

        for (let j = 0; j < keys.length; j++) {
            const key = keys[j];
            const $element = $item.querySelector('.' + key);
            if ($element) {
                $element.textContent = products[i][key];
            }

            $button.dataset[key] = products[i][key];
        }

        $catalog.appendChild($item);
    }
}

buildCatalogProducts(products);
countBascketPrice(cart);


