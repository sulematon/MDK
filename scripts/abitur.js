//check abiturient.html
const email = document.getElementById('email');
const quest = document.getElementById('quest');

document.getElementById('send').onclick = function () {
	let newError = false;

	[email, quest].forEach(item => {
		if (!item.value) {
			item.style.borderColor = 'red';
			newError = true;
		} else {
			item.style.borderColor = '';
		}
	});

	if (!newError) {
		[email, quest].forEach(item => {
			item.value = '';
		});
		alert('Спасибо за вопрос, ожидайте ответа!')
	}
}
