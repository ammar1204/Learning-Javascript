const countEl = document.getElementById("count-el")
const entries = document.getElementById("entries")
const saveBtn = document.getElementById("save-btn")
const clearBtn = document.getElementById("clear-btn")
let count = 0;
const increment = () => {
   count += 1
   countEl.textContent = count
}
saveBtn.addEventListener("click", save = () => {
    let countStr = count + " - "
    entries.textContent += countStr
    countEl.textContent = 0
    count = 0
})
clearBtn.addEventListener("click", function() {
    entries.textContent = "Previous entries: "

})
