import { createTag } from '../helper/create-tag';
import { TAG_CLASSES, TYPE_CONTENT, sliderContentList } from './slider';

const DOC = window.document;
const ROOT_STYLES = DOC.documentElement.style;
let SLIDE_COUNTER = 0;
let isInTransition = false;

const DIRECTION = {
	RIGHT: 'RIGHT',
	LEFT: 'LEFT',
};

const VARIABLE_TRANSFORM_SLIDER = '--transform-slider';
const VARIABLE_TRANSITION_SLIDER = '--transition-slider';

const getTransformValue = () =>
	Number(
		ROOT_STYLES.getPropertyValue(VARIABLE_TRANSFORM_SLIDER).replace('px', '')
	);

const reorderSlider = () => {
	ROOT_STYLES.setProperty(VARIABLE_TRANSITION_SLIDER, 'none');
	const transformValue = getTransformValue();

	const slider = DOC.querySelector(`.${TAG_CLASSES.cardsContainer}`);
	const sliderElements = DOC.querySelectorAll(`.${TAG_CLASSES.card}`);

	const sizeCurrentElement = sliderElements[SLIDE_COUNTER].scrollWidth;

	if (SLIDE_COUNTER === sliderElements.length - 1) {
		slider.appendChild(slider.firstElementChild);
		ROOT_STYLES.setProperty(
			VARIABLE_TRANSFORM_SLIDER,
			`${transformValue + sizeCurrentElement}px`
		);

		SLIDE_COUNTER--;
	} else if (SLIDE_COUNTER === 0) {
		slider.prepend(slider.lastElementChild);
		ROOT_STYLES.setProperty(
			VARIABLE_TRANSFORM_SLIDER,
			`${transformValue - sizeCurrentElement}px`
		);

		SLIDE_COUNTER++;
	}

	isInTransition = false;
};

const moveSlide = ({ direction }) => {
	if (isInTransition) return;
	ROOT_STYLES.setProperty(
		VARIABLE_TRANSITION_SLIDER,
		'var(--transition-property), var(--transition-timing-function), 500ms'
	);
	const transformValue = getTransformValue();

	const sliderElements = DOC.querySelectorAll(`.${TAG_CLASSES.card}`);
	const sizeCurrentElement = sliderElements[SLIDE_COUNTER].scrollWidth;

	isInTransition = true;
	if (direction === DIRECTION.LEFT) {
		ROOT_STYLES.setProperty(
			VARIABLE_TRANSFORM_SLIDER,
			`${transformValue + sizeCurrentElement}px`
		);
		SLIDE_COUNTER--;
	} else if (direction === DIRECTION.RIGHT) {
		ROOT_STYLES.setProperty(
			VARIABLE_TRANSFORM_SLIDER,
			`${transformValue - sizeCurrentElement}px`
		);

		SLIDE_COUNTER++;
	}
};

const fragment = document.createDocumentFragment();

sliderContentList.forEach((element) => {
	let content;

	if (element.typeContent === TYPE_CONTENT.IMAGE) {
		content = createTag({
			tag: 'img',
			src: element?.image?.src,
			alt: element?.image?.alt,
			class: [TAG_CLASSES.image],
		});
	} else if (element.typeContent === TYPE_CONTENT.TEXT) {
		content = createTag({ tag: 'p', textContent: element.textContent });
	}

	const cardContent = createTag({
		tag: 'div',
		child: [content],
		class: [TAG_CLASSES.cardContent],
	});

	// + card
	const card = createTag({
		tag: 'article',
		child: [cardContent],
		class: [TAG_CLASSES.card],
	});

	fragment.append(card);
});

const slider = createTag({
	tag: 'div',
	child: [fragment],
	class: [TAG_CLASSES.cardsContainer],
});

const sliderContainer = createTag({
	tag: 'div',
	child: [slider],
	id: 'slider-container',
	class: [TAG_CLASSES.containerContent],
});

const btnPrev = createTag({
	tag: 'button',
	textContent: '<',
	class: [TAG_CLASSES.btn, TAG_CLASSES.btnPrev],
});
const btnNext = createTag({
	tag: 'button',
	textContent: '>',
	class: [TAG_CLASSES.btn, TAG_CLASSES.btnNext],
});
const navegation = createTag({
	tag: 'nav',
	child: [btnPrev, btnNext],
	class: [TAG_CLASSES.navegation],
});

const titleTag = createTag({
	tag: 'h2',
	textContent: 'Slider de contenido',
	class: [TAG_CLASSES.title],
});

const container = createTag({
	tag: 'div',
	child: [titleTag, sliderContainer, navegation],
	class: [TAG_CLASSES.container],
});

const sliderSection = createTag({
	tag: 'section',
	child: [container],
	id: 'slider',
	class: [TAG_CLASSES.slider],
});

const showTemplateSlider = () => {
	btnPrev.addEventListener('click', () =>
		moveSlide({ direction: DIRECTION.LEFT })
	);

	btnNext.addEventListener('click', () =>
		moveSlide({
			direction: DIRECTION.RIGHT,
		})
	);

	slider.addEventListener('transitionend', reorderSlider);

	reorderSlider();
};

export { sliderSection, showTemplateSlider };
