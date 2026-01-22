container = document.getElementById("container");
for (i=0;i<16;i++){
    const newCont=document.createElement("div");
    for (j=0;j<16;j++){
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