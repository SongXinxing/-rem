~(function () {
	var calc = function () {
		devicePixelRatio = window.devicePixelRatio || 1;
		var docElement = document.documentElement;
		var clientWidthValue = docElement.clientWidth > 750 ? 750 : docElement.clientWidth;
		docElement.style.fontSize = 40 * (clientWidthValue / 750 + 'px';
	}
	calc();
	window.addEventListener('resize', calc);
})()
