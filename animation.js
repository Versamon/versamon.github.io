const animeTranslateX = (target, value, duration, delay) =>
	anime({
		targets: target,
		translateX: value,
		duration: duration,
		delay: delay,
		easing: "easeInOutExpo",
	});

let menuRightSide = document.querySelector("#menu");
let menuButton = document.querySelector(".menuButton");
let hat = document.querySelector(".hat");
let menuSwitch = false;

menuButton.addEventListener("click", function () {
	if (menuSwitch) {
		animeTranslateX(".menu", -window.innerWidth * 0, 1000, 0);
		menuSwitch = false;
	} else {
		animeTranslateX(".menu", window.innerWidth * 0.22, 1500, 0);
		menuSwitch = true;
	}
});
