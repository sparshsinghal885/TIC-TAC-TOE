console.log("Welcome to TIC TAC TOE")
let turn = 'X'
let gameover = false

// to change the turn 
const changeTurn = () => {
    if(turn === 'X')
    {
        return 'O'
    }else{
        return 'X'
    }
}
// to check the winner 
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('text')
    const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    wins.forEach(function(e){
        if((boxtexts[e[[0]]].innerText === boxtexts[e[1]].innerText) &&(boxtexts[e[[2]]].innerText === boxtexts[e[1]].innerText) && boxtexts[e[0]].innerText != ''){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won"
            gameover = true;
        }
    })
}

let boxes = document.getElementsByClassName('cell')

Array.from(boxes).forEach(function (element) {
    let boxtext = element.querySelector('.text')
    element.addEventListener('click',() => {
        if(boxtext.innerText === ''){
            boxtext.innerText = turn
            turn = changeTurn()
            checkWin()
            if(gameover == false){
                document.querySelector('.info').innerText = "Turn for " + turn
            }
        }
    })
})

let boxtext = document.getElementsByClassName('text')
document.querySelector('#reset').addEventListener('click', (e) => {
    Array.from(boxtext).forEach(function(element){
        element.innerText = ''
    })
    turn = 'X'
    gameover = false
    document.querySelector('.info').innerText = "Turn for " + turn
})