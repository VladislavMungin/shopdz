const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400
    },
];

let order = [];

function addToBasket(productId) {
    // TODO: добавить проверку наличия товара в заказе (при наличии выдать alert, что товар уже в корзине)

    // TODO: если товар еще не в корзине, добавить его из массива products

    // Эти строчки не трогаем, они отвечают за переотрисовку страницы
    
    for(let i = 0;i<products.length;i++){
        if(products[i].id==productId){
            if(order.includes(products[i])){
                alert("Такой товар уже есть в корзине");
                break;
            } else {
                order.push(products[i])
            }
        }
    }
    
    renderCart();
    rerenderTotalPrice();
}

function removeFromBasket(productId) {
    // TODO: описать логику удаления товара из корзины

    // Эти строчки не трогаем, они отвечают за переотрисовку страницы
    order.forEach((i,index)=>{
        if(i.id==productId){
            order.splice(index,1)
        }
    })
    
    renderCart();
    rerenderTotalPrice();
}


function rerenderTotalPrice() {
    // TODO: опишите функционал подсчета общей стоимости заказа
    let totalPrice = 0;
    order.forEach(i=>[
        totalPrice += i.price
    ])
    
    // Не меняйте эту строчку
    document.getElementById('total').innerText = totalPrice;
}

// Этот метод остается без изменений
function renderCart() {
    const cart = document.getElementById('basket-items');

    cart.innerHTML = '';
    order.forEach(item => {
        const el = document.createElement('li');
        el.innerText = item.title;
        el.onclick = () => removeFromBasket(item.id);
        cart.appendChild(el);
    })
}