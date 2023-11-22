function openModal(elem) {
    let modal = getModal()
    modal.style.display = "flex"
    let img = document.createElement("img");
    img.src = elem.getAttribute("src")
    modal.appendChild(img)
}

function closeModal() {
    modal.innerHTML = ""
    getModal().style.display = "none"
}

let getModal = () => document.getElementById("modal")