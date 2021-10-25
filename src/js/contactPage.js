import "../css/contact.css"
import { scooter } from "../assets/assets.js";


/**
 * will make the contact page
 */
export default function makeContactPage() {
    // grab the content container
    const content = document.querySelector('#content');
    // remove all the existing content and remove event listeners
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    // change the title of the page
    document.title = "Contact Us";

    // create a wrapper div
    const div = document.createElement('div');
    div.classList.add('contact')

    // add image
    const img = new Image();
    img.src = scooter;
    img.alt = "contact page photo";
    img.classList.add('img');

    div.appendChild(img);

    const h2 = document.createElement('h2');
    h2.classList.add('address');
    h2.innerHTML = `Harry Potter pizza 😋 1st Block 1st Cross,<br> Voldemort street <br>Hogwarts - 560016`;

    div.appendChild(h2);

    // append the made content to the parent div
    content.appendChild(div);
}