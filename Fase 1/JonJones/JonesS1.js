var Forca = 9
var Agilidade = 6
var Resistencia = 5
var somaStatus = prompt (`
    Seus Status são Força: ${Forca} Agilidade: ${Agilidade} Resistencia: ${Resistencia}
    Agora vamos treinar. 
    Voce quer treinar \n 
    Força, Agilidade, Resistencia \n
    Digite o que quer treinar 
`)
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

function validaVitoria (maior) {
    if (maior == "Força") {
        if (Forca > forcaV1) {
            document.write (`
                <link rel="stylesheet" href="JonesS1.css">
                <button onclick="window.location.href = './../../Fase2/Jones/JonesF2.html'" >Vitoria</button>
            `)
            return true
        } else {
            document.write (`
                <link rel="stylesheet" href="JonesS1.css">
                <button onclick="window.location.href = './../../index.html'">derrota</button>
            `)
            return false
        } 
        
    } else if (maior == "Agilidade") {
        if (Agilidade > agilidadeV1) {
            document.write (`
                <link rel="stylesheet" href="JonesS1.css">
                <button onclick="window.location.href = './../../Fase2/Jones/JonesF2.html'" >Vitoria</button>
            `)
            return true
        } else {
            document.write (`
                <link rel="stylesheet" href="JonesS1.css">
                <button onclick="window.location.href = './../../index.html'">derrota</button>
            `)
            return false
        }
    } else if (maior == "Resistencia") {
        if (Resistencia > resistenciaV1) {
            document.write (`
                <link rel="stylesheet" href="JonesS1.css">
                <button onclick="window.location.href = './../../Fase2/Jones/JonesF2.html'" >Vitoria</button>
            `)
            return true
        } else {
            document.write (`
                <link rel="stylesheet" href="JonesS1.css">
                <button onclick="window.location.href = './../../index.html'">derrota</button>
            `)
            return false
        }
    }
}