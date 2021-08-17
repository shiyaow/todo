const baseUrl = 'https://api.airtable.com/v0/';
const BASE = 'appBKgup43ozyEmMA';
const TABLE = 'Todo%20list';

const AUTH_HEADER = {
	Authorization: `Bearer keyjlaxCiAV9Pq0If`,
};

export const fetchTodos = (setTodos) => {
	const url = `${baseUrl}${BASE}/${TABLE}`;

	fetch(url, {
		headers: {
			...AUTH_HEADER,
		},
	})
		.then((res) => res.json())
		.then(({ records }) => {
			setTodos(records);
		});
};

export const removeTodo = async (id) => {
	await fetch(`${baseUrl}/${id}`, {
		method: 'DELETE',
		headers: {
			...AUTH_HEADER,
		},
	}).then((res) => res.JSON());
};

export const addTodo = async (input) => {
	await fetch(`${baseUrl}`, {
		method: 'POST',
		headers: {
			...AUTH_HEADER,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ records: [{ fields: { Todo: input, Done: 'false' } }] }),
	});
};

export const setDone = (id) => {
	fetch(`${baseUrl}`, {
		method: 'PATCH',
		headers: {
			...AUTH_HEADER,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ records: [{ id: id, fields: { Done: 'true' } }] }),
	});
};
