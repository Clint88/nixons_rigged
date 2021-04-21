window.onload = document.getElementById("crook").style.animation = "rotate 2s ease"
window.onload = document.getElementById("crook").style.transform = "rotate(8deg)"

var btn = document.getElementById("clown");
var card = document.getElementById("crook");
var no = document.getElementById("clown");

function rightClick() {
        alert("Dont pick the wrong one")
}
document.getElementById("clown").addEventListener("contextmenu", rightClick)


btn.onclick = () => {
        this.alert("Are you sure?")
        
        card.style.display = "none"; 
        
        var newBtn = document.createElement("BUTTON");
        newBtn.innerHTML = ("Try again");
        document.body.appendChild(newBtn);
        
        newBtn.onclick = () => {
                for(var i = 0; i < 300; i++){
                        document.getElementById("reset").style.display = "none";
                        var newBtn2 = document.createElement("BUTTON")
                        newBtn2.innerHTML = ("Pick the right one !!")
                        document.body.appendChild(newBtn2);
                        newBtn2.onclick = window.location.reload();         
                }
        }

        document.getElementById("clown").removeEventListener("contextmenu", rightClick)

}


