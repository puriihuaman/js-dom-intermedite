import { createTag } from '../helper/create-tag';
import { DIRECTION, TAG_CLASSES, images } from './carousel';

let CURRENT_IMAGE = 0;
const IMAGE_ARRAY_SIZE = images.length - 1;

const imagePreview = ({ imageTag }) => {
	imageTag.id = images[CURRENT_IMAGE].id;
	imageTag.title = images[CURRENT_IMAGE].name;
	imageTag.src = images[CURRENT_IMAGE].image;
};

const automaticCarouselTimer = ({
	imageTag,
	time = 2000,
	restartCarousel = false,
}) => {
	let timerCarousel;

	const startInterval = () => {
		timerCarousel = setInterval(() => {
			if (CURRENT_IMAGE < IMAGE_ARRAY_SIZE) {
				++CURRENT_IMAGE;
			} else if (CURRENT_IMAGE === IMAGE_ARRAY_SIZE) {
				CURRENT_IMAGE = 0;
			}

			imagePreview({ imageTag });
		}, time);
	};

	startInterval();

	const restartInterval = () => clearInterval(timerCarousel);

	if (restartCarousel) {
		restartInterval();
	}
};

const handlerImage = ({ direction = 'RIGHT', imageTag }) => {
	if (direction === DIRECTION.LEFT) {
		if (CURRENT_IMAGE === 0) {
			CURRENT_IMAGE = IMAGE_ARRAY_SIZE;
		} else {
			--CURRENT_IMAGE;
		}
	} else if (direction === DIRECTION.RIGHT) {
		if (CURRENT_IMAGE < IMAGE_ARRAY_SIZE) {
			++CURRENT_IMAGE;
		} else if (CURRENT_IMAGE === IMAGE_ARRAY_SIZE) {
			CURRENT_IMAGE = 0;
		}
	}

	imagePreview({ imageTag });
};

const showCarousel = () => {
	const carousel = createTag({
		tag: 'section',
		id: 'carousel',
		classes: [TAG_CLASSES.carousel],
	});

	const container = createTag({ tag: 'div', classes: [TAG_CLASSES.container] });

	const imagesContainer = createTag({
		tag: 'div',
		classes: [TAG_CLASSES.images],
	});

	const navegation = createTag({
		tag: 'nav',
		classes: [TAG_CLASSES.navegation],
	});

	const btnPrevious = createTag({
		tag: 'button',
		id: 'btn-prev',
		textContent: '<',
		title: 'Anterior',
		classes: [TAG_CLASSES.btn, 'prev'],
	});
	const btnNext = createTag({
		tag: 'button',
		id: 'btn-next',
		textContent: '>',
		title: 'Siguiente',
		classes: [TAG_CLASSES.btn, 'next'],
	});

	navegation.append(btnPrevious, btnNext);

	const imageTag = createTag({ tag: 'img', classes: [TAG_CLASSES.image] });

	automaticCarouselTimer({ imageTag, time: 3000 });

	btnPrevious.addEventListener('click', () =>
		handlerImage({ direction: DIRECTION.LEFT, imageTag })
	);

	btnNext.addEventListener('click', () =>
		handlerImage({ direction: DIRECTION.RIGHT, imageTag })
	);

	imagePreview({ imageTag });

	imagesContainer.appendChild(imageTag);
	container.append(imagesContainer, navegation);

	carousel.appendChild(container);

	return carousel;
};

export { showCarousel };
