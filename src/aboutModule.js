export const aboutModule = {
    about: (displays) => {
        if (displays.displayedContent.contains(displays.menuContainer)) {displays.displayedContent.removeChild(displays.menuContainer)};
        if (displays.displayedContent.contains(displays.myIcon)) {displays.displayedContent.removeChild(displays.myIcon)};
        
        displays.homeButton.classList.remove('activeBtn');
        displays.aboutButton.classList.add('activeBtn');
        displays.menuButton.classList.remove('activeBtn');

        displays.title.innerHTML = "About Us"
        displays.displayedContent.appendChild(displays.message);
        displays.message.classList.remove('message')
        displays.message.classList.add('about-message')
        displays.message.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto minus itaque nostrum ipsam aspernatur id velit fugiat commodi, quam tempore exercitationem! Aperiam nulla ducimus adipisci officiis voluptatem mollitia laborum iste. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto minus itaque nostrum ipsam aspernatur id velit fugiat commodi, quam tempore exercitationem! Aperiam nulla ducimus adipisci officiis voluptatem mollitia laborum iste."
    }
};