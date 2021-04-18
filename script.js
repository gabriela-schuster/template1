const resP = document.querySelector('.response p');
const resH2 = document.querySelector('.response h3');
let q1 = document.querySelector('.q1');
let q2 = document.querySelector('.q2');
let q3 = document.querySelector('.q3');
let q4 = document.querySelector('.q4');

function question1 () {
	q1.classList.add('active-question');
	q2.classList.remove('active-question');
	q3.classList.remove('active-question');
	q4.classList.remove('active-question');
	resP.innerHTML = 'resposta da pergunta 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda laudantium, minima illum, modi maxime praesentium, ullam odio error saepe ut illo beatae, veniam alias optio! Iusto dolorum blanditiis quam.';
	resH2.innerHTML = '';
}
function question2 () {
	q1.classList.remove('active-question');
	q2.classList.add('active-question');
	q3.classList.remove('active-question');
	q4.classList.remove('active-question');
	resP.innerHTML = 'resposta da pergunta 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	resH2.innerHTML = '';
}
function question3 () {
	q1.classList.remove('active-question');
	q2.classList.remove('active-question');
	q3.classList.add('active-question');
	q4.classList.remove('active-question');
	resP.innerHTML = 'resposta da pergunta 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, facilis nam blanditiis quis vel at repellat fugiat repellendus magni?';
	resH2.innerHTML = '';
}
function question4 () {
	q1.classList.remove('active-question');
	q2.classList.remove('active-question');
	q3.classList.remove('active-question');
	q4.classList.add('active-question');
	resP.innerHTML = 'resposta da pergunta 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	resH2.innerHTML = '';
}

function copyCel (toCopy) {
	let text = toCopy;
	navigator.clipboard.writeText(text);
	alert(`Copiado`);
}
