import './style.css';
import Icon from './restaurant.jpg';
const contentDiv = document.getElementById('content');

const displays = {
    header: document.createElement('div'),
    navBar: document.createElement('div'),
    homeButton: document.createElement('button'),
    menuButton: document.createElement('button'),
    aboutButton: document.createElement('button'),
    displayedContent: document.createElement('div'),
    title: document.createElement('div'),
    message: document.createElement('div'),
    myIcon: new Image(),

    home: function() {
        displays.header.classList.add('header');
        displays.navBar.classList.add('nav-bar');
    
        displays.homeButton.classList.add('btn');
        displays.homeButton.classList.add('homeButton');
        displays.homeButton.innerHTML = 'HOME'
    
        displays.menuButton.classList.add('btn');
        displays.menuButton.classList.add('menuButton');
        displays.menuButton.innerHTML = 'VIEW MENU'
    
        displays.aboutButton.classList.add('btn');
        displays.aboutButton.classList.add('aboutButton');
        displays.aboutButton.innerHTML = 'ABOUT US'
    
        displays.displayedContent.classList.add('body');
    
        displays.title.innerHTML = "Welcome to Shakoor's!";
        displays.title.classList.add('heading');
    
        displays.message.classList.add('message');
        displays.message.innerHTML = "Enjoy a night of fine dining!"
    
        displays.myIcon.src = Icon;
        displays.myIcon.classList.add('main-image');
    
        displays.navBar.appendChild(displays.homeButton);
        displays.navBar.appendChild(displays.menuButton);
        displays.navBar.appendChild(displays.aboutButton);
        displays.header.appendChild(displays.navBar);
        displays.displayedContent.appendChild(displays.title);
        displays.displayedContent.appendChild(displays.myIcon);
        displays.displayedContent.appendChild(displays.message);
        contentDiv.appendChild(displays.header);
        contentDiv.appendChild(displays.displayedContent);
    }
}

displays.home();

// TODO: event listeners on buttons to clear and add to body
const homeButton = document.querySelector(".homeButton")
const menuButton = document.querySelector(".menuButton")
const aboutButton = document.querySelector(".aboutButton")
homeButton.addEventListener("click", () => home())
menuButton.addEventListener("click", () => menu())
aboutButton.addEventListener("click", () => about())

function home() {
    displays.home();
}

function menu() {
    // while (displays.displayedContent.firstChild) {
    //     displays.displayedContent.removeChild(displays.displayedContent.lastChild);
    // }
    displays.title.innerHTML = "Take a look at our current menu!"
    displays.displayedContent.removeChild(displays.myIcon);
}
function about() {
    console.log('this is the about page')
}