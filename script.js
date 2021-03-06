/*
{%comment%}
{% assign images = site.static_files | where: "gallery", true %}
const gallery_images = [
{% for image in images %}{% assign parts = image.basename | split: "-" %}{% assign tags = parts[2] | split: "," %}{% if parts[1] == "V" and tags contains "foo" %}"{{ image.path }}",
{% endif %}{% endfor %}];
{%endcomment%}
*/


window.addEventListener('load', function() {

	let carousel_element = document.getElementById('carousel');
	if (carousel_element) {
		let pageX, dragging = false;

		//carousel_element.scrollLeft = carousel_element.scrollWidth / 2;
		carousel_element.scrollLeft = 3000;
		carousel_element.addEventListener('mousedown', function(e) {
			dragging = true;
			pageX = e.pageX;
		});

		function dragstop(e) {
			dragging = false;
		}
		carousel_element.addEventListener('mouseup', dragstop);
		carousel_element.addEventListener('mouseleave', dragstop);

		carousel_element.addEventListener('mousemove', function(e) {
			if (dragging)
				this.scrollLeft += pageX - (pageX = e.pageX);
			
		});
		
		let run = true;
		carousel_element.addEventListener('scroll', function(e) {

			
			if (run && this.scrollLeft < (this.clientWidth * 1.10)) {

				this.prepend(this.lastChild);
				this.scrollLeft += this.firstChild.clientWidth;

			}
			else if (this.scrollLeft > (this.scrollWidth - this.clientWidth * 1.10)) {
				this.append(this.firstChild);
				this.scrollLeft -= this.lastChild.clientWidth;
			}
			
			
		});
	}
	// if (carousel_element) {	
	// 	let slider = tns({
	// 		container: carousel_element,
	// 		//autoWidth: true,
	// 		//fixedWidth: 400,
	// 		// items: 4,
	// 		// slideBy: "page",
	// 		//center: true,
	// 		controls: false,
	// 		nav: false,
	// 		touch: true,
	// 		mouseDrag: true,
	// 		lazyload: true
	// 	});
	// }
	
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
			//console.log(this.scrollTop);
		}
	});
});


