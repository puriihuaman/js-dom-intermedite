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

const createTitle = () => {
	const titleTag = createTag({
		tag: 'h2',
		classes: [TAG_CLASSES.title],
		textContent: 'Barra de progreso',
	});

	return { titleTag };
};

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
		setTimeout(() => {
			updateProgressBar();
		}, 500);
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
	const progressBar = createTag({ tag: 'div', classes: [TAG_CLASSES.content] });
	const barTag = createTag({
		tag: 'div',
		classes: [TAG_CLASSES.bar],
		title: String(VALUES.count + '%'),
	});
	const fillBar = createTag({
		tag: 'div',
		id: 'fill-bar',
		classes: [TAG_CLASSES.fill],
	});

	const buttonsTag = createTag({ tag: 'div', classes: [TAG_CLASSES.buttons] });

	const btnPlay = createTag({
		tag: 'button',
		classes: [TAG_CLASSES.btn, TAG_CLASSES.btnPlay],
		textContent: '▶️',
	});

	const btnPause = createTag({
		tag: 'button',
		classes: [TAG_CLASSES.btn, TAG_CLASSES.btnPause, TAG_CLASSES.btnDisabled],
		textContent: '⏸️',
	});

	barTag.appendChild(fillBar);

	btnPause.disabled = true;

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

	buttonsTag.append(btnPlay, btnPause);
	progressBar.append(barTag, buttonsTag);

	return { progressBar };
};

const showProgressBar = () => {
	const progressBarSectionTag = createTag({
		tag: 'section',
		id: 'progress',
		classes: [TAG_CLASSES.progress],
	});
	const containerTag = createTag({
		tag: 'div',
		classes: [TAG_CLASSES.container],
	});

	const { titleTag } = createTitle();
	const { progressBar } = createProgressBar();

	containerTag.append(titleTag, progressBar);

	progressBarSectionTag.appendChild(containerTag);
	return progressBarSectionTag;
};

export { showProgressBar };
