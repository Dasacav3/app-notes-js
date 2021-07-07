window.addEventListener("DOMContentLoaded", () => {
	// Add Notes
	const form = document.getElementById("form");
	const title = <HTMLInputElement>document.getElementById("title");
	const topic = <HTMLInputElement>document.getElementById("topic");
	const description = <HTMLInputElement>document.getElementById("description");
	const message = document.getElementById("message");

	form?.addEventListener("submit", send, false);

	function send(e: Event) {
		if (message) message.innerHTML = "";
		if (title && title.value == "") {
			e.preventDefault();
			if (message) message.innerHTML += "<p class='text-red-800'>Debes agregar un titulo</p>";
		}

		if (topic && topic.value == "") {
			e.preventDefault();
			if (message) message.innerHTML += "<p class='text-red-800'>Debes agregar un tema</p>";
		}

		if (description && description.value == "") {
			e.preventDefault();
			if (message) message.innerHTML += "<p class='text-red-800'>Debes agregar una descripción</p>";
		}
	}

	// Edit Notes
	const formEdit = document.getElementById("formEdit");

	formEdit?.addEventListener("submit", async (e) => {
		e.preventDefault();

		const id = formEdit.dataset.id;
		const title = <HTMLInputElement>document.getElementById("title");
		const topic = <HTMLInputElement>document.getElementById("topic");
		const description = <HTMLTextAreaElement>document.getElementById("description");

		let titleValue = title.value;
		let topicValue = topic.value;
		let descriptionValue = description.value;

		try {
			const data = await fetch(`/note/edit/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ title: titleValue, topic: topicValue, description: descriptionValue }),
			});
			const res = await data.json();
            if(res.status){
                window.location.href = "/"
            }else{
                console.log(res);
            }
		} catch (error) {
			console.log(error);
		}
	});

	// Delete Notes
	const btnDelete = document.getElementById("btnDelete");
	btnDelete?.addEventListener("click", async () => {
		const id = btnDelete.dataset.id;
		try {
			const req = await fetch(`/note/delete/${id}`, { method: "DELETE" });
			const res = await req.json();

			if (res.status) {
				window.location.href = "/";
			} else {
				console.log(res);
			}
		} catch (e) {
			console.log(e);
		}
	});
});
