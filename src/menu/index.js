import { createTag } from '../helper/create-tag';
import { TAG_CLASSES, menuList } from './menu';

const DOC = window.document;

const navegation = ({ navTag }) => {
	const menuListTag = createTag({ tag: 'ul', classes: [TAG_CLASSES.list] });

	const fragment = DOC.createDocumentFragment();

	menuList.forEach((menu) => {
		const menuItemTag = createTag({ tag: 'li', classes: [TAG_CLASSES.item] });

		const menuLinkTag = createTag({
			tag: 'a',
			id: menu.id,
			href: menu.path,
			classes: [TAG_CLASSES.link],
			textContent: menu.name,
		});
		// menuLinkTag.href = menu.path;

		menuItemTag.appendChild(menuLinkTag);

		fragment.appendChild(menuItemTag);
	});

	menuListTag.appendChild(fragment);
	navTag.appendChild(menuListTag);

	return navTag;
};

const handleToggleMenu = ({ hamburgerMenuTag, navTag }) => {
	hamburgerMenuTag.addEventListener('click', () => {
		navTag.classList.contains(TAG_CLASSES.navVisible)
			? navTag.classList.remove(TAG_CLASSES.navVisible)
			: navTag.classList.add(TAG_CLASSES.navVisible);
	});
};

const showMenu = () => {
	const menuSectionTag = createTag({
		tag: 'section',
		id: 'menu',
		classes: [TAG_CLASSES.menu],
	});

	const containerTag = createTag({
		tag: 'div',
		classes: [TAG_CLASSES.container],
	});

	const titleTag = createTag({
		tag: 'h2',
		classes: [TAG_CLASSES.title],
		textContent: 'Menú Desplegable',
	});

	const hamburgerMenuTag = createTag({
		tag: 'button',
		classes: [TAG_CLASSES.hamburger],
		textContent: 'Menú',
	});

	const navTag = createTag({ tag: 'nav', classes: [TAG_CLASSES.nav] });

	navegation({ navTag });
	handleToggleMenu({ hamburgerMenuTag, navTag });

	containerTag.append(titleTag, hamburgerMenuTag, navTag);

	menuSectionTag.appendChild(containerTag);

	return menuSectionTag;
};

export { showMenu };
