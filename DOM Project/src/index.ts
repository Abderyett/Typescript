const btn = document.getElementById('btn')!;

const input = document.getElementById('inputtodo')! as HTMLInputElement;

const form = document.getElementById('todoform')!;

const list = document.getElementById('todolist')!;

const handleSubmit = function (e: SubmitEvent) {
	e.preventDefault();
	const todoText = input.value;
	const newLi = document.createElement('li');
	newLi.append(todoText);
	list.append(newLi);

	input.value = '';
};
form.addEventListener('submit', handleSubmit);

// btn.addEventListener('click', function () {
// 	alert(input.value);
// 	input.value = '';
// });
