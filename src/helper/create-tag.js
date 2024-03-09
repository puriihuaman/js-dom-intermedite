export const createTag = ({
	tag = 'div',
	id = '',
	href = '',
	src = '',
	classes = [],
	textContent = '',
	title = '',
	dataAttributeName = '',
	dataAttributeValue = '',
}) => {
	const DOC = window.document;

	const tagName = DOC.createElement(tag);
	href !== '' && (tagName.href = href);
	id !== '' && (tagName.id = id);
	title !== '' && (tagName.title = title);
	src !== '' && (tagName.src = src);
	textContent !== '' && (tagName.textContent = textContent);

	dataAttributeName !== '' &&
		(tagName.dataset[dataAttributeName] = dataAttributeValue);
	tagName.classList.add(...classes);

	return tagName;
};
