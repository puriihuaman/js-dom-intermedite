// imágenes, texto o tarjetas
const TYPE_CONTENT = {
	IMAGE: 'IMAGE',
	TEXT: 'TEXT',
	CARD: 'CARD',
};

const sliderContentList = [
	{
		id: crypto.randomUUID(),
		typeContent: TYPE_CONTENT.IMAGE,
		image: {
			src: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			alt: 'React',
		},
		textContent: '',
	},
	{
		id: crypto.randomUUID(),
		typeContent: TYPE_CONTENT.TEXT,
		textContent: 'JavaScript - DOM',
	},
	{
		id: crypto.randomUUID(),
		typeContent: TYPE_CONTENT.IMAGE,
		image: {
			src: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			alt: 'Python',
		},
		textContent: '',
	},
	{
		id: crypto.randomUUID(),
		typeContent: TYPE_CONTENT.TEXT,
		textContent: 'Python - FastApi',
	},
];

const TAG_CLASSES = {
	slider: 'slider',
	container: 'slider__container',
	title: 'slider__title',
	containerContent: 'slider__container-content',
	cardsContainer: 'slider__cards-container',
	card: 'slider__card',
	cardContent: 'slider__card-content',
	image: 'slider__image',
	navegation: 'slider__nav',
	btn: 'slider__btn',
	btnPrev: 'slider__btn--prev',
	btnNext: 'slider__btn--next',
};

export { sliderContentList, TYPE_CONTENT, TAG_CLASSES };
