const inputColor = document.getElementById("inputColor");
const btnVisualize = document.getElementById("btn-visualize");
const pHexa = document.getElementById("pHexa")
const cardColor = document.getElementById("cardColor");

console.log(inputColor.value)
btnVisualize.addEventListener("click", ()=>{    
    pHexa.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value
})

