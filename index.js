let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")

let count = 0

console.log(saveEl)

function increment() {
    count +=1
    countEl.innerHTML = count
}

saveEl.innerText = dashSep
function save() {
    let dashSep = count + " - "
    saveEl.innerHTML += dashSep
    console.log(count)
    countEl.innerHTML = 0
    count = 0
}
