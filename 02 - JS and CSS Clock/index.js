const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function updateHands () {
	var d = new Date();
	var hour = d.getHours() % 12;
	var minute = d.getMinutes();
	var second = d.getSeconds();

	console.log(`rotate(${90 + 360 * hour / 12})`);

	hourHand.style.transform = `rotate(${90 + 360 * hour / 12}deg)`;
	minuteHand.style.transform = `rotate(${90 + 360 * minute / 60}deg)`;
	secondHand.style.transform = `rotate(${90 + 360 * second / 60}deg)`;
}

updateHands();
setInterval(updateHands, 1000);
