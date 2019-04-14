onload=function(){ }

function changeAngle(data) {
    console.log(data);

    var mov1 = [-4, -2, 9];
    var mov2 = [4, -1.5, 8.5];
    var mov3 = [8, -1.5, 5];
    var mov4 = [9, -0, 1.5];

    var x = data[0];
    var y = data[1];
    var z = data[2];

    if (x < 0) {
        changeFoto('../../img/01.png');
    }

    if (x < 6 && x >= 0) {
        changeFoto('../../img/02.png');
    }

    if (x < 8.5 && x >= 6) {
        changeFoto('../../img/03.png');
    }

    if (x >= 8.5) {
        changeFoto('../../img/04.png');
    }

}

function changeFoto(img) {
    $("#im").attr("src",img);
}

function volver() {
    window.location.href = "../home/home.html"
}

var activo = "../../assets/images/btn-pausa.png";
var inactivo = "../../assets/images/btn-continuar.png";

function play() {

    console.log(activo);
    $("#play").attr("src",activo);

    temp = activo
    activo = inactivo;
    inactivo = temp;
}