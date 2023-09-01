const inputEl = document.getElementById("task")
const addBtn = document.getElementById("add")
const listEl = document.getElementById("lists")
 let input = ""
addBtn.addEventListener("click", add = () => {
    input = inputEl.value
    let list = `<li>${input}</li>`
    listEl.innerHTML += list
    inputEl.value = ""
})
