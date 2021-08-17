import React, { useState, useEffect, Suspense } from 'react';
import './TodoList.css';
import TodoInput from './TodoInput';
import { TodoItem } from './TodoItem';
import { fetchTodos, removeTodo, setDone } from '../api';
import { useQuery } from 'react-query';

const TodoList = () => {
	const [todos, setTodos] = useState([]);

	const refetchTodoList = () => {
		fetchTodos(setTodos);
	};

	const completeTodo = async (id) => {
		await setDone(id);
		fetchTodos(setTodos);
	};

	const deleteTodo = async (id) => {
		await removeTodo(id);
		fetchTodos(setTodos);
	};

	useEffect(() => {
		fetchTodos(setTodos);
	}, []);

	return (
		<Suspense fallback='loading......'>
			<div className='app'>
				<button onClick={() => setTestArr((x) => (x += 1))}>{'testtest'}</button>
				<div className='todo-list'>
					{todos.length ? (
						todos.map(
							(todo, index) =>
								todo.fields.Todo && (
									<Suspense fallback='loading...'>
										<TodoItem
											key={index}
											index={index}
											todoObj={todo}
											completeTodo={completeTodo}
											deleteTodo={deleteTodo}
										/>
									</Suspense>
								),
						)
					) : (
						<h2>start creating your first todo now!</h2>
					)}
					<TodoInput refetchTodoList={refetchTodoList} />
				</div>
			</div>
		</Suspense>
	);
};

export default TodoList;
