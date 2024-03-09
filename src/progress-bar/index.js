import { createTag } from '../helper/create-tag';
import { TAG_CLASSES } from './progress-bar';

const ROOT_STYLES = document.documentElement.style;

const VALUES = {
	count: 0,
	play: false,
	pause: true,
	max: 100,
};

let COUNTER = 0;

const handlePlay = ({ updateProgressBar, btnPause, barTag }) => {
	VALUES.play = true;
	VALUES.pause = false;
	btnPause.disabled = false;
	btnPause.classList.remove(TAG_CLASSES.btnDisabled);

	if (VALUES.count === VALUES.max) {
		COUNTER = 0;
		VALUES.count = 0;
		ROOT_STYLES.setProperty('--transform-bar', `${VALUES.count}%`);
		barTag.title = String(VALUES.count + '%');
		setTimeout(() => updateProgressBar(), 500);
	} else {
		updateProgressBar();
	}
};

const handlePause = ({ updateProgressBar, btnPlay }) => {
	if (!VALUES.pause) {
		VALUES.play = false;
		VALUES.pause = true;

		btnPlay.disabled = true;
		btnPlay.classList.add(TAG_CLASSES.btnDisabled);
	} else {
		VALUES.play = true;
		VALUES.pause = false;
		updateProgressBar();
	}
};

const handleMoveProgressBar = ({
	ev,
	barTag,
	fillBar,
	updateProgressBar,
}) => {};

const createProgressBar = () => {
	const fillBar = createTag({
		tag: 'div',
		id: 'fill-bar',
		class: [TAG_CLASSES.fill],
	});

	const btnPlay = createTag({
		tag: 'button',
		textContent: '▶️',
		class: [TAG_CLASSES.btn, TAG_CLASSES.btnPlay],
	});

	const btnPause = createTag({
		tag: 'button',
		textContent: '⏸️',
		disabled: true,
		class: [TAG_CLASSES.btn, TAG_CLASSES.btnPause, TAG_CLASSES.btnDisabled],
	});

	const barTag = createTag({
		tag: 'div',
		child: [fillBar],
		class: [TAG_CLASSES.bar],
		title: String(VALUES.count + '%'),
	});

	const updateProgressBar = () => {
		if (VALUES.play && !VALUES.pause && COUNTER <= VALUES.max) {
			VALUES.count = COUNTER;
			ROOT_STYLES.setProperty('--transform-bar', `${VALUES.count}%`);

			barTag.title = VALUES.count + '%';

			requestAnimationFrame(updateProgressBar);
			++COUNTER;
		}

		if (VALUES.count === VALUES.max) {
			btnPlay.disabled = false;
			btnPlay.classList.remove(TAG_CLASSES.btnDisabled);

			btnPause.disabled = true;
			btnPause.classList.add(TAG_CLASSES.btnDisabled);
		}
	};

	// + play
	btnPlay.addEventListener('click', () =>
		handlePlay({ updateProgressBar, btnPause, barTag })
	);

	// + pause
	btnPause.addEventListener('click', () =>
		handlePause({ updateProgressBar, btnPlay })
	);

	// + move
	barTag.addEventListener('mousedown', (ev) =>
		handleMoveProgressBar({ ev, barTag, fillBar, updateProgressBar })
	);

	const buttonsTag = createTag({
		tag: 'div',
		child: [btnPlay, btnPause],
		class: [TAG_CLASSES.buttons],
	});

	const progressBar = createTag({
		tag: 'div',
		child: [barTag, buttonsTag],
		class: [TAG_CLASSES.content],
	});

	return { progressBar };
};

const showProgressBar = () => {
	const titleTag = createTag({
		tag: 'h2',
		textContent: 'Barra de progreso',
		class: [TAG_CLASSES.title],
	});
	const { progressBar } = createProgressBar();

	const containerTag = createTag({
		tag: 'div',
		child: [titleTag, progressBar],
		class: [TAG_CLASSES.container],
	});

	const progressBarSectionTag = createTag({
		tag: 'section',
		child: [containerTag],
		id: 'progress',
		class: [TAG_CLASSES.progress],
	});

	return progressBarSectionTag;
};

export { showProgressBar };
