container = document.getElementById("container");
function gridDrawing(sideNumber){
    container.innerHTML="";
    for (i=0;i<sideNumber;i++){

        const newCont=document.createElement("div");
        for (j=0;j<sideNumber;j++){
            const newDiv=document.createElement("div");
            newDiv.textContent="";
            newDiv.id="box";
            newDiv.addEventListener("mouseover",()=>{
                newDiv.classList="hovered";
            })
            newCont.appendChild(newDiv);
        }
        newCont.id="line";
        container.appendChild(newCont);
    }
}
gridDrawing(25)

const btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    gridDrawing(prompt("What size?"))
    }
)