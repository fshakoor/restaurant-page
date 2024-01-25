export const menuModule = {
    menu: (displays) => {
        if (displays.displayedContent.contains(displays.message)) {displays.displayedContent.removeChild(displays.message)};
        if (displays.displayedContent.contains(displays.myIcon)) {displays.displayedContent.removeChild(displays.myIcon)};
        displays.homeButton.classList.remove('activeBtn');
        displays.aboutButton.classList.remove('activeBtn');
        displays.menuButton.classList.add('activeBtn');

        displays.title.innerHTML = "Our Current Menu"
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
    }
};