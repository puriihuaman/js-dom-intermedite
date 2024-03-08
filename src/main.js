import { showCarousel } from './carousel';
import { showMenu } from './menu';
import './style.css';

const app = document.querySelector('#app');

app.append(showCarousel(), showMenu());
