const root = document.querySelector(".container")
console.log(root)
const row = 10;
const col = 10;

for(let i = 0; i < row; i++){
    for(let j = 0; j <col; j++){
        let cellDiv = document.createElement("div")
        cellDiv.classList.add("cell")
        cellDiv.addEventListener("click", changeColor)
        root.appendChild(cellDiv)
    }
}
function changeColor(e){
    console.log(e.target)
    const cellDiv = document.querySelectorAll(".container > div")
    cellDiv.forEach(el=>{
        el.classList.remove("diff-color")
    })
    e.target.classList.add("diff-color")
}

