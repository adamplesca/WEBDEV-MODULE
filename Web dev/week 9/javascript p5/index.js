function greet() {
    var r;
    r = Math.floor(Math.random() * 10);
    document.getElementById("demo").innerHTML = r;
    var page = document.getElementById("demo");
    page.style.backgroundColor = "white";
    page.style.color = "blue";
}