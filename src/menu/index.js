import { createTag } from '../helper/create-tag';
import { TAG_CLASSES, menuList } from './menu';

const DOC = window.document;

const navegation = ({ navTag }) => {
	const fragment = DOC.createDocumentFragment();

	menuList.forEach((menu) => {
		const menuLinkTag = createTag({
			tag: 'a',
			textContent: menu.name,
			href: menu.path,
			id: menu.id,
			class: [TAG_CLASSES.link],
		});

		const menuItemTag = createTag({
			tag: 'li',
			child: [menuLinkTag],
			class: [TAG_CLASSES.item],
		});

		fragment.appendChild(menuItemTag);
	});

	const menuListTag = createTag({
		tag: 'ul',
		child: [fragment],
		class: [TAG_CLASSES.list],
	});

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
	const titleTag = createTag({
		tag: 'h2',
		textContent: 'Menú Desplegable',
		class: [TAG_CLASSES.title],
	});

	const hamburgerMenuTag = createTag({
		tag: 'button',
		textContent: 'Menú',
		class: [TAG_CLASSES.hamburger],
	});

	const navTag = createTag({ tag: 'nav', class: [TAG_CLASSES.nav] });

	navegation({ navTag });
	handleToggleMenu({ hamburgerMenuTag, navTag });

	const containerTag = createTag({
		tag: 'div',
		child: [titleTag, hamburgerMenuTag, navTag],
		class: [TAG_CLASSES.container],
	});

	const menuSectionTag = createTag({
		tag: 'section',
		child: [containerTag],
		id: 'menu',
		class: [TAG_CLASSES.menu],
	});

	return menuSectionTag;
};

export { showMenu };
