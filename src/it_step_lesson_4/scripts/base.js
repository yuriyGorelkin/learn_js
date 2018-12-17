import { Product } from './product'
import { Cart } from './cart'

class viewCart {
    constructor() {
        this.cartElement = document.getElementById('widgetCart');
        this.cartElement.addEventListener('click', Cart.removeItems);
    }

    showProducts() {
        this.items = Cart.getItems();
        let showElement = '';
        this.items.forEach((item) => {
            showElement += `<div class='cart__item'>${item.title}: ${item.count} * ${item.price} = ${item.totalAmount} <button data-id='${item.id}'class= 'button_removeEl'>del</button></div>`;
        });
        if (this.items.length > 0) {
            showElement += `<button class= 'remove__Btn'> delete </button>`;
        }
        this.cartElement.innerHTML = showElement;
        return this;
    }

}
const widgetCart = new viewCart().showProducts();


function getService(url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);

        xhr.send();

        xhr.onreadystatechange = (() => {
            if (xhr.readyState == 4)
                if (xhr.status == 200) {
                    resolve(xhr.responseText);
                } else {
                    reject('error');
                }
        });
    });
}

let currencyItem;

getService('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
.then(
    (response) => {
        currencyItem = JSON.parse(response)[0].sale;
    },
    (error) => console.log(error)    
)