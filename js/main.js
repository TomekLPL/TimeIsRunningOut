const daysCount = document.querySelector('.days-window');
const hoursCount = document.querySelector('.hours-window');
const minutesCount = document.querySelector('.minutes-window');
const secondsCount = document.querySelector('.seconds-window');

const setTime = () => {
	const countdown = new Date('02 18 2033') - new Date();
	const days = Math.floor(countdown / 1000 / 60 / 60 / 24);
	const hours = Math.floor(countdown / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(countdown / 1000 / 60) % 60;
	const seconds = Math.floor(countdown / 1000) % 60;

	daysCount.textContent = days;
	hoursCount.textContent = hours;
	minutesCount.textContent = minutes;
	secondsCount.textContent = seconds;
};

setTime()
setInterval(setTime, 1000);
