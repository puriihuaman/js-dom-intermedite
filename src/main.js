import { showCarousel } from './carousel';
import { showMenu } from './menu';
import { showModal } from './modal';
import { showProgressBar } from './progress-bar';
import './style.css';

const app = document.querySelector('#app');

app.append(showCarousel(), showMenu(), showModal(), showProgressBar());
