const images = [
	{
		id: crypto.randomUUID(),
		name: 'JavaScript',
		image:
			'https://images.pexels.com/photos/16592498/pexels-photo-16592498/free-photo-of-internet-conexion-tecnologia-negocio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id: crypto.randomUUID(),
		name: 'React',
		image:
			'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id: crypto.randomUUID(),
		name: 'Desktop',
		image:
			'https://images.pexels.com/photos/1714202/pexels-photo-1714202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id: crypto.randomUUID(),
		name: 'Python',
		image:
			'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
];

const DIRECTION = {
	RIGHT: 'RIGHT',
	LEFT: 'LEFT',
};

const TAG_CLASSES = {
	carousel: 'carousel',
	container: 'carousel__container',
	imagesContainer: 'carousel__images-container',
	images: 'carousel__images',
	image: 'carousel__image',
	navegation: 'carousel__navegation',
	btn: 'carousel__btn',
};

export { images, DIRECTION, TAG_CLASSES };
