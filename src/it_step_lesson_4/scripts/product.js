import { Cart } from './cart'
export class Product {
    constructor(product) {
        this.title = product.getAttribute('data-title');
        this.price = product.getAttribute('data-price');
        this.id = product.getAttribute('data-id');
        const productBtn = product.querySelector('.product__btn');
        this.inputCount = product.querySelector('.product__count');
        this.currency = 1;

        this.addToCart = this.addToCart.bind(this);

        productBtn.addEventListener('click', this.addToCart);
    }

    getData() {
        return {
            title: this.title,
            price: this.price,
            id: this.id,
            count: this.count,
            totalAmount: this.TotalAmount,
            currencyAmount: this.TotalAmount / currencyItem
        }
    }

    addToCart() {
        this.count = this.inputCount.value;
        let reg = /^\d{1,3}$/;
        if (!reg.test(this.count)) {
            this.count = 1;
        }
        this.TotalAmount = this.price * this.count;
        Cart.addItem(this.getData());
        new viewCart(JSON.parse(localStorage.getItem('cart'))).showProducts();
    }    
}

document.querySelectorAll('.product').forEach(function (product) {
    const item = new Product(product);
})
