var count = 0;
function addPlayer(){
    if(count<=11){
        var ol = document.getElementById("squad");
        var newPlayer = document.getElementById("newPlayer");
        var li = document.createElement("li");
        li.setAttribute('id', newPlayer.value);
        li.appendChild(document.createTextNode(newPlayer.value));
        ol.appendChild(li);
        count = count + 1;
    }
}
function removePlayer(){
    var ol = document.getElementById("squad");
    var newPlayer = document.getElementById("newPlayer");
    var item = document.getElementById(newPlayer.value);
    ol.removeChild(item);
    count = count - 1;
}

