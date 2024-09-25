var SetaEsquerda = window.document.getElementById("seta-esquerda")
var Leonardo = window.document.getElementById("Leonardo")
var Bruna = window.document.getElementById("Bruna")
var Samantha = window.document.getElementById("Samantha")
var SetaDireita = window.document.getElementById("seta-direita")

function RolarParaDireita() {
    Leonardo.style = "display:none"
    Samantha.style="display:flex"
    SetaDireita.style = "display:none"
    SetaEsquerda.style ="display:flex ; margin-top:55px"
}

function RolarParaEsquerda() {
    Leonardo.style = "display:flex"
    Samantha.style="display: none"
    SetaDireita.style = "display:flex ; margin-top:55px"
    SetaEsquerda.style ="display:none"
}
