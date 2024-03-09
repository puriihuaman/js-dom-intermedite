import { DATA_ATTRIBUTE_NAME, MESSAGE, TAG_CLASSES, createTag } from './modal';

const sectionTitle = ({ title }) => {
	const titleTag = createTag({
		tag: 'h2',
		classes: [TAG_CLASSES.modalTitle],
		textContent: title,
	});

	return { titleTag };
};

const createModal = () => {
	const dialogTag = createTag({
		tag: 'dialog',
		id: DATA_ATTRIBUTE_NAME.dialog,
		classes: [TAG_CLASSES.modalDialog],
		dataAttributeName: 'dialog',
		dataAttributeValue: DATA_ATTRIBUTE_NAME.dialog,
	});

	const containerDialogTag = createTag({
		tag: 'article',
		classes: [TAG_CLASSES.modalContent],
	});

	const titleTag = createTag({ tag: 'h3', textContent: MESSAGE.title });
	const subTitle = createTag({ tag: 'p', textContent: MESSAGE.subTitle });
	const paragraphTag = createTag({ tag: 'p', textContent: MESSAGE.phrase });

	const btnCloseTag = createTag({
		tag: 'button',
		id: DATA_ATTRIBUTE_NAME.btnClose,
		classes: [TAG_CLASSES.modalBotton, TAG_CLASSES.modalBottonClose],
		textContent: 'Cerrar',
		dataAttributeName: 'btnClose',
		dataAttributeValue: DATA_ATTRIBUTE_NAME.btnClose,
	});

	containerDialogTag.append(titleTag, subTitle, paragraphTag, btnCloseTag);
	dialogTag.appendChild(containerDialogTag);

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

const showModal = () => {
	const modalSectionTag = createTag({
		tag: 'section',
		id: TAG_CLASSES.modal,
		classes: [TAG_CLASSES.modal],
	});

	const containerTag = createTag({
		tag: 'div',
		classes: [TAG_CLASSES.modalContainer],
	});

	const btnOpenTag = createTag({
		tag: 'button',
		classes: [TAG_CLASSES.modalBotton, TAG_CLASSES.modalBottonOpen],
		textContent: 'Abrir modal',
	});

	const { titleTag } = sectionTitle({ title: 'Modal' });
	const { dialogTag } = createModal();

	btnOpenTag.addEventListener('click', () => {
		dialogTag.classList.add(TAG_CLASSES.modalDialogOpen);

		dialogTag.showModal();
	});

	containerTag.append(titleTag, btnOpenTag, dialogTag);

	modalSectionTag.appendChild(containerTag);

	return modalSectionTag;
};

export { showModal };
