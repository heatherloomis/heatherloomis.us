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
//	const portfolio_carousel_element = document.getElementById("portfolio_carousel");
//	
//	let img_elements = portfolio_carousel_element.querySelectorAll(".carousel-item img");
//	img_elements[0].src = gallery_images[0];
//	img_elements[1].src = gallery_images[1];
//	img_elements[2].src = gallery_images[gallery_images.length-1];
//
//	portfolio_carousel_element.addEventListener('slide.bs.carousel', function(e) {
//		current_src = (new URL(img_elements[e.to].src)).pathname;
//		const current_index = gallery_images.indexOf(current_src);
//		let prev = current_index == 0 ? (gallery_images.length - 1) : current_index - 1;
//		let next = current_index == (gallery_images.length - 1) ? 0 : current_index + 1;
//
//		switch (e.to) {
//			case 0:
//				img_elements[1].src = gallery_images[next];
//				img_elements[2].src = gallery_images[prev];
//				break;
//			case 1:
//				img_elements[0].src = gallery_images[prev];
//				img_elements[2].src = gallery_images[next];
//				break;
//			case 2:
//				img_elements[0].src = gallery_images[next];
//				img_elements[1].src = gallery_images[prev];
//				break;
//		};

//	});

	//let carousel = bootstrap.Carousel.getInstance(portfolio_carousel_element);
});


