//Добавляем цены
fetch('https://kodaktor.ru/cart_data.json')
.then( (result) => result.json())
.then( ({hdd, sdd, usbdrive}) => {
    document.getElementById('hddPrice').textContent = hdd;
    document.getElementById('sddPrice').textContent = sdd;
    document.getElementById('usbPrice').textContent = usbdrive;
});

//Функция для перетаскивания товаров
function drag(ev) {
  ev.dataTransfer.setData("text/plain", ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();  
  const data = ev.dataTransfer.getData("text/plain");
  const node = document.querySelector("#" + data);
  const cart = document.querySelector("#cart");
  let product = cart.querySelector("#" + node.id + "-in-cart");
    
  if (!product) {
    product = document.createElement("div");
    product.id = node.id + "-in-cart";
    product.classList.add("product-in-cart");
   }

  let amount = Number(product.getAttribute("amount"));
  if (amount === 0) {
    product.setAttribute("amount", 1);
    amount = 1;
  }
  else {
    amount += 1;
    product.setAttribute("amount", amount);
  }

  const imgSrc = node.querySelector('img').src;
  const productName = node.textContent.match(/[A-z ]+/)[0].trim();
  const productPrice = Number(node.textContent.match(/[\d]+/)[0]);
  
  const total = document.querySelector("#total");
  const totalPrice = Number(total.textContent.match(/[\d]+/)[0]);
  const maxBudget = document.querySelector("#budget").value;
  if (maxBudget && Number(maxBudget) < totalPrice + productPrice) {
      alert(`Вы вышли за рамки вашего бюджета`);
      return;
  }
  
  //Товар в корзине
  product.innerHTML = `
  ${productName}
  <div class="img-box">    
  <img draggable="false" src="${imgSrc}" alt="${productName}">
  </div>
  <div class="product-in-cart-box">
  Количество товаров: ${amount} <br>
  Сумма товаров: ${productPrice * amount}руб.
  </div>
  `;
  
  if (cart.querySelector("#" + node.id + "-in-cart") == null) {
    cart.appendChild(product); 
  }
  total.textContent = `Общая стоимость покупки: ${totalPrice + productPrice}руб.`;
}

//Очистка корзины от товаров
function empty() {
  const cart = document.querySelector("#cart");
  while (cart.firstChild) {
    cart.removeChild(cart.firstChild);
  }
  document.querySelector("#total").textContent = "Общая стоимость покупки: 0руб.";
}
