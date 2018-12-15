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


class Cart {
    static getItems() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    static addItem(item) {
        const items = this.getItems();
        if (this.containsItem(item)) {
            console.log(item);
            this.updateItem(item);
        } else {
            items.push(item);
            localStorage.setItem('cart', JSON.stringify(items));
        }
    }

    static updateItem(updatedItem) {
        const items = this.getItems();
        items.forEach((item) => {
            if (updatedItem.id === item.id) {
                item.count = parseInt(item.count) + parseInt(updatedItem.count);
                item.totalAmount = item.count * item.price;
                localStorage.setItem('cart', JSON.stringify(items));
            }
        });
    }

    static containsItem(addedItem) {
        let contains = false;
        const items = this.getItems();

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

    static removeItems(e) {
        if (e.target.classList.contains('remove__Btn')) {
            localStorage.removeItem('cart');
            widgetCart.cartElement.innerHTML = '';
        }
        if (e.target.classList.contains('button_removeEl')) {
            const btnId = e.target.getAttribute('data-id');
            const items = Cart.getItems();
            items.forEach((item, i) => {
                if (btnId === item.id) {
                    items.splice(i, 1);
                    localStorage.setItem('cart', JSON.stringify(items));
                    widgetCart.cartElement.removeChild(item);                   
                }
            });
        }
    }
}

class viewCart {
    constructor(items) {
        this.items = items;
        this.cartElement = document.getElementById('widgetCart');
        this.cartElement.addEventListener('click', Cart.removeItems);
        // this.cartElement.addEventListener('click', this.deleteShowElement.bind(this));
    }

    showProducts() {
        let showElement = '';
        this.items.forEach((item) => {
            showElement += `<div class='cart__item'>${item.title}: ${item.count} * ${item.price} = ${item.totalAmount} </div> <button data-id='${item.id}'class= 'button_removeEl'>del</button>`;
        });
        showElement += `<button class= 'remove__Btn'> delete </button>`;
        this.cartElement.innerHTML = showElement;
        return this;
    }

    // deleteShowElement(e) {
    //     if (e.target.classList.contains('button_removeEl')) {
    //         const btnId = e.target.getAttribute('data-id');
    //         const items = Cart.getItems();            
    //         items.forEach((item) => {
    //             if (btnId === item.id) {                   
    //                 this.cartElement.removeChild(item);                    
    //             }
    //         });
    //     }
    // }
}

const widgetCart = new viewCart(Cart.getItems()).showProducts();