
const container = document.querySelector("#container");

for( let i=0; i<16; i++){
    const div = document.createElement("div");
    div.textContent = "div number : " + i;
    div.addEventListener("mouseover",()=>{
        div.style.backgroundColor = "red";
    
    });
    div.addEventListener("mouseleave",()=>{
        div.style.backgroundColor = "green";
    
    });
    container.appendChild(div);
}