// showTitle 함수를 완성해 주세요.
function showTitle(e) {
	if (e.target.dataset.title) {
		const span = document.createElement('span');
		span.classList.add('.title');
		span.textContent = e.target.dataset.title;
		e.target.append(span);
	}

}

function removeTitle(e) {
	if (e.target.dataset.title) {
		e.target.lastElementChild.remove();
	}
}

const map = document.querySelector('.map');
map.addEventListener('mouseover', showTitle);
map.addEventListener('mouseout', removeTitle);