import { DIRECTION, images } from './carousel';

let CURRENT_IMAGE = 0;
const IMAGE_ARRAY_SIZE = images.length - 1;

const imagePreview = ({ imageTag }) => {
	imageTag.className = 'carousel__image';
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

const handlerImage = ({ direction, button, imageTag }) => {
	button.textContent = direction === DIRECTION.RIGHT ? '>' : '<';
	button.id = direction === DIRECTION.RIGHT ? 'btn-next' : 'btn-prev';
	button.title = direction === DIRECTION.RIGHT ? 'Siguiente' : 'Anterior';
	button.className = 'carousel__btn carousel__btn--previous';

	return button.addEventListener('click', () => {
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
	});
};

const showCarousel = () => {
	const carousel = document.createElement('section');

	const container = document.createElement('div');
	const imagesContainer = document.createElement('div');
	const navegation = document.createElement('nav');
	const btnPrevious = document.createElement('button');
	const btnNext = document.createElement('button');
	const imageTag = document.createElement('img');

	imagePreview({ imageTag });

	imagesContainer.className = 'carousel__images';

	navegation.append(btnPrevious, btnNext);
	navegation.className = 'carousel__navegation';

	automaticCarouselTimer({ imageTag, time: 3000 });

	handlerImage({
		direction: DIRECTION.LEFT,
		button: btnPrevious,
		imageTag,
	});
	handlerImage({
		direction: DIRECTION.RIGHT,
		button: btnNext,
		imageTag,
	});

	imagesContainer.appendChild(imageTag);
	container.append(imagesContainer, navegation);
	container.className = 'carousel__container';
	carousel.appendChild(container);
	carousel.className = 'carousel';

	return carousel;
};

export { showCarousel };
