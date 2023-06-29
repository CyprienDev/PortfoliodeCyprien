import React from 'react';

function Button({ title, type, onSubmit }) {
	const handleClick = (e) => {
		e.preventDefault();
		if (onSubmit && typeof onSubmit === 'function') {
			onSubmit();
		}
	};

	return (
		<button onClick={handleClick} type={type}>
			{title}
		</button>
	);
}

export default Button;
