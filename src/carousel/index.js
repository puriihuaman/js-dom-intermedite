import { createTag } from '../helper/create-tag';
import { DIRECTION, TAG_CLASSES, images } from './carousel';

const DOC = window.document;
const ROOT_STYLES = DOC.documentElement.style;
const IMAGE_ARRAY_SIZE = images.length;

let CURRENT_IMAGE = 0;
let active = true;

const automaticCarouselTimer = () => {
	const counter = () => {
		if (active) {
			CURRENT_IMAGE++;

			if (CURRENT_IMAGE >= IMAGE_ARRAY_SIZE) CURRENT_IMAGE = 0;
		}

		const transform = CURRENT_IMAGE === 0 ? '0%' : `-${CURRENT_IMAGE}00%`;
		ROOT_STYLES.setProperty('--transform-carousel', transform);
	};

	const startInterval = () => setInterval(counter, 2000);

	startInterval();
};

const handlerImage = ({ direction = 'RIGHT' }) => {
	if (direction === DIRECTION.LEFT) {
		if (CURRENT_IMAGE === 0) {
			CURRENT_IMAGE = IMAGE_ARRAY_SIZE - 1;
		} else {
			--CURRENT_IMAGE;
		}
	} else if (direction === DIRECTION.RIGHT) {
		if (CURRENT_IMAGE < IMAGE_ARRAY_SIZE - 1) {
			++CURRENT_IMAGE;
		} else if (CURRENT_IMAGE === IMAGE_ARRAY_SIZE - 1) {
			CURRENT_IMAGE = 0;
		}
	}
	active = false;

	const transform = CURRENT_IMAGE === 0 ? '0%' : `-${CURRENT_IMAGE}00%`;
	ROOT_STYLES.setProperty('--transform-carousel', transform);
};

const btnPrevious = createTag({
	tag: 'button',
	id: 'btn-prev',
	textContent: '<',
	title: 'Anterior',
	class: [TAG_CLASSES.btn],
});
const btnNext = createTag({
	tag: 'button',
	textContent: '>',
	id: 'btn-next',
	title: 'Siguiente',
	class: [TAG_CLASSES.btn],
});
const navegation = createTag({
	tag: 'nav',
	child: [btnPrevious, btnNext],
	class: [TAG_CLASSES.navegation],
});

const fragment = DOC.createDocumentFragment();

ROOT_STYLES.setProperty('--width-image-carousel', `${100 / IMAGE_ARRAY_SIZE}%`);

images.forEach((image) => {
	const imageTag = createTag({
		tag: 'img',
		id: image.id,
		title: image.name,
		src: image.image,
		class: [TAG_CLASSES.image],
	});

	fragment.appendChild(imageTag);
});

const carouselImages = createTag({
	tag: 'div',
	child: [fragment],
	class: [TAG_CLASSES.images],
});

const imagesContainer = createTag({
	tag: 'div',
	child: [carouselImages],
	class: [TAG_CLASSES.imagesContainer],
});

const container = createTag({
	tag: 'div',
	child: [imagesContainer, navegation],
	class: [TAG_CLASSES.container],
});

const carousel = createTag({
	tag: 'section',
	child: [container],
	id: 'carousel',
	class: [TAG_CLASSES.carousel],
});

const carouselHandler = () => {
	ROOT_STYLES.setProperty('--width-carousel', `${IMAGE_ARRAY_SIZE * 100}%`);
	automaticCarouselTimer();

	imagesContainer.addEventListener('mouseover', () => {
		if (active) active = false;
	});

	imagesContainer.addEventListener('mouseout', () => {
		if (!active) active = true;
	});

	btnPrevious.addEventListener('click', () =>
		handlerImage({ direction: DIRECTION.LEFT })
	);

	btnNext.addEventListener('click', () =>
		handlerImage({ direction: DIRECTION.RIGHT })
	);
};

export { carousel, carouselHandler };
