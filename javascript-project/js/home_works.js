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
let px1 = 0;
function right1(){
    px1++;
    child_block.style.left = `${px1}px`;
    if(child_block.style.left == '446px'){
        return false;
    }
    right1();
}
right1();
