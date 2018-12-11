class Product {
    constructor(product) {
        this.title = product.getAttribute('data-title');
        this.price = product.getAttribute('data-price');
        this.id = product.getAttribute('data-id');
        const productBtn = product.querySelector('.product__btn');
        this.inputCount = product.querySelector('.product__count');

        this.addToCart = this.addToCart.bind(this);

        productBtn.addEventListener('click', this.addToCart);
    }

    getData() {
        return {
            title: this.title,
            price: this.price,
            id: this.id,
            count: this.count,
            totalAmount: this.TotalAmount
        }
    }

    addToCart() {
        this.count = this.inputCount.value;
        this.TotalAmount = this.price * this.count;
        Cart.addStorage(this.getData());
        new viewCart(JSON.parse(localStorage.getItem('cart'))).showProducts();
    }
}

document.querySelectorAll('.product').forEach(function (product) {
    const item = new Product(product);
})


class Cart {
    static addStorage(item) {
        const items = JSON.parse(localStorage.getItem('cart')) || [];
        if (this.containsItem(item)) {
            console.log(item);
            this.updateItem(item);
        } else {
            items.push(item);
            localStorage.setItem('cart', JSON.stringify(items));
        }
    }

    static updateItem(updatedItem) {
        const items = JSON.parse(localStorage.getItem('cart'));
        items.forEach((item) => {
            if (updatedItem.id === item.id) {
                item.count = parseInt (item.count) + parseInt (updatedItem.count);
                item.totalAmount = item.count * item.price;
                localStorage.setItem('cart', JSON.stringify(items));
            }
        });
    }

    static containsItem(addedItem) {
        let contains = false;
        const items = JSON.parse(localStorage.getItem('cart'));

        if (!items) {
            return contains;
        }
        items.forEach((item) => {
            if (addedItem.id === item.id) {
                contains = true;
            }
        });
        return contains;
    }       
}

class viewCart {
    constructor(items) {
       this.items = items; 
    }
    showProducts() {
        let showElement = '';
        this.items.forEach((item) => {
            showElement += `<div>${item.title}: ${item.count} * ${item.price} = ${item.totalAmount} </div>`;            
        });
        document.getElementById('cart').innerHTML = showElement;
    }
}

new viewCart(JSON.parse(localStorage.getItem('cart'))).showProducts();
