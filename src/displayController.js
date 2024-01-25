import { homeModule } from './homeModule';
import { menuModule } from './menuModule';
import { aboutModule } from './aboutModule';

export const displayController = (displays) => {
    const homeButton = document.querySelector(".homeButton");
    const menuButton = document.querySelector(".menuButton");
    const aboutButton = document.querySelector(".aboutButton");

    homeButton.addEventListener("click", () => homeModule.home(displays));
    menuButton.addEventListener("click", () => menuModule.menu(displays));
    aboutButton.addEventListener("click", () => aboutModule.about(displays));
};