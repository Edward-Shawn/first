var btn = document.getElementById("mybtn");

var span = document.getElementsByClassName("close")[0];

var modal = document.getElementById("modal");

span.onclick = function(){
    modal.style.display="none";
}

btn.onclick = function(){
    modal.style.display="block";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}