import menuPage from "./menuPage.js";
import images from "../assets/assets.js";
import { homePizza } from "../assets/assets.js";

export default function homePage() {
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    // change the title of the page
    document.title = "La Roma pizzeria - Home"

    appendInfo(content);
    appendPhotos(content);
}


/**
 * function `appendInfo`
 * takes the target node as input and appends the required information to it
 * will generate the following HTML
 * <div class="info">
 *   <div class="tagline">😋 Best pizza in the Town</div>
 *     <div class="para">
 *       <h1>Order Tasty &amp; Fresh Pizza <span>Anytime !</span></h1>
 *     </div>
 *     <div class="extra">Just confirm your Order and enjoy our delicious fastest delivery.</div>
 *     <div class="extra-links">
 *       <button class="order-now">Order Now</button>
 *       <div class="menu-link">See menu...</div>
 *     </div>
 *     </div>
 *   <img src="http://localhost:8080/528e8634cb5f87416979.png">
 * </div>
 * @param {HTML Node} target 
 */
function appendInfo(target) {
    const divInfo = document.createElement('div');
    divInfo.classList.add('info');
    const divInner = document.createElement('div');
    divInner.setAttribute('class', 'tagline');
    divInner.textContent = `😋 Best pizza in the Town`;
    divInfo.appendChild(divInner);

    const para = document.createElement('div');
    para.innerHTML = `<h1>Order Tasty & Fresh Pizza <span>Anytime !</span></h1>`;
    para.classList.add('para');
    divInfo.appendChild(para);


    const extraInfo = document.createElement('div');
    extraInfo.textContent = "Just confirm your Order and enjoy our delicious fastest delivery.";
    extraInfo.classList.add('extra');
    divInfo.appendChild(extraInfo);

    const extraLinks = document.createElement('div');
    extraLinks.classList.add('extra-links');
    extraLinks.innerHTML = `<button class="order-now">Order Now</button><div class="menu-link">See menu...</div>`;
    divInfo.appendChild(extraLinks);
    target.appendChild(divInfo);
    const menuLink = document.querySelector('.menu-link');
    menuLink.addEventListener('click', handleMenuClick);

    function handleMenuClick(e) {
        if (e.target.classList.contains("menu-link")) {
            menuPage();
        }
    }
}

/**
 * funtion `appendPhots`
 * Will generate the following HTML and append it to the target
 *  <div class="photo">
 *     <div class="happy-customers">
 *     <div>Our Happy Customers</div>
 *     <img src="LINK TO THE FILE" alt="A Happy Customer" class="customer">
 *     <img src="LINK TO THE FILE" alt="A Happy Customer" class="customer">
 *     <img src="LINK TO THE FILE" alt="A Happy Customer" class="customer">
 *     <img src="LINK TO THE FILE" alt="A Happy Customer" class="customer">
 *     <div class="happy-logo">😍</div>
 *   </div>
 * @param {HTML Node} target 
 */
function appendPhotos(target) {
    const divPhoto = document.createElement('div');
    divPhoto.classList.add('photo');

    const happyCustomers = document.createElement('div');
    happyCustomers.classList.add('happy-customers');
    let txt = document.createElement('div');
    txt.textContent = "Our Happy Customers"
    happyCustomers.appendChild(txt);
    for (let i in images) {
        let img = new Image();
        img.src = images[i];
        img.alt = 'A Happy Customer';
        img.classList.add('customer');
        happyCustomers.appendChild(img)
    }

    const happyLogo = document.createElement('div');
    happyLogo.classList.add('happy-logo');
    happyLogo.textContent = '😍';
    happyCustomers.appendChild(happyLogo);

    divPhoto.appendChild(happyCustomers);

    const pzaImage = new Image();
    pzaImage.src = homePizza;

    divPhoto.appendChild(pzaImage);

    target.appendChild(divPhoto);

}