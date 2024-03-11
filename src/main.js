import { carousel, carouselHandler } from './carousel';
import { menuSection, menuHandler } from './menu';
import { modal, modalHandler } from './modal';
import { progressBarSection, showProgressBar } from './progress-bar';
import { showTemplateSlider, sliderSection } from './slider';
import './style.css';

const app = document.querySelector('#app');

app.append(carousel, sliderSection, menuSection, modal, progressBarSection);

window.document.addEventListener('DOMContentLoaded', () => {
	carouselHandler();
	showTemplateSlider();
	menuHandler();
	modalHandler();
	showProgressBar();

	// app.append(
	// showCarousel(),
	// showSlider(),
	// showMenu(),
	// showModal(),
	// showProgressBar()
	// );
});
