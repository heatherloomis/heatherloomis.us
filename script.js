/*
{% assign images = site.static_files | where: "gallery", true %}
const gallery_images = [
{% for image in images %}{% assign parts = image.basename | split: "-" %}{% assign tags = parts[2] | split: "," %}{% if parts[1] == "V" %}"{{ image.path }}",
{% endif %}{% endfor %}];
*/


window.addEventListener('load', function() {

	let carousel_element = document.getElementById('carousel');
	if (carousel_element) {	
		let slider = tns({
			container: carousel_element,
			fixedWidth: 400,
			slideBy: "page",
			center: true,
			controls: false,
			nav: false,
			touch: true,
			mouseDrag: true,
			swipeAngle: false,
			lazyload: true
		});
	}
	
	const parallaxes = document.querySelectorAll('.parallax');
	for (let i=0;i<parallaxes.length;i++) {
		let element = parallaxes[i];
		const src = element.getAttribute('data-src');
		element.style['background-image'] = 'url("'+src+'")';
	}

	window.addEventListener('scroll', function(e) {
		const parallaxes = document.querySelectorAll('.parallax');
		for (let i=0;i<parallaxes.length;i++) {
			const css = '0px '+(0.25 * document.scrollTop)+'px';
			parallaxes[i].style['background-position'] = css;
			console.log(this.scrollTop);
		}
	});
});


