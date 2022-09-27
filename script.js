const mobileNaveToggeleButton = document.querySelector('.mobile-nav-toggle');
const navigationBG = document.querySelector('.nav-bg');
const form = document.querySelector('form');

mobileNaveToggeleButton.addEventListener('click', navigationState);
navigationBG.addEventListener('click', navigationState);

form.addEventListener('submit', emailVerfication);

function navigationState(e) {
	if (mobileNaveToggeleButton.getAttribute('aria-expanded') === 'false') {
		mobileNaveToggeleButton.setAttribute('aria-expanded', 'true');
		navigationBG.classList.add('expanded');
	} else {
		mobileNaveToggeleButton.setAttribute('aria-expanded', 'false');
		navigationBG.classList.remove('expanded');
	}
}
/**
 *
 * @param {SubmitEvent} e form submit event
 */
function emailVerfication(e) {
	e.preventDefault();
	if (e.target.querySelector('.errormail')) {
		e.target.querySelector('.errormail').remove();
	}
	const email = e.target.firstElementChild.value;
	const errorMessage = document.createElement('p');
	errorMessage.className = 'errormail';
	errorMessage.innerText = 'please insert valid email address';
	if (email === '' || falseMail(email)) {
		e.target.append(errorMessage);
		return;
	}
}

function falseMail(mail) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
		return false;
	}
	return true;
}
