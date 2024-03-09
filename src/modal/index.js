import { createTag } from '../helper/create-tag';
import { DATA_ATTRIBUTE_NAME, MESSAGE, TAG_CLASSES } from './modal';

const sectionTitle = ({ title }) => {
	const titleTag = createTag({
		tag: 'h2',
		textContent: title,
		class: [TAG_CLASSES.modalTitle],
	});

	return { titleTag };
};

const createModal = () => {
	const titleTag = createTag({ tag: 'h3', textContent: MESSAGE.title });
	const subTitle = createTag({ tag: 'p', textContent: MESSAGE.subTitle });
	const paragraphTag = createTag({ tag: 'p', textContent: MESSAGE.phrase });

	const btnCloseTag = createTag({
		tag: 'button',
		textContent: 'Cerrar',
		id: DATA_ATTRIBUTE_NAME.btnClose,
		class: [TAG_CLASSES.modalBotton, TAG_CLASSES.modalBottonClose],
		'data-btn-close': DATA_ATTRIBUTE_NAME.btnClose,
	});

	const containerDialogTag = createTag({
		tag: 'article',
		child: [titleTag, subTitle, paragraphTag, btnCloseTag],
		class: [TAG_CLASSES.modalContent],
	});

	const dialogTag = createTag({
		tag: 'dialog',
		child: [containerDialogTag],
		id: DATA_ATTRIBUTE_NAME.dialog,
		class: [TAG_CLASSES.modalDialog],
		'data-ialog': DATA_ATTRIBUTE_NAME.dialog,
	});

	dialogTag.addEventListener('click', (ev) => {
		if (
			ev.target.tagName === 'dialog'.toUpperCase() ||
			ev.target.dataset.dialog === DATA_ATTRIBUTE_NAME.dialog ||
			ev.target.dataset.btnClose === DATA_ATTRIBUTE_NAME.btnClose
		) {
			dialogTag.classList.remove(TAG_CLASSES.modalDialogOpen);
			dialogTag.close();
		}
		return;
	});

	return { dialogTag };
};

const handleOpenModal = ({ dialogTag }) => {
	dialogTag.classList.add(TAG_CLASSES.modalDialogOpen);

	dialogTag.showModal();
};

const showModal = () => {
	const btnOpenTag = createTag({
		tag: 'button',
		textContent: 'Abrir modal',
		class: [TAG_CLASSES.modalBotton, TAG_CLASSES.modalBottonOpen],
	});

	const { titleTag } = sectionTitle({ title: 'Modal' });
	const { dialogTag } = createModal();

	btnOpenTag.addEventListener('click', () => handleOpenModal({ dialogTag }));

	const containerTag = createTag({
		tag: 'div',
		child: [titleTag, btnOpenTag, dialogTag],
		class: [TAG_CLASSES.modalContainer],
	});

	const modalSectionTag = createTag({
		tag: 'section',
		child: [containerTag],
		id: TAG_CLASSES.modal,
		class: [TAG_CLASSES.modal],
	});

	return modalSectionTag;
};

export { showModal };
