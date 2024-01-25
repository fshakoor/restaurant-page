export const homeModule = {
    home: (displays) => {
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
    }
};