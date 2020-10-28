const root = document.querySelector(".container")
console.log(root)
const row = 10;
const col = 10;

for(let i = 0; i < row; i++){
    for(let j = 0; j <col; j++){
        let cellDiv = document.createElement("div")
        cellDiv.classList.add("cell")
        root.appendChild(cellDiv)
    }
}
let even = true;
function changeColor(){
    let parentDiv  = document.querySelectorAll("div.cell")
    parentDiv.forEach((val, idx)=>{
        let isEven = idx % 2 == 0
        if(isEven === even){
            val.classList.add("diff-color")
        }else{
            val.classList.remove("diff-color")
        }
        even = !even

    })
    
}

setInterval(changeColor, 1000)