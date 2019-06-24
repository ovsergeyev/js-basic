'use strict';

const prod1 = {
    name: 'Product 1',
    price: 230,
    count: 2,
    img: 'img/photo-cart-1.jpg'
};

const prod2 = {
    name: 'Product 2',
    price: 250,
    count: 1,
    img: 'img/photo-cart-2.jpg'
};

const cart = {
    elements: [
        prod1,
        prod2
    ],

    getCost: function () {
        let cost = 0;
        for (let i = 0; i < this.elements.length; i++) {
            cost += this.elements[i].price;
        }
        return cost;
    }
};

const $cartNode = document.getElementById('cart');
// Добавление элемента cartLink
const $cartLink = document.createElement('a');
$cartLink.classList.add('cart__link');
$cartLink.setAttribute('href', 'shoping-cart.html');
$cartNode.appendChild($cartLink);
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


for( let i = 0; i < cart.elements.length; i++){
// Добавление элемента cartItem
    const $cartItem = document.createElement('div');
    $cartItem.classList.add('cart__item');
    $cartDrop.appendChild($cartItem);
// Добавление картинки продукта
    const $cartProduct = document.createElement('img');
    $cartProduct.classList.add('cart__product-img');
    $cartProduct.setAttribute('alt', 'photo-cart');
    $cartProduct.setAttribute('src', cart.elements[i].img);
    $cartItem.appendChild($cartProduct);
// Добавление блока cart__text
    const $cartText = document.createElement('div');
    $cartText.classList.add('cart__text');
    $cartItem.appendChild($cartText);
// Добавление заголовка товара
    const $cartTitle = document.createElement('h3');
    $cartTitle.classList.add('cart__title');
    $cartTitle.textContent = cart.elements[i].name;
    $cartText.appendChild($cartTitle);
// Добавление параграфа с количеством товара и ценой
    const $cartPrice = document.createElement('p');
    $cartPrice.classList.add('cart__price');
    $cartPrice.innerHTML = cart.elements[i].count + ' <span class="cart__span">x</span> $' + cart.elements[i].price
    $cartText.appendChild($cartPrice);
}

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
$cartAmount.textContent = '$' + cart.getCost();
$cartTotalAmount.appendChild($cartAmount);
console.log(cart.getCost());
