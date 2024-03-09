export const createTag = ({
	tag = 'div',
	textContent = '',
	child = [],
	...rest
}) => {
	const DOC = window.document;

	const tagName = DOC.createElement(tag);
	textContent !== '' && (tagName.textContent = textContent);

	if (child.length > 0) {
		tagName.append(...child);
	}

	if (Object.keys(rest).length > 0) {
		Object.entries(rest).forEach(([key, value]) => {
			if (Array.isArray(value)) {
				tagName.setAttribute(key, value.join(' '));
			} else {
				tagName.setAttribute(key, value);
			}
		});
	}

	return tagName;
};
