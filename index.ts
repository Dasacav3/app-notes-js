window.addEventListener("DOMContentLoaded", () => {
	let btn = document.getElementById("push");
	if (btn != null) {
		btn.addEventListener("click", pushIt, false);
	}

	function pushIt() {
		let container = document.getElementById("result");
		let message = `<p class="ml-20">You're cool! 😎</p> </br>`;
		if (container != null) {
			container.innerHTML += message;
		}
	}
});
