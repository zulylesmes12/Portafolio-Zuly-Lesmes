function contActive(){
    var selector = document.getElementById("cont-colors");
    var selector2 = document.getElementById("btn-elemento");
    selector.classList.toggle("active");
    selector2.classList.toggle("active");
}

function bgblackk(){
    var selector = document.getElementById("body");
    selector.classList.toggle("blackk");
}

function bgaqua(){
    var selector = document.getElementById("body");
    selector.classList.toggle("aqua");
}

function bgredrose(){
    var selector = document.getElementById("body");
    selector.classList.toggle("redrose");
}





AOS.init();