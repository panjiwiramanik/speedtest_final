window.addEventListener('mousemove', function(event) {
	let mouseX = event.clientX;
	let mouseY = event.clientY;
	let w = window.innerWidth / 2;
	let h = window.innerHeight / 2;
	let el = document.getElementById('parallax');

	let pos1 = `${50 - (mouseX - w)  * 0.01}% ${50 - (mouseY - w)  * 0.01}%`;
	let pos2 = `${50 - (mouseX - w)  * 0.02}% ${50 - (mouseY - w)  * 0.02}%`;
	let pos3 = `${50 - (mouseX - w)  * 0.06}% ${50 - (mouseY - w)  * 0.06}%`;

	el.style.backgroundPosition = `${pos3}, ${pos2}, ${pos1}`
}); 