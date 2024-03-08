const images = [
	{
		id: crypto.randomUUID(),
		name: 'JavaScript',
		image:
			'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: crypto.randomUUID(),
		name: 'React',
		image:
			'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: crypto.randomUUID(),
		name: 'Desktop',
		image:
			'https://images.unsplash.com/photo-1669023414162-8b0573b9c6b2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: crypto.randomUUID(),
		name: 'Python',
		image:
			'https://images.unsplash.com/photo-1667372531881-6f975b1c86db?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
];

const DIRECTION = {
	RIGHT: 'RIGHT',
	LEFT: 'LEFT',
};

export { images, DIRECTION };
