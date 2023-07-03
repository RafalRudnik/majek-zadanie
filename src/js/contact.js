const input = document.getElementById('name');
const mailInput = document.getElementById('email');
const msgInput = document.getElementById('msg');
const error = document.querySelector('.msg-status');
const sendBtn = document.querySelector('.sendBtn');
const allInputs = document.querySelectorAll('input');

const inputCheck = () => {
	if (input.value === '') {
		input.placeholder = 'Musisz podać imię';
		input.classList.add('input-error');
	} else {
		input.placeholder = '';
		input.classList.remove('input-error');
	}
};

const emailCheck = (mailInput) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/i;
	if (re.test(mailInput.value)) {
		mailInput.placeholder = '';
		mailInput.classList.remove('input-error');
	} else {
		mailInput.placeholder = 'Musisz podać poprawny email';
		mailInput.classList.add('input-error');
	}
};

sendBtn.addEventListener('click', (e) => {
	e.preventDefault();
	inputCheck();
	emailCheck(mailInput);
});
