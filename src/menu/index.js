import { createTag } from '../helper/create-tag';
import { TAG_CLASSES, menuList } from './menu';

const DOC = window.document;

const titleTag = createTag({
	tag: 'h2',
	textContent: 'Menú Desplegable',
	class: [TAG_CLASSES.title],
});

const hamburgerMenuTag = createTag({
	tag: 'button',
	textContent: 'Menú',
	id: 'menu-hamburger',
	class: [TAG_CLASSES.hamburger],
});

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

const navTag = createTag({
	tag: 'nav',
	child: [menuListTag],
	id: 'nav',
	class: [TAG_CLASSES.nav],
});

const containerTag = createTag({
	tag: 'div',
	child: [titleTag, hamburgerMenuTag, navTag],
	class: [TAG_CLASSES.container],
});

const menuSection = createTag({
	tag: 'section',
	child: [containerTag],
	id: 'menu',
	class: [TAG_CLASSES.menu],
});

const menuHandler = () => {
	const menuHamburger = DOC.getElementById('menu-hamburger');
	const navegation = DOC.getElementById('nav');

	menuHamburger.addEventListener('click', () => {
		navegation.classList.contains(TAG_CLASSES.navVisible)
			? navegation.classList.remove(TAG_CLASSES.navVisible)
			: navegation.classList.add(TAG_CLASSES.navVisible);
	});
};

export { menuSection, menuHandler };
