function fecha_abre1(){
    document.querySelector(".acessibilidade-hid").style.visibility="visible";
    document.querySelector(".acessibilidade").style.visibility="hidden";
    document.querySelector(".acess1-fake").style.visibility="visible";
}

function fecha_abre2(){
    document.querySelector(".acessibilidade-hid").style.visibility="hidden";
    document.querySelector(".acessibilidade").style.visibility="visible";
    document.querySelector(".acess1-fake").style.visibility="hidden";
}

function normalmode() {
    document.querySelector(".acessibilidade").style.visibility="visible";
    document.querySelector(".acess1-fake").style.visibility="hidden"
    document.querySelector("body").style.backgroundColor = "#8E8E8E";
    document.getElementById("topo").style.backgroundColor = "#9D6BFF";
    document.getElementById("fundo_branco").style.backgroundColor = "#F5F5F5";
    document.querySelector("hr").style.backgroundColor = "#000";
    document.getElementById("cardjs").src = "/imgs/card_user.png"
    document.getElementById("uljs1").style.color = "#000";
    document.getElementById("uljs2").style.color = "#000";
    document.getElementById("uljs3").style.color = "#000";
    document.getElementById("uljs4").style.color = "#000";
    document.getElementById("uljs5").style.color = "#000";
    document.getElementById("pjs").style.color = "#000";
    document.querySelector("nome_responsivo").style.color="#000"
    document.querySelector("idade_responsivo").style.color="#000"
    document.querySelector(".espaço_cinza").style.backgroundColor = "#DDD";
    document.querySelector(".espaço_cinza2").style.backgroundColor = "#DDD";
    document.querySelector(".subtitulo4").style.backgroundColor = "#626262";
    document.querySelector(".espaço_cinza3").style.color = "#000";
    document.querySelector(".forms").style.color = "#000";
}

function darkmode() {
    document.querySelector(".acessibilidade").style.visibility="hidden";
    document.querySelector(".acess1-fake").style.visibility="visible"
    document.querySelector("body").style.backgroundColor = "#363636";
    document.getElementById("topo").style.backgroundColor = "#737373";
    document.getElementById("fundo_branco").style.backgroundColor = "#737373";
    document.querySelector("hr").style.backgroundColor = "#FFF";
    document.getElementById("cardjs").src = "/imgs/card_user_dark.png"
    document.getElementById("uljs1").style.color = "#FFF";
    document.getElementById("uljs2").style.color = "#FFF";
    document.getElementById("uljs3").style.color = "#FFF";
    document.getElementById("uljs4").style.color = "#FFF";
    document.getElementById("uljs5").style.color = "#FFF";
    document.getElementById("pjs").style.color = "#FFF";
    document.querySelector(".nome_responsivo").style.color= "#FFF"
    document.querySelector(".idade_responsivo").style.color= "#FFF"
    document.querySelector(".espaço_cinza").style.backgroundColor = "#7B7979";
    document.querySelector(".espaço_cinza2").style.backgroundColor = "#7B7979";
    document.querySelector(".subtitulo4").style.color = "#FFF";
    document.querySelector(".espaço_cinza3").style.color = "#FFF";
    document.querySelector(".forms").style.color = "#FFF";
}

function perfiljs() {
    document.querySelector(".perfil").style.display = "flex";
    document.querySelector(".redefinir_email").style.display = "none";
    document.getElementById("uljs1").style.color = "#9D6BFF";
    document.getElementById("uljs2").style.color = "#000";
}

function redefinir_emailjs() {

    document.querySelector(".redefinir_email").style.display = "flex";
    document.querySelector(".perfil").style.display = "none";
    document.getElementById("uljs1").style.color = "#000";
    document.getElementById("uljs2").style.color = "#9D6BFF";
}