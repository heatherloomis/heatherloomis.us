---
---
{% assign gallery_images = site.static_files | where: "gallery", true %}
const gallery_images = [{% for image in gallery_images %}
	"{{ image.path }}",{% endfor %}
].sort((a, b) => 0.5 - Math.random());


window.addEventListener('load', function(e) {

	let carousel_element = document.getElementById('carousel');
	for (let i=0;i<gallery_images.length;i++) {
		let img = document.createElement("img");
		img.src = gallery_images[i];
		carousel_element.appendChild(img);
	}

	let slider = tns({
		container: carousel_element,
		items: 2,
		slideBy: "page",
		center: true,
		controls: false,
		nav: false,
		touch: true,
		mouseDrag: true,
		swipeAngle: false,
		responsive: {
			768: {
				items: 18,
				fixedWidth: 400
			}
		}
	});
	
});


