const row = 10
const col = 10

const parent = document.querySelector(".container")

for(let i = 0; i<row; i++ ){
    for(let j = 0; j < col; j++){
        let cellDiv = document.createElement("div")
        cellDiv.classList.add("cell")
        parent.appendChild(cellDiv)
    }
}


let changeColor = function (){
    const parentDiv = document.querySelectorAll("div.cell")
    parentDiv.forEach((node)=>{
        let randomNum = Math.random() * 2;
        if(randomNum >1){
            node.classList.add("diff-color")
        }else{
            node.classList.remove("diff-color")
        }
    })
}

setInterval(changeColor, 500)