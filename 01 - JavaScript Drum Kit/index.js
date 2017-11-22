function playSound (e) {
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if (!key) return;
	key.classList.add('playing');

	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	audio.currentTime = 0;
	audio.play();
}

function transitionEnd(e) {
	if (e.propertyName != 'transform') return;
	this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', transitionEnd));
