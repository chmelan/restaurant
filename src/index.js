
import{renderInitialLoad} from "./inital-load"
import{aboutTab} from "./about-tab"
import{menuTab} from "./menu-tab"
import{contactTab} from "./contact-tab"
const content = document.querySelector("#content")
content.innerHTML = ` <nav>
<img class="navLogo" src="https://image.flaticon.com/icons/png/512/44/44506.png">
<span class="navPageTitle">Elmer's Eggselent Emporium</span>
<button class="navButton" id="navAboutButton">About</button>
<button class="navButton" id="navMenuButton">Menu</button>
<button class="navButton" id="navContactButton">Contact</button>
</nav>
<div class="tabContent"></div>`
const tabContent = document.querySelector(".tabContent")
const homeButton = document.querySelector(".navLogo")
const aboutButton = document.querySelector("#navAboutButton")
const menuButton = document.querySelector("#navMenuButton")
const contactButton = document.querySelector("#navContactButton")


function renderAboutTab(){
    aboutTab(tabContent)
}
function renderMenuTab(){
    menuTab(tabContent)
}
function renderContactTab(){
    contactTab()
}
function renderHomeTab(){
    renderInitialLoad(tabContent)
}



renderInitialLoad(tabContent);
homeButton.addEventListener("click", renderHomeTab)
aboutButton.addEventListener("click", renderAboutTab)
menuButton.addEventListener("click", renderMenuTab)
contactButton.addEventListener("click", renderContactTab)
