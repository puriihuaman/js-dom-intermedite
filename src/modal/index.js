import { createTag } from '../helper/create-tag';
import { DATA_ATTRIBUTE_NAME, MESSAGE, TAG_CLASSES } from './modal';

const DOC = window.document;
const ROOT_STYLES = DOC.documentElement.style;
const VARIABLE_SCROLL_TYPE = '--scroll-type';

const titleSection = createTag({
	tag: 'h2',
	textContent: MESSAGE.title,
	class: [TAG_CLASSES.modalTitle],
});

const btnOpenTag = createTag({
	tag: 'button',
	textContent: 'Abrir modal',
	class: [TAG_CLASSES.modalBotton, TAG_CLASSES.modalBottonOpen],
});

const modalTitle = createTag({ tag: 'h3', textContent: MESSAGE.title });
const modalSubTitle = createTag({ tag: 'p', textContent: MESSAGE.subTitle });
const modalParagraph = createTag({ tag: 'p', textContent: MESSAGE.phrase });

const btnClose = createTag({
	tag: 'button',
	textContent: 'Cerrar',
	id: DATA_ATTRIBUTE_NAME.BTN_CLOSE,
	class: [TAG_CLASSES.modalBotton, TAG_CLASSES.modalBottonClose],
	'data-btn-close': DATA_ATTRIBUTE_NAME.BTN_CLOSE,
});
const containerWindow = createTag({
	tag: 'article',
	child: [modalTitle, modalSubTitle, modalParagraph, btnClose],
	class: [TAG_CLASSES.modalContent],
});

const modalWindow = createTag({
	tag: 'div',
	child: [containerWindow],
	id: DATA_ATTRIBUTE_NAME.DIALOG,
	class: [TAG_CLASSES.modalDialog],
	'data-dialog': DATA_ATTRIBUTE_NAME.DIALOG,
});

const modalContainer = createTag({
	tag: 'div',
	child: [titleSection, btnOpenTag, modalWindow],
	class: [TAG_CLASSES.modalContainer],
});

const modal = createTag({
	tag: 'section',
	child: [modalContainer],
	id: TAG_CLASSES.modal,
	class: [TAG_CLASSES.modal],
});

const modalHandler = () => {
	btnOpenTag.addEventListener('click', () => {
		ROOT_STYLES.setProperty(VARIABLE_SCROLL_TYPE, 'hidden');

		modalWindow.classList.add(TAG_CLASSES.modalDialogOpen);
	});

	modalWindow.addEventListener('click', (ev) => {
		const { target } = ev;

		if (
			target.dataset.dialog === DATA_ATTRIBUTE_NAME.DIALOG ||
			target.dataset.btnClose === DATA_ATTRIBUTE_NAME.BTN_CLOSE
		) {
			modalWindow.classList.remove(TAG_CLASSES.modalDialogOpen);
			ROOT_STYLES.setProperty(VARIABLE_SCROLL_TYPE, 'auto');
		}
	});
};

export { modal, modalHandler };
