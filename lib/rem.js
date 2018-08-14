~(function () {
	var calc = function () {
		devicePixelRatio = window.devicePixelRatio || 1;
		var docElement = document.documentElement;
		var clientWidthValue = docElement.clientWidth > 750 ? 750 : docElement.clientWidth;
		docElement.style.fontSize = 20 * (clientWidthValue / (750 / devicePixelRatio) + 'px';
	}
	calc();
	window.addEventListener('resize', calc);
})()