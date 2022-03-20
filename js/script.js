let myform = document.querySelector("#myform");
let list = document.querySelector("#list");
let message = document.querySelector("#message");


let arr = JSON.parse(localStorage.getItem("list")) || []
    myform.addEventListener("submit", function (e) {
	e.preventDefault();

	createLi(message.value);
	arr.push(message.value)
	message.value = "";
	localSave()
})


function localSave() {
	localStorage.setItem("list", JSON.stringify(arr))
}


function createLi(content) {
	let li = document.createElement("li");
	li.innerHTML = ` ${content} <button><i class="far fa-trash-alt"></i></button> `
	list.append(li)
}


function giveMyMyList() {
	if (localStorage.getItem("list") !== null) {
		arr = JSON.parse(localStorage.getItem("list"));
		arr.forEach(elem => createLi(elem))
	}
}

giveMyMyList()


list.addEventListener("click", function (e) {
	let {tagName} = e.target;
	if (tagName === "BUTTON" || tagName === "I") {
	e.target.closest("li").remove()
}

})