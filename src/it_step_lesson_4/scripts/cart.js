export class Cart {
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
                    widgetCart.showProducts();
                }
            });
        }
    }
}