let move = (event) => {
    let voter = document.getElementById("voter");

    let newX = event.clientX - 50;
    let newY = event.clientY - 50;
    voter.style.position = "fixed";
    voter.style.left = `${newX}px`;
    voter.style.top = `${newY}px`;
    voter.style.index = 1;   
}
let stick = (event) =>{
    let img = document.createElement("img");
    img.src = "img/i-voted.gif";
    document.getElementById("area").appendChild(img) 
    img.style.width = "100px"
    img.style.height = "100px"
    let newX = event.clientX - 50;
    let newY = event.clientY - 50;
    img.style.position = "fixed";
    img.style.left = `${newX}px`;
    img.style.top = `${newY}px`;
    img.style.index = 1; 
}
window.addEventListener('mousemove', move)
window.addEventListener('click', stick)
