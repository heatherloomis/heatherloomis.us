---
---
{% assign gallery_images = site.static_files | where: "gallery", true %}
const gallery_images = [{% for image in gallery_images %}
	"{{ image.path }}",{% endfor %}
].sort((a, b) => 0.5 - Math.random());


window.addEventListener('load', function(e) {

	let carousel_element = document.getElementById('carousel');
	if (carousel_element) {
		for (let i=0;i<gallery_images.length;i++) {
			let img = document.createElement("img");
			img.classList.add("tns-lazy-img");
			img.setAttribute("data-src", gallery_images[i]);
			
			let div = document.createElement("div");
			div.appendChild(img);
	
			carousel_element.appendChild(div);
		}
	
		let slider = tns({
			container: carousel_element,
			items: 18,
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
	
});


