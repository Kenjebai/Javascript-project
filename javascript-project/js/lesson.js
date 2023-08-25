
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

const converter = (element, target, target2, isTrue) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "../data/converter.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()

        request.onload = () => {
            const response = JSON.parse(request.response)

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
        }
    }
}

converter(som, usd, eur, 'som')
converter(usd, som, eur, 'usd')
converter(eur, som, usd, 'eur')

