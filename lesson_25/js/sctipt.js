"use srtict"

const searchContent = document.querySelector('.search');
document.addEventListener("click", search);
function search(event) {
	if (event.target.closest('.search__button')) {
		searchContent.classList.toggle('_active');
	}
	if (!event.target.closest('.search')) {
		searchContent.classList.remove('_active');
	}
};

document.addEventListener(
	'keyup', function (event) {
		if (event.code === 'Escape') {
			searchContent.classList.remove('_active')
		}
	});


const lineItem = document.querySelector('.form__line');
const inputItem = document.querySelector('.form__input');
const textCounter = document.querySelector('.count');

const inputItemLength = inputItem.getAttribute('maxlength');
textCounter.innerHTML = inputItemLength;

inputItem.addEventListener("keyup", countLetters);

function countLetters() {
	const textCounterResult = inputItemLength - inputItem.value.length;
	textCounter.innerHTML = textCounterResult;
}




