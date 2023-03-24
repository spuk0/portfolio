console.log("Hello World");
window.onscroll = function () {
    //Llamamos a la funcion al hacer scroll en la pagina
    scrollable();
};
function scrollable() {
    var y = 0;
    var currentY = window.pageYOffset; //pageYOffset es un alias, devuelve los pixeles scrolleados en Y
    if (currentY > y) { //Si la cantidad de pixeles recorridos en Y es mayor a 0 (variable y)...
        document.querySelector('#MyNavBar').classList.remove('myNavBar');
        document.querySelector("#MyNavBar").classList.add("fixed-theme");
    }
    else {
        if (y == currentY) {
            document.querySelector('#MyNavBar').classList.add('myNavBar', 'fixed-theme');
        }
    }
}