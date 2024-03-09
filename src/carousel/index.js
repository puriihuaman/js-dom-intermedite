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

	const imageTag = createTag({ tag: 'img', class: [TAG_CLASSES.image] });

	automaticCarouselTimer({ imageTag, time: 3000 });

	btnPrevious.addEventListener('click', () =>
		handlerImage({ direction: DIRECTION.LEFT, imageTag })
	);

	btnNext.addEventListener('click', () =>
		handlerImage({ direction: DIRECTION.RIGHT, imageTag })
	);

	imagePreview({ imageTag });

	const navegation = createTag({
		tag: 'nav',
		child: [btnPrevious, btnNext],
		class: [TAG_CLASSES.navegation],
	});

	const imagesContainer = createTag({
		tag: 'div',
		child: [imageTag],
		class: [TAG_CLASSES.images],
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

	return carousel;
};

export { showCarousel };
