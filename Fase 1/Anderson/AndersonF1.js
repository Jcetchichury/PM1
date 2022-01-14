var Forca = 6
var Agilidade = 8
var Resistencia = 6
var somaStatus = prompt (`
    Seus Status são Força: ${Forca} Agilidade: ${Agilidade} Resistencia: ${Resistencia}
    Agora vamos treinar. 
    Voce quer treinar \n 
    Força, Agilidade, Resistencia \n
    Digite o que quer treinar 
`)
var vitoria = document.querySelector ("#Vitoria")
var botoes = document.querySelector ("#botoes")
var derrota = document.querySelector ("#derrota")
var vitoriaDiv = document.querySelector("#vitoriaDiv")
var derrotaDiv = document.querySelector("#derrotaDiv")
function addStatus (somaStatus) {
    if (somaStatus == "Força") { 
        return Forca++
    } else if (somaStatus == "Agilidade") {
        return Agilidade++
    } else if (somaStatus == "Resistencia") {
        return Resistencia++
    } else {
        somaStatus = prompt (`
        Seus Status são Força: ${Forca} Agilidade: ${Agilidade} Resistencia: ${Resistencia}
        Voce digitou algo diferente, Vamos tentar de novo.
        O que voce quer treinar \n
        Força, Agilidade, Resistencia \n
        Digite o que quer treinar
        `)
        return addStatus (somaStatus)
    }
}
addStatus (somaStatus)
document.write (`
    Seus Status são
    <br>Força: ${Forca}, Agilidade: ${Agilidade}, Resistencia: ${Resistencia}</br>
`)
function deuBom () {
    botoes.style.display = "none"
    vitoriaDiv.style.display = "flex"
    vitoria.addEventListener ("click",()=>{window.location.href = './../../Fase2/Anderson/AndersonF2.html'})
}
function deuRuim () {
    botoes.style.display = "none"
    derrotaDiv.style.display = "flex"
    derrota.addEventListener ("click",()=>{window.location.href = './../../Index.html'})
}
function validaVitoria (maior) {
    if (maior == "Força") {
        if (Forca > forcaV1) {
            deuBom ()
            return true
        } else {
            deuRuim ()
            return false
        } 
        
    } else if (maior == "Agilidade") {
        if (Agilidade > agilidadeV1) {
            deuBom ()
            return true
        } else {
            deuRuim ()
            return false
        }
    } else if (maior == "Resistencia") {
        if (Resistencia > resistenciaV1) {
            deuBom ()
            return true
        } else {
            deuRuim ()
            return false
        }
    }
}