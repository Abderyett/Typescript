interface Todo {
	text: string;
	isCompleted: boolean;
}

function reacLocalStorage(): Todo[] {
	const todoJSON = localStorage.getItem('todos');
	if (todoJSON == null) return [];
	return JSON.parse(todoJSON);
}

const todos: Todo[] = reacLocalStorage();

const btn = document.getElementById('btn')!;
const input = document.getElementById('inputtodo')! as HTMLInputElement;
const form = document.getElementById('todoform')!;
const list = document.getElementById('todolist')!;

todos.forEach(createTodo);

function SaveLocalStorage() {
	localStorage.setItem('todos', JSON.stringify(todos));
}
const handleSubmit = function (e: SubmitEvent) {
	e.preventDefault();
	const newTodo: Todo = {
		text: input.value,
		isCompleted: false,
	};

	todos.push(newTodo);
	SaveLocalStorage();
	createTodo(newTodo);

	input.value = '';
};

function createTodo(todo: Todo) {
	const newLi = document.createElement('li');
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.checked = todo.isCompleted;
	checkbox.addEventListener('change', function () {
		todo.isCompleted = checkbox.checked;
		SaveLocalStorage();
	});
	newLi.append(todo.text);
	newLi.append(checkbox);
	list.append(newLi);
}
form.addEventListener('submit', handleSubmit);

// btn.addEventListener('click', function () {
// 	alert(input.value);
// 	input.value = '';
// });
