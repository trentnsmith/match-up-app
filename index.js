var count = (function() {
    var counter = 0;
    return function () {
        return counter +=1
    }
})();

function displaycount(){
    document.getElementById("Trent").innerHTML = count()
}

function displaycount2(){
    document.getElementById("Brock").innerHTML = count()
}