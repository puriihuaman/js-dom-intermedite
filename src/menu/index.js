import { menuList } from './menu';

const DOC = window.document;

const navegation = ({ navTag }) => {
	const menuListTag = DOC.createElement('ul');

	navTag.classList.add('menu__nav');
	menuListTag.classList.add('menu__list');

	const fragment = DOC.createDocumentFragment();

	menuList.forEach((menu) => {
		const menuItemTag = DOC.createElement('li');
		const menuLinkTag = DOC.createElement('a');

		menuItemTag.classList.add('menu__item');
		menuLinkTag.classList.add('menu__link');

		menuLinkTag.id = menu.id;
		menuLinkTag.href = menu.path;
		menuLinkTag.textContent = menu.name;

		menuItemTag.appendChild(menuLinkTag);

		fragment.appendChild(menuItemTag);
	});

	menuListTag.appendChild(fragment);
	navTag.appendChild(menuListTag);

	return navTag;
};

const handleToggleMenu = ({ hamburgerMenuTag, navTag }) => {
	hamburgerMenuTag.addEventListener('click', () => {
		navTag.classList.contains('menu__nav--visible')
			? navTag.classList.remove('menu__nav--visible')
			: navTag.classList.add('menu__nav--visible');
	});
};

const showMenu = () => {
	// Crea una lista de elementos de menú y un botón para abrir / cerrar el menú.

	const menuSectionTag = DOC.createElement('section');
	const containerTag = DOC.createElement('div');
	const titleTag = DOC.createElement('h2');
	const hamburgerMenuTag = DOC.createElement('button');
	const navTag = DOC.createElement('nav');

	hamburgerMenuTag.textContent = 'Menu';

	menuSectionTag.id = '#menu';

	menuSectionTag.classList.add('menu');
	containerTag.classList.add('menu__container');
	titleTag.classList.add('menu__title');
	hamburgerMenuTag.classList.add('menu__hamburger');

	navegation({ navTag });
	handleToggleMenu({ hamburgerMenuTag, navTag });

	titleTag.textContent = 'Menú Desplegable';
	containerTag.append(titleTag, hamburgerMenuTag, navTag);

	menuSectionTag.appendChild(containerTag);

	return menuSectionTag;
};

export { showMenu };
