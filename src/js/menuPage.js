import pizzas from "../assets/pizzas/pizzaData.js";
import '../css/menu.css'

export default function menuPage() {
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    document.title = "Menu";

    makeMenu(content);
}


function makeMenu(content) {
    const divMenu = document.createElement('div');
    divMenu.classList.add('menu');

    for (let i = 0; i < pizzas.length; i++) {
        const box = document.createElement('div');
        box.classList.add('box');

        box.innerHTML = `
        <div class="pizzaPhoto">
                    <img src="${pizzas[i].photo}" alt="${pizzas[i].name}" class="pizza-photo">
                </div>
                <div class="pizzaInfo">
                    <div class="pizza-name">${pizzas[i].name}</div>
                    <div class="star-and-price">
                        <div class="stars">⭐⭐⭐⭐⭐</div>
                        <div class="price"><span>${pizzas[i].price}</span></div>
                    </div>
                    <div class="route order-link">order now...</div>
                </div>`;

        divMenu.appendChild(box);

    }

    content.appendChild(divMenu);
}