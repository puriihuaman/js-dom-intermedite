const createTag = ({ tag = 'div', id = '', classes = [] }) => {
	const DOC = window.document;
	const tagName = DOC.createElement(tag);
	id !== '' ?? (tagName.id = id);
	tagName.classList.add(...classes);

	return tagName;
};

const TAG_CLASSES = {
	progress: 'progress',
	container: 'progress__container',
	title: 'progress__title',
	content: 'progress__content',
	bar: 'progress__bar',
	fill: 'progress__fill',
	buttons: 'progress__buttons',
	btn: 'progress__button',
	btnPlay: 'progress__button--play',
	btnPause: 'progress__button--pause',
	btnDisabled: 'progress__button--disabled',
};

export { createTag, TAG_CLASSES };
