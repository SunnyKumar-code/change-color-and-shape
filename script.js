let round = document.querySelector(".round");
let btn = document.querySelectorAll("button");
let shape = document.querySelector("#square");


btn[0].addEventListener("click", function(){
    round.style.backgroundColor = color();
})

let color = () =>{
    let col = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++){
        color += col[Math.floor(Math.random()*16)];
    }
    return color;
}


let arr = ["square", "circle", "triangle", "crescent","parallelogram","diamond","star","pentagon","hexagon","trapezoid","oval"];


btn[1].addEventListener("click", function(){
   let randomShape =  arr[Math.floor(Math.random()*arr.length)];
    shape.id = randomShape;
})