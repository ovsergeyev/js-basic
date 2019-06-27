'use strict';

// Повесил обработчик клика на каждый элемент Product
const $products = document.getElementsByClassName('product');
for (let i = 0; i < $products.length; i++) {
    $products[i].addEventListener('click', hundleAddToCart);
}

// Обработчик клика по элементу Product
function hundleAddToCart(event) {
    if (event.target.textContent === 'Add to Cart') {
        const name = this.getElementsByClassName('product__name')[0].textContent;
        const price = +this.getElementsByClassName('product__price')[0].textContent.replace('$', '');
        const img = this.getElementsByClassName('product__img')[0].getAttribute('src');
        const item = {
            name: name,
            price: price,
            count: 1,
            img: img
        };

        cart.elements.push(item);
        renderCartElements();
        renderCartTotalPrice();
    }
}

// Объект корзина
const cart = {
    elements: [],

    getCost: function () {
        let cost = 0;
        for (let i = 0; i < this.elements.length; i++) {
            cost += this.elements[i].price * this.elements[i].count;
        }
        return cost;
    }
};

renderCart();

// Функция отрисовыавает корзину
function renderCart() {
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
    // Добавление контейнера для Items
    cart.cartItems = document.createElement('div');
    $cartDrop.appendChild(cart.cartItems);

    renderCartElements();

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
    cart.cartAmount = document.createElement('p');
    cart.cartAmount.classList.add('cart__amount');

    renderCartTotalPrice();

    $cartTotalAmount.appendChild(cart.cartAmount);
}

// Функция отрисовывает элементы корзины
function renderCartElements() {
    while (cart.cartItems.firstChild) {
        cart.cartItems.firstChild.remove();
    }
    for (let i = 0; i < cart.elements.length; i++) {
        // Добавление элемента cartItem
        const $cartItem = document.createElement('div');
        $cartItem.classList.add('cart__item');
        cart.cartItems.appendChild($cartItem);
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
}

// Функция отрисовывает стоимость корзины
function renderCartTotalPrice() {
    cart.cartAmount.textContent = '$' + cart.getCost();
}
