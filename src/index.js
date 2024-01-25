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
    menuContainer: document.createElement('div'),
    menuMessageOne: document.createElement('div'),
    menuMessageTwo: document.createElement('div'),
    menuMessageThree: document.createElement('div'),

    home: () => {
        if (displays.displayedContent.contains(displays.menuContainer)) {displays.displayedContent.removeChild(displays.menuContainer)};
        displays.homeButton.classList.add('activeBtn');
        displays.aboutButton.classList.remove('activeBtn');
        displays.menuButton.classList.remove('activeBtn');

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
    },

    menu: () => {
        displays.homeButton.classList.remove('activeBtn');
        displays.aboutButton.classList.remove('activeBtn');
        displays.menuButton.classList.add('activeBtn');

        displays.title.innerHTML = "Our Current Menu"
        displays.displayedContent.removeChild(displays.myIcon);
        displays.displayedContent.removeChild(displays.message);
        displays.menuContainer.classList.add('menu')
        displays.displayedContent.appendChild(displays.menuContainer);

        displays.menuMessageOne.classList.add('menu-message');
        displays.menuMessageTwo.classList.add('menu-message');
        displays.menuMessageThree.classList.add('menu-message');
        displays.menuMessageOne.innerHTML = '<b class="test"> Menu item 1: </b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo unde eius hic est, earum dolorem magni maiores? Unde dignissimos modi, minima facere ducimus veritatis pariatur dolores tenetur, beatae placeat eum.'
        displays.menuMessageTwo.innerHTML = '<b class="test"> Menu item 2: </b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo unde eius hic est, earum dolorem magni maiores? Unde dignissimos modi, minima facere ducimus veritatis pariatur dolores tenetur, beatae placeat eum.'
        displays.menuMessageThree.innerHTML = '<b class="test"> Menu item 3: </b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo unde eius hic est, earum dolorem magni maiores? Unde dignissimos modi, minima facere ducimus veritatis pariatur dolores tenetur, beatae placeat eum.'
        displays.menuContainer.appendChild(displays.menuMessageOne);
        displays.menuContainer.appendChild(displays.menuMessageTwo);
        displays.menuContainer.appendChild(displays.menuMessageThree);
    },
    about: () => {}
}

displays.home();
const homeButton = document.querySelector(".homeButton")
const menuButton = document.querySelector(".menuButton")
const aboutButton = document.querySelector(".aboutButton")
homeButton.addEventListener("click", () => displays.home())
menuButton.addEventListener("click", () => displays.menu())
aboutButton.addEventListener("click", () => displays.about())