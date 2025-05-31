function dataHora(){
        document.getElementById('demo').innerHTML = Date();
}

function dataHora(id){
        document.getElementById(id).innerHTML = Date() + ", Legal!!!";
    }

function msg(id, msg){
        document.getElementById(id).innerHTML = msg;
}