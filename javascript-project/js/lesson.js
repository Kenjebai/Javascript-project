
const tabContent = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let index = 0
let clear

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((i) => {
        i.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContent[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event1) => {
    if(event1.target.classList.contains('tab_content_item')){
        tabs.forEach((item, i) => {
            if(event1.target === item){
                hideTabContent()
                showTabContent(i)
                clearInterval(clear)
                autoTab(i)
            }
        })
    }
}

const autoTab = (i = 0) => {
    clear = setInterval(() => {
        i++
        if (i > tabContent.length - 1) {
            i = 0
        }
        if (i > tabs.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 3000)
}
autoTab(index)

// Converter

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')
const url = "../data/converter.json"

const converter = async (element, target, target2, isTrue) => {
    element.oninput = async () => {
        try {
            const response2 = await fetch(url)
            const response = await response2.json();
        
            switch(isTrue){
                case 'som':
                    target.value = (element.value / response.usd).toFixed(2)
                    target2.value = (element.value / response.eur).toFixed(2) 
                    break
                case 'usd':
                    target.value = (element.value * response.usd).toFixed(2)
                    target2.value = (element.value * (response.usd / response.eur)).toFixed(2)
                    break
                default:
                    target.value = (element.value * response.eur).toFixed(2)
                    target2.value = (element.value * (response.eur / response.usd)).toFixed(2) 
            }
            element.value === '' && (target.value = '')
            element.value === '' && (target2.value = '')
        } catch (error) {
            console.error('ERROR');
        }
        }
    }
// }

converter(som, usd, eur, 'som')
converter(usd, som, eur, 'usd')
converter(eur, som, usd, 'eur')

// Card

const card = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')
let count = 1

const fetchFunc = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        const data = await response.json()
        card.innerHTML = `
                     <p>${data.title}</p>
                     <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
                     <span>${data.id}</span>
                 `
    } catch (error) {
        console.error('ERROR');   
    }
}

const next = () => {
    count++
    if(count > 200){
        count = 1
    }
    fetchFunc()
}
const prev = () => {
    count--
    if(count < 1){
        count = 200
    }
    fetchFunc()
}
fetchFunc()
btnNext.onclick = () => {
    next()
}
btnPrev.onclick = () => {
    prev()
}

//2-дз

const asyncAwait = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.error('error');
    }
}
asyncAwait()
