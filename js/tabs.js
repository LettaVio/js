const tabButtons = document.querySelectorAll(".design-list__item");
const tabDescriptios = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images')
const tabLeftImgs = document.querySelectorAll('.design-block__img')
const tabTitles = document.querySelectorAll('.design__title');




const changeContent = (array, value) => {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden')

        } else {
            elem.classList.add('hidden')
        }
    })
}

tabButtons.forEach((tabButton) => {
    tabButton.addEventListener('click', (event) => {
        const dataValue = tabButton.dataset.tabsHandler
        changeContent(tabDescriptios, dataValue)
        changeContent(tabImages, dataValue)
        changeContent(tabLeftImgs, dataValue)
        changeContent(tabTitles, dataValue)

        tabTitles.forEach((title) => {
            if (!title.classList.contains("hidden")) {
                document.title = title.innerText;
            }
        })



        tabButtons.forEach((btn) => {
            if (btn === event.target) {
                btn.classList.add('design-list__item_active')
            } else {
                btn.classList.remove('design-list__item_active')
            }
        })

    })
})