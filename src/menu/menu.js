const menuList = [
	{ id: crypto.randomUUID(), name: 'Home', path: '/' },
	{ id: crypto.randomUUID(), name: 'Carrusel', path: '#carousel' },
	{ id: crypto.randomUUID(), name: 'Menu', path: '#menu' },
	{ id: crypto.randomUUID(), name: 'Modal', path: '#modal' },
	{ id: crypto.randomUUID(), name: 'Barra', path: '#progress' },
];

const TAG_CLASSES = {
	menu: 'menu',
	container: 'menu__container',
	title: 'menu__title',
	hamburger: 'menu__hamburger',
	nav: 'menu__nav',
	navVisible: 'menu__nav--visible',
	list: 'menu__list',
	item: 'menu__item',
	link: 'menu__link',
};

export { menuList, TAG_CLASSES };
