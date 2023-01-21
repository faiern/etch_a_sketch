
const container = document.querySelector("#container");
let numberOfDivs = 16;

const boutton = document.querySelector("button");

create_grid(8);

boutton.addEventListener("click",()=>{
    numberOfDivs = prompt("Combien de cases, bg ?");
    create_grid(numberOfDivs);
})

function create_grid(numberOfDivs){
    for( let i=0; i<numberOfDivs; i++){
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
}