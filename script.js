const player = document.getElementById('player').getContext("2d")
const cpu = document.getElementById('cpu').getContext("2d")
let result = null
let imageCom = null
let timer = null
let comChoice = null
let x = 1

document.querySelectorAll('img').forEach(i => {
    i.onclick = (event) => {
        while (x === 1) {
            x = 0
            setTimeout(lag, 3500)
        // This is where you do stuff
        console.log(event.target)
        const pChoice = event.target.id
        const comNum = Math.floor(Math.random() * 3)
        if (comNum === 0) {
             comChoice = 'Rock'
        } else if (comNum === 1) {
             comChoice = 'Paper'
        } else if (comNum === 2) {
             comChoice = 'Scissors'
        }
        console.log('Com ' + comChoice)
        if (pChoice === comChoice) {
            console.log('Tie')
            result = 'Tie'
            //document.body.style.backgroundColor = "yellow";
        } else if (pChoice === 'Rock') {
            if (comChoice === 'Paper') {
                console.log('Loss')
                result = 'Loss'
                //document.body.style.backgroundColor = "red";
            } else {
                console.log('Win')
                result = 'Win'
                //document.body.style.backgroundColor = "green";
            }
        } else if (pChoice === 'Paper') {
            if (comChoice === 'Scissors') {
                console.log('Loss')
                result = 'Loss'
                //document.body.style.backgroundColor = "red";
            } else {
                console.log('Win')
                result = 'Win'
                //document.body.style.backgroundColor = "green";
            }
         } else if (pChoice === 'Scissors') {
                if (comChoice === 'Rock') {
                    console.log('Loss')
                    result = 'Loss'
                    //document.body.style.backgroundColor = "red";
                } else {
                    console.log('Win')
                    result = 'Win'
                    //document.body.style.backgroundColor = "green";
                }
            }
            showPlayerSelection(pChoice)
            showComputerSelection()
        }
    }
})


function showPlayerSelection(selection) {
    player.clearRect(0,0, 300, 300)
    const image = document.getElementById(selection)
    player.drawImage(image, 100, 100);

}

function shuffle() {
    cpu.clearRect(0, 0, 300, 300)
    const shuffleNum = Math.floor(Math.random() * 3)
    let shuffleChoice = null
    if (shuffleNum === 0) {
         shuffleChoice = 'Rock'
    } else if (shuffleNum === 1) {
         shuffleChoice = 'Paper'
    } else if (shuffleNum === 2) {
         shuffleChoice = 'Scissors'
    }
    const shuffleImage = document.getElementById(shuffleChoice)
    cpu.drawImage(shuffleImage, 100, 100);
}

function fix() {
    cpu.clearRect(0, 0, 300, 300)
}

function final(selection) {
    imageCom = document.getElementById(selection)
    cpu.drawImage(imageCom, 100, 100);
    if (result === 'Tie') {
        document.body.style.backgroundColor = "yellow";
    } else if (result === 'Win') {
        document.body.style.backgroundColor = "green";
    } else if (result === 'Loss') {
        document.body.style.backgroundColor = "red";
    }
}

function showComputerSelection(){
    document.body.style.backgroundColor = "white";
    cpu.clearRect(0, 0, 300, 300)
    timer = setInterval(shuffle, 100)
    setTimeout(clearInterval, 3000, timer)
    setTimeout(fix, 3000)
    setTimeout(final, 3000, comChoice)
}

function lag() {
    x = 1
}