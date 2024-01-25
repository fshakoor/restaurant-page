import './style.css';
import Icon from './restaurant.jpg';
import { displays } from './displayModule';
import { displayController } from './displayController';

const contentDiv = document.getElementById('content');

displays.home();
displayController(displays);