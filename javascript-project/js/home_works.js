//1-дз

const gmail_button = document.getElementById('gmail_button');
const gmail_input = document.getElementById('gmail_input');
const gmail_result = document.getElementById('gmail_result');

const regExp = /\w@gmail.com/ig
gmail_button.onclick = () => {
    if(regExp.test(gmail_input.value)){
        gmail_result.innerHTML = 'ok';
        gmail_result.style.color = 'green';
    } else {
        gmail_result.innerHTML = 'not ok';
        gmail_result.style.color = 'red';
    }
}

// 2-дз

const child_block = document.querySelector('.child_block');

let pxY = 0;
let pxX = 0;
let pxX2 = 446;
let pxY2 = 446;
let moveBlock

moveBlock = () => {
    if(pxX < 446){
        pxX++
        child_block.style.left = `${pxX}px`
        setTimeout(moveBlock, 1) 
    }else 
    if(pxY < 446){
        pxY++
        child_block.style.top = `${pxY}px`
        setTimeout(moveBlock, 1)
    }else 
    if(pxX2 > 0){
        pxX2--
        child_block.style.left = `${pxX2}px`
        setTimeout(moveBlock, 1)
    }else 
    if(pxY2 > 0){
        pxY2--
        child_block.style.top = `${pxY2}px`
        setTimeout(moveBlock, 1)
    }
}
moveBlock()


// 3-дз

let interval = document.querySelector('.interval')
let start = document.getElementById('start')
let stop1 = document.getElementById('stop')
let reset = document.getElementById('reset')
let resume = document.getElementById('resume')

let num = 0
let count
let c
let s

c = start.onclick = () => {
    clearInterval(count)
    count = setInterval(() => {
    num++
    interval.innerHTML = num
}, 1000)
}

s = stop1.onclick = () => {
    clearInterval(count)
}

resume.onclick = () => {
    if(num == 0){
        s()
    }else{
    c()
    }
}

reset.onclick = () => {
    location.reload()
}



