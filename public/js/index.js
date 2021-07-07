"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const title = document.getElementById("title");
    const topic = document.getElementById("topic");
    const description = document.getElementById("description");
    const message = document.getElementById("message");
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", send, false);
    function send(e) {
        if (message)
            message.innerHTML = "";
        if (title && title.value == "") {
            e.preventDefault();
            if (message)
                message.innerHTML += "<p class='text-red-800'>Debes agregar un titulo</p>";
        }
        if (topic && topic.value == "") {
            e.preventDefault();
            if (message)
                message.innerHTML += "<p class='text-red-800'>Debes agregar un tema</p>";
        }
        if (description && description.value == "") {
            e.preventDefault();
            if (message)
                message.innerHTML += "<p class='text-red-800'>Debes agregar una descripción</p>";
        }
    }
    const formEdit = document.getElementById("formEdit");
    formEdit === null || formEdit === void 0 ? void 0 : formEdit.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const id = formEdit.dataset.id;
        const title = document.getElementById("title");
        const topic = document.getElementById("topic");
        const description = document.getElementById("description");
        let titleValue = title.value;
        let topicValue = topic.value;
        let descriptionValue = description.value;
        try {
            const data = yield fetch(`/note/edit/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title: titleValue, topic: topicValue, description: descriptionValue }),
            });
            const res = yield data.json();
            if (res.status) {
                window.location.href = "/";
            }
            else {
                console.log(res);
            }
        }
        catch (error) {
            console.log(error);
        }
    }));
    const btnDelete = document.getElementById("btnDelete");
    btnDelete === null || btnDelete === void 0 ? void 0 : btnDelete.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
        const id = btnDelete.dataset.id;
        try {
            const req = yield fetch(`/note/delete/${id}`, { method: "DELETE" });
            const res = yield req.json();
            if (res.status) {
                window.location.href = "/";
            }
            else {
                console.log(res);
            }
        }
        catch (e) {
            console.log(e);
        }
    }));
});
