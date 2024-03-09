const createTag = ({
	tag = 'div',
	id = '',
	classes = [],
	textContent = '',
	dataAttributeName = '',
	dataAttributeValue = '',
}) => {
	const DOC = window.document;
	const tagName = DOC.createElement(tag);
	id !== '' && (tagName.id = id);
	textContent !== '' && (tagName.textContent = textContent);

	dataAttributeName !== '' &&
		(tagName.dataset[dataAttributeName] = dataAttributeValue);
	tagName.classList.add(...classes);

	return tagName;
};

const MESSAGE = {
	title: '¡Hola programador/a!',
	subTitle: '¿Cómo estás hoy? Espero que bién 🌟',
	phrase: '"Cada línea de código es un paso más hacia tus metas." 🚀',
};

const DATA_ATTRIBUTE_NAME = {
	btnClose: 'btn-close',
	dialog: 'dialog-tag',
};

const TAG_CLASSES = {
	modal: 'modal',
	modalDialog: 'modal__dialog',
	modalTitle: 'modal__title',
	modalBotton: 'modal__button',
	modalBottonOpen: 'modal__button--open',
	modalBottonClose: 'modal__button--close',
	modalContent: 'modal__content',
	modalDialogOpen: 'modal__dialog--open',
	modalContainer: 'modal__container',
};

export { createTag, MESSAGE, DATA_ATTRIBUTE_NAME, TAG_CLASSES };
