import homePage from "./homePage.js";
import menuPage from "./menuPage.js";
import contactPage from "./contactPage.js";
import { logo } from "../assets/assets.js";
import "../css/style.css";


/**
 * function `makeHeader`
 * will make the navigation bar
 */
function makeHeader() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    const divLogo = new Image();
    divLogo.src = logo;
    divLogo.classList.add('logo')
    nav.appendChild(divLogo);

    const routes = document.createElement('ul');
    routes.classList.add('routes');
    const routeName = ['Home', 'Menu', 'Contact Us'];
    for (let i = 0; i < routeName.length; i++) {
        const li = document.createElement('li');
        li.classList.add('route');
        li.textContent = routeName[i];
        routes.appendChild(li);
    }
    nav.appendChild(routes);

    const userActions = document.createElement('ul');
    userActions.classList.add('user-actions');
    userActions.innerHTML = `<li class="login route">Sign In</li><li class="signup route">Sign Up</li>`;
    nav.appendChild(userActions);

    header.appendChild(nav);
    document.querySelector('body').insertAdjacentElement('afterbegin', header);
}


makeHeader();


// Grab the navigation links
const routes = document.querySelector('.navbar');
routes.addEventListener('click', handleClick);

// links and their respective funcntion to call when clicked
const link = {
    "home": homePage,
    "menu": menuPage,
    "contact us": contactPage
}

// handler function
function handleClick(e) {
    if (e.target.classList.contains('route')) {
        if (link[e.target.textContent.toLowerCase()]) {
            link[e.target.textContent.toLowerCase()]();
        }
    }
}


homePage();