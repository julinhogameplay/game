const pedraElement = document.querySelector("button[name=stone]")
const papelElement = document.querySelector("button[name=paper]")
const tesouraElement = document.querySelector("button[name=scissors]")
const jogadorElement = document.querySelector("img[name=jogador]")
const botElement = document.querySelector("img[name=bot]")
const score1Element = document.querySelector("#score1")
const score2Element = document.querySelector("#score2")
const resultElement = document.querySelector("p[name=result]")
const itens = ["Pedra", "Papel", "Tesoura"]

let contadorJogador = 0
let contadorPc = 0
function alterarScore(){
    score1Element.innerHTML = `${contadorJogador}`
    score2Element.innerHTML = `${contadorPc}`
}
papelElement.addEventListener("click", () => {
    var bot = Math.floor(Math.random() * 3)
    jogadorElement.src = 'icon-paper.svg'
    switch(bot){
        case 0:
            botElement.src = 'icon-rock.svg'
            resultElement.innerHTML = "Ganhou"
            contadorJogador++
            break
        case 1:
            botElement.src = 'icon-paper.svg'
            resultElement.innerHTML = "Empate"
            break
        case 2:
            botElement.src = 'icon-scissors.svg'
            resultElement.innerHTML = "Perdeu"
            contadorPc++
            break
    }
    alterarScore()
})

tesouraElement.addEventListener("click", () => {
    var bot = Math.floor(Math.random() * 3)
    jogadorElement.src = 'icon-scissors.svg'
    switch(bot){
        case 0:
            botElement.src = 'icon-paper.svg'
            resultElement.innerHTML = "Ganhou"
            contadorJogador++
            break
        case 1:
            botElement.src = 'icon-rock.svg'
            resultElement.innerHTML = "Perdeu"
            contadorPc++
            break
        case 2:
            botElement.src = 'images/icon-scissors.svg'
            resultElement.innerHTML = "Empate"
            break
    }
    alterarScore()
})

pedraElement.addEventListener("click", () => {
    var bot = Math.floor(Math.random() * 3)
    jogadorElement.src = 'icon-rock.svg'
    switch(bot){
        case 0:
            botElement.src = 'icon-rock.svg'
            resultElement.innerHTML = "Empate"
            break
        case 1:
            botElement.src = 'icon-paper.svg'
            resultElement.innerHTML = "Perdeu"
            contadorPc++
            break
        case 2:
            botElement.src = 'icon-scissors.svg'
            resultElement.innerHTML = "Ganhou"
            contadorJogador++
            break
    
    }
    alterarScore()
})