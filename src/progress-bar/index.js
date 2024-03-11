import { createTag } from '../helper/create-tag';
import { TAG_CLASSES } from './progress-bar';

const ROOT_STYLES = document.documentElement.style;

const ACTION = {
	PLAY: 'PLAY',
	PAUSE: 'PAUSE',
};

const MAXIMUM_COUNTER = 100;
let PLAY = false;
let COUNTER = 0;

const updateProgressBar = () => {
	const barTag = document.querySelector('#bar');
	const btnPlay = document.querySelector('[data-btn-play]');
	const btnPause = document.querySelector('[data-btn-pause]');

	if (PLAY && COUNTER <= MAXIMUM_COUNTER) {
		++COUNTER;
		ROOT_STYLES.setProperty('--transform-bar', `${COUNTER}%`);

		barTag.title = COUNTER + '%';

		requestAnimationFrame(() => updateProgressBar());
	}

	if (COUNTER === MAXIMUM_COUNTER) {
		PLAY = false;

		btnPause.setAttribute('disabled', true);
		btnPause.classList.add(TAG_CLASSES.btnDisabled);
		btnPlay.removeAttribute('disabled');
		btnPlay.classList.remove(TAG_CLASSES.btnDisabled);
	}
};

const playAndPauseHandler = ({ action }) => {
	const barTag = document.querySelector('#bar');
	const btnPlay = document.querySelector('[data-btn-play]');
	const btnPause = document.querySelector('[data-btn-pause]');

	if (action === ACTION.PLAY) {
		PLAY = true;

		btnPause.removeAttribute('disabled');
		btnPause.classList.remove(TAG_CLASSES.btnDisabled);
		btnPlay.setAttribute('disabled', true);
		btnPlay.classList.add(TAG_CLASSES.btnDisabled);

		if (COUNTER === MAXIMUM_COUNTER) {
			COUNTER = 0;
			ROOT_STYLES.setProperty('--transform-bar', `${COUNTER}%`);
			barTag.title = String(COUNTER + '%');
			setTimeout(() => updateProgressBar(), 500);
		} else {
			updateProgressBar();
		}
	} else if (action === ACTION.PAUSE) {
		PLAY = false;
		console.log('pause');
		btnPause.setAttribute('disabled', true);
		btnPause.classList.add(TAG_CLASSES.btnDisabled);
		btnPlay.removeAttribute('disabled');
		btnPlay.classList.remove(TAG_CLASSES.btnDisabled);
	}
};

const fillBar = createTag({
	tag: 'div',
	id: 'fill-bar',
	class: [TAG_CLASSES.fill],
});
const btnPlay = createTag({
	tag: 'button',
	textContent: '▶️',
	class: [TAG_CLASSES.btn, TAG_CLASSES.btnPlay],
	'data-btn-play': 'btn-play',
});
const btnPause = createTag({
	tag: 'button',
	textContent: '⏸️',
	disabled: true,
	class: [TAG_CLASSES.btn, TAG_CLASSES.btnPause, TAG_CLASSES.btnDisabled],
	'data-btn-pause': 'btn-pause',
});
const barTag = createTag({
	tag: 'div',
	child: [fillBar],
	class: [TAG_CLASSES.bar],
	title: String(COUNTER + '%'),
	id: 'bar',
});

const navegationButtons = createTag({
	tag: 'div',
	child: [btnPlay, btnPause],
	class: [TAG_CLASSES.buttons],
});

const progressBar = createTag({
	tag: 'div',
	child: [barTag, navegationButtons],
	class: [TAG_CLASSES.content],
});

const titleTag = createTag({
	tag: 'h2',
	textContent: 'Barra de progreso',
	class: [TAG_CLASSES.title],
});

const container = createTag({
	tag: 'div',
	child: [titleTag, progressBar],
	class: [TAG_CLASSES.container],
});

const progressBarSection = createTag({
	tag: 'section',
	child: [container],
	id: 'progress',
	class: [TAG_CLASSES.progress],
});

const showProgressBar = () => {
	// + play
	btnPlay.addEventListener('click', () =>
		playAndPauseHandler({ action: ACTION.PLAY })
	);

	// + pause
	btnPause.addEventListener('click', () =>
		playAndPauseHandler({ action: ACTION.PAUSE })
	);
};

export { progressBarSection, showProgressBar };
