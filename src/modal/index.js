import { DATA_ATTRIBUTE_NAME, MESSAGE, TAG_CLASSES } from './modal';

const DOC = window.document;

const sectionTitle = ({ title }) => {
	const titleTag = DOC.createElement('h2');

	titleTag.textContent = title;
	titleTag.classList.add(TAG_CLASSES.modalTitle);

	return { titleTag };
};

const createModal = () => {
	const dialogTag = DOC.createElement('dialog');
	const containerDialogTag = DOC.createElement('article');

	const titleTag = DOC.createElement('h3');
	const subTitle = DOC.createElement('p');
	const paragraphTag = DOC.createElement('p');
	const btnCloseTag = DOC.createElement('button');

	titleTag.textContent = MESSAGE.title;
	subTitle.textContent = MESSAGE.subTitle;
	paragraphTag.textContent = MESSAGE.phrase;

	btnCloseTag.textContent = 'Cerrar';
	btnCloseTag.id = DATA_ATTRIBUTE_NAME.btnClose;
	btnCloseTag.dataset.btnClose = DATA_ATTRIBUTE_NAME.btnClose;
	btnCloseTag.classList.add(
		TAG_CLASSES.modalBotton,
		TAG_CLASSES.modalBottonClose
	);

	containerDialogTag.classList.add(TAG_CLASSES.modalContent);
	dialogTag.id = DATA_ATTRIBUTE_NAME.dialog;
	dialogTag.dataset.dialog = DATA_ATTRIBUTE_NAME.dialog;
	dialogTag.classList.add(TAG_CLASSES.modalDialog);

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
	const modalSectionTag = DOC.createElement('section');
	const containerTag = DOC.createElement('div');
	const btnOpenTag = DOC.createElement('button');

	const { titleTag } = sectionTitle({ title: 'Modal' });

	btnOpenTag.textContent = 'Abrir modal';
	btnOpenTag.classList.add(
		TAG_CLASSES.modalBotton,
		TAG_CLASSES.modalBottonOpen
	);

	const { dialogTag } = createModal();

	btnOpenTag.addEventListener('click', () => {
		dialogTag.classList.add(TAG_CLASSES.modalDialogOpen);

		dialogTag.showModal();
	});

	containerTag.append(titleTag, btnOpenTag, dialogTag);
	containerTag.classList.add(TAG_CLASSES.modalContainer);

	modalSectionTag.id = 'modal';
	modalSectionTag.classList.add(TAG_CLASSES.modal);
	modalSectionTag.appendChild(containerTag);

	return modalSectionTag;
};

export { showModal };
