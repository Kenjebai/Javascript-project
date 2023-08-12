const gmail_button = document.getElementById('gmail_button');
const gmail_input = document.getElementById('gmail_input');
const gmail_result = document.getElementById('gmail_result');

const regExp = /\w@gmail.com/ig
gmail_button.onclick = () => {
    if(regExp.test('sgH3kk_jj@gmail.com')){
        console.log('ok');
    }
}