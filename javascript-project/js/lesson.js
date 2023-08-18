
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

