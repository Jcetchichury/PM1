somaStatus = prompt (`
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

function validaVitoriaf2 (maiorf2) {
    if (maiorf2 == "Força") {
        if (Forca > forcaV2) {
            document.write (`
                <link rel="stylesheet" href="JonesS1.css">
                <button onclick="window.location.href = 'C:/Users/jcetc/Documents/Alura/projeto/PM1/Chefão/Junior/Junior.html'">Vitoria</button>
            `)
            return true
        } else {
            document.write (`
                <link rel="stylesheet" href="JonesS1.css">
                <button onclick="window.location.href = 'C:/Users/jcetc/Documents/Alura/projeto/PM1/Index.html'">derrota</button>
            `)
            return false
        } 
        
    } else if (maiorf2 == "Agilidade") {
        if (Agilidade > agilidadeV2) {
            document.write (`
                <link rel="stylesheet" href="JonesS1.css">
                <button onclick="window.location.href = 'C:/Users/jcetc/Documents/Alura/projeto/PM1/Chefão/Junior/Junior.html'">Vitoria</button>
            `)
            return true
        } else {
            document.write (`
                <link rel="stylesheet" href="JonesS1.css">
                <button onclick="window.location.href = 'C:/Users/jcetc/Documents/Alura/projeto/PM1/Index.html'">derrota</button>
            `)
            return false
        }
    } else if (maiorf2 == "Resistencia") {
        if (Resistencia > resistenciaV2) {
            document.write (`
                <link rel="stylesheet" href="JonesS1.css">
                <button onclick="window.location.href = 'C:/Users/jcetc/Documents/Alura/projeto/PM1/Chefão/Junior/Junior.html'">Vitoria</button>
            `)
            return true
        } else {
            document.write (`
                <link rel="stylesheet" href="JonesS1.css">
                <button onclick="window.location.href = 'C:/Users/jcetc/Documents/Alura/projeto/PM1/Index.html'">derrota</button>
            `)
            return false
        }
    }
}