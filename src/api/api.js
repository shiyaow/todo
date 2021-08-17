const baseUrl = 'https://api.airtable.com/v0/';
const BASE = 'appBKgup43ozyEmMA';
const TABLE = 'Todo%20list';

const AUTH_HEADER = {
	Authorization: `Bearer keyjlaxCiAV9Pq0If`,
};
const url = `${baseUrl}${BASE}/${TABLE}`;

export const fetchTodos = (setTodos) => {
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
	await fetch(`${url}/${id}`, {
		method: 'DELETE',
		headers: {
			...AUTH_HEADER,
		},
	}).then((res) => res.json());
};

export const addTodo = async (input) => {
	await fetch(`${url}`, {
		method: 'POST',
		headers: {
			...AUTH_HEADER,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ records: [{ fields: { Todo: input, Done: 'false' } }] }),
	});
};

export const setDone = (id) => {
	fetch(`${url}`, {
		method: 'PATCH',
		headers: {
			...AUTH_HEADER,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ records: [{ id: id, fields: { Done: 'true' } }] }),
	});
};
