import React, { useState } from "react";
import { addTodo as addTodoApi } from '../api';

/*
TodoForm here provides functionality to add new todo item.
It renders a input field which allows user to add new value, it will update the state of todo list by calling addTodo callback.
The callback is only called when the input value is not empty
*/

//new functionality: create an add-todo button, and renders TodoForm when button is clicked on

const TodoInput = ({ refetchTodoList }) => {
	const [value, setValue] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!value) return;
		await addTodoApi(value);
		refetchTodoList();
		setValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				className="input"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				required
			/>
		</form>
	);
};

export default TodoInput;
