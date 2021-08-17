import React from 'react';

export const TodoItem = ({ index, todoObj, completeTodo, deleteTodo }) => {
	const { id, fields, createdTime } = todoObj;

	const handleComplete = () => {
		completeTodo(id);
	};

	const handleDelete = () => {
		deleteTodo(id);
	};

	return (
		<div className='todo-wrapper'>
			<div
				className='todo'
				id={id}
				style={{ textDecoration: fields.Done === 'true' ? 'line-through' : '' }}>
				{fields.Todo}
			</div>
			<button onClick={handleComplete}>it's done!</button>
			<button onClick={handleDelete}>delete this todo</button>
			<div>
				<p className='mark' style={{ display: 'block' }}>{`created at ${createdTime}`}</p>
			</div>
		</div>
	);
};
