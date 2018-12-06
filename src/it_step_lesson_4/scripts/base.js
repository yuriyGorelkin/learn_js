class Product {
    constructor(product) {
        this.title = product.getAttribute('data-title');
        this.price = product.getAttribute('data-price');
        this.id = product.getAttribute('data-id');
        const productBtn = product.querySelector('.product__btn');
        productBtn.addEventListener('click', this.addToCart.bind(this));
        this.inputCount = product.querySelector('.product__count');
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
    }
}

document.querySelectorAll('.product').forEach(function (product) {
    const item = new Product(product);
})

const items = [];

class Cart {   
    static addStorage(item) { 
        if (this.containsItem(item)) {
            console.log(item);
        }  else {
            items.push(item);
            localStorage.setItem('cart', JSON.stringify(items)); 
        }    
               
    }

    static containsItem(addedItem) {
        let contains = false;
        const items = JSON.parse(localStorage.getItem('cart'));
        if (!items) {
            return contains;
        }
        items.forEach((item)=> {
            if (addedItem.id === item.id) {
                contains = true;
            }
        });
        return contains;
        
    }
}

