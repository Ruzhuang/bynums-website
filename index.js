const button = document.getElementById("get-value");
button.addEventListener("click", get);
var height;
var width;

function get() {
    height = document.getElementById("height").value;
    width = document.getElementById("width").value;
    document.getElementById("embeded").setAttribute("src", "values/" + height.toString() + "by" + width.toString() + ".txt");
}