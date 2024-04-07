const body = document.querySelector('body')
const header = document.querySelector('.header__content')
const tableId = document.getElementById('tableID')
const fio = document.getElementById('fio')
const newDateId = document.getElementById('newDate')
const changeDateId = document.getElementById('changeDate')
const searchInput = document.getElementById('search')
const btn = document.querySelector('.client__btn')
const page = document.querySelector('.page')
const tbody = document.querySelector('tbody')
const modalContent = document.getElementById('modal__content')
let html = document.documentElement;
const button = document.createElement('button')
let deleteUserBtn
let modalElement
const modalOpen = document.querySelector('.modal__open')
const modalElementDelete = document.createElement('div')
const modalHeader = document.createElement('div')
const h2 = document.createElement('h2')
const img = document.createElement('img')
button.append(img)
h2.classList.add('modal__title')
img.src = 'img/close.png'
let inputSurname
let inputName
let inputMiddlename
const inputTextSurName = document.createElement('p')
const inputTextName = document.createElement('p')
const inputTextMiddleName = document.createElement('p')
const addContacts = document.createElement('button')
const deleteTitle = document.createElement('h2')
const deleteText = document.createElement('p')
const addContactContent = document.createElement('div')
addContactContent.classList.add('addContactContent')
const addContactsText = document.createElement('h2')
addContactsText.textContent = 'Добавить контакт'
addContactsText.classList.add('addContactsText')
addContacts.classList.add('contacts__btn')
addContacts.type = 'button'
const saveBtn = document.createElement('button')
saveBtn.textContent = 'Сохранить'
saveBtn.classList.add('save__btn')
const cancelBtn = document.createElement('button')
cancelBtn.classList.add('delete__btn')
cancelBtn.type = 'button'
const loads = document.querySelector('.load__page')
const divId = document.createElement('div')
divId.classList.add('id__style')
const modalBody = document.createElement('div')
let selectBody = document.createElement('div')
let clientDo
let btnGroup
let changeBtn
let deleteBtn
let newSel
let contactIpnut
let select
let optionPhone
let optionEmail
let allInput
let sortCount = 0;
let restart;
let form

function inpClick() {

    inputSurname.oninput = function() {
        if (!inputSurname.focus()) {
            inputTextSurName.classList.add('surname__focus')
        }
    };
    inputName.oninput = function() {
        if (!inputName.focus()) {
            inputTextName.classList.add('name__focus')
        }
    };
    inputMiddlename.oninput = function() {
        if (!inputMiddlename.focus()) {
            inputTextMiddleName.classList.add('middlename__focus')
        }
    };
}

function removeElement(elementClass) {
    let element = document.getElementsByClassName(elementClass);
    while (element.length) {
        element[0].parentNode.removeChild(element[0]);
    }
}

function createForm() {
    form = document.createElement('form')
    const inputContent = document.createElement('div')
    modalElement = document.createElement('div')
    modalElement.classList.add('modal')
    modalElement.append(modalHeader)
    modalOpen.classList.add('open')
    modalElement.append(form)
    inputContent.classList.add('inputContent')
    inputSurname = document.createElement('input')
    inputName = document.createElement('input')
    inputMiddlename = document.createElement('input')
    inputSurname.classList.add('input__form')
    inputName.classList.add('input__form')
    inputMiddlename.classList.add('input__form')
    inputContent.append(inputSurname)
    inputContent.append(inputName)
    inputContent.append(inputMiddlename)
    inputContent.append(inputTextSurName)
    inputContent.append(inputTextName)
    inputContent.append(inputTextMiddleName)
    form.append(inputContent)
    form.append(addContactContent)
    form.append(saveBtn)
    form.append(cancelBtn)

    form.addEventListener('submit', e => {
        e.preventDefault()
        const data = {
            surname: inputSurname.value,
            name: inputName.value,
            lastName: inputMiddlename.value,
            contacts: []
        }
        if (newSel) {
            for (let i = 0; i < 10; i++) {
                if (newSel[i] && allInput[i]) {
                    data.contacts.push({
                        type: '',
                        value: ''
                    }, )
                    data.contacts[i].type = newSel[i].value
                    data.contacts[i].value = allInput[i].value
                }
            }
        }
        reqired(data)
    })
}

function reqired(data) {
    if (inputSurname.value === '' || inputName.value === '' || (contactIpnut && contactIpnut.value === '')) {
        saveBtn.classList.add('error__btn')
        if (inputSurname.value === '') {
            inputSurname.classList.add('input__error')
            inputSurname.addEventListener('keyup', () => {
                if (inputSurname.value.length >= 1) {
                    inputSurname.classList.remove('input__error');
                } else {
                    inputSurname.classList.add('input__error');
                }
            })
        }
        if (inputName.value === '') {
            inputName.classList.add('input__error')
            inputName.addEventListener('keyup', () => {
                if (inputName.value.length >= 1) {
                    inputName.classList.remove('input__error');

                } else {
                    inputName.classList.add('input__error');
                }
            })
        }
        if (contactIpnut) {
            if (contactIpnut.value === '') {
                contactIpnut.classList.add('input__error')
                contactIpnut.addEventListener('keyup', () => {
                    if (contactIpnut.value.length >= 1) {
                        contactIpnut.classList.remove('input__error');

                    } else {
                        contactIpnut.classList.add('input__error');
                    }
                })
            }
        }
    } else if (onSave) {
        saveBtn.addEventListener('click', onSave(data))
    }
}

function createModalDom() {
    modalHeader.append(h2)
    modalHeader.append(button)
    modalHeader.classList.add('modal__header')
    modalOpen.append(modalElement)
    html.classList.add('modal__opened')
    modalContent.classList.add('modal__dark')
    button.classList.add('modal__btn')
    addContactContent.append(addContacts)
    addContacts.append(addContactsText)
}

function newClient() {
    inputTextSurName.textContent = 'Фамилия'
    inputTextName.textContent = 'Имя'
    inputTextMiddleName.textContent = 'Отчество'
    inputTextSurName.classList.add('input__surname')
    inputTextName.classList.add('input__name')
    inputTextMiddleName.classList.add('input__middlename')
    h2.textContent = 'Новый клиент'
    divId.textContent = ''
    cancelBtn.textContent = 'Отмена'
    saveBtn.type = 'submit'
    saveBtn.style.display = 'block'
    cancelBtn.style.display = 'block'
    cancelBtn.addEventListener('click', () => {
        modalClose()
    })
}

btn.addEventListener('click', createModalWithForm)

function createModalWithForm() {
    createForm()
    createModalDom()
    inpClick()
    newClient()
}

async function getClient() {
    let result = await fetch(`http://localhost:3000/api/clients`)
    let response = await result.json()

    for (el of response) {
        let link = document.createElement('a')
        createString(el)
        link.href = `#${el.id}`
        link.innerHTML = link.href

        if (document.location.href == link.href) {
            userCard(el)
        }
    }

}

function times() {
    const loading = document.createElement('div')
    loading.classList.add('load__style')
    loads.append(loading)
    setTimeout(() => {
        loading.classList.remove('load__style')
        getClient()
    }, 500)
}

async function onSave(data) {
    const response = await fetch('http://localhost:3000/api/clients', {
        method: 'POST',
        body: JSON.stringify({
            name: data.name,
            surname: data.surname,
            lastName: data.lastName,
            contacts: data.contacts
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    tbody.innerHTML = ''
    times()
    modalClose()
}

addContacts.addEventListener('click', () => {
    addContact()
})

function createString(el) {
    const tr = document.createElement('tr')
    tr.classList.add('td__bg')
    page.addEventListener('click', () => {
        tr.classList.remove('find')
    })
    tbody.append(tr)
    const clientId = document.createElement('td')
    tr.id = el.id
    clientId.innerHTML = el.id.slice(3, 9)
    clientId.href = `#${el.id}`
    clientId.classList.add('link')
    clientId.onclick = function() {
        window.open(clientId.href, '_blank');
        document.location.href = ''
    }
    const clientFio = document.createElement('td')
    clientFio.className = 'full__name'
    clientFio.innerHTML = el.surname + ' ' + el.name + ' ' + el.lastName
    const clientDate = document.createElement('td')
    const clientNewGroup = document.createElement('div')
    const clientChangeGroup = document.createElement('div')
    clientChangeGroup.classList.add('data__group')
    clientNewGroup.classList.add('data__group')
    const newDate = el.createdAt.substring(0, 10).split('-').reverse().join('.')
    clientDate.classList.add('data__style')
    const newTime = el.createdAt.substring(11, 16)
    const newDateText = document.createElement('p')
    newDateText.classList.add('new__date')
    newDateText.innerHTML = newDate
    const newTimeText = document.createElement('p')
    newTimeText.classList.add('new__time')
    newTimeText.innerHTML = newTime
    clientNewGroup.append(newDateText, newTimeText)
    clientDate.append(clientNewGroup)
    const clientChangeDate = document.createElement('td')
    const changeDate = el.updatedAt.substring(0, 10).split('-').reverse().join('.')
    const changeTime = el.updatedAt.substring(11, 16)
    clientChangeDate.classList.add('data__style')
    const changeDateText = document.createElement('p')
    changeDateText.classList.add('new__date')
    changeDateText.innerHTML = changeDate
    const changeTimeText = document.createElement('p')
    changeTimeText.classList.add('new__time')
    changeTimeText.innerHTML = changeTime
    clientChangeGroup.append(changeDateText, changeTimeText)
    clientChangeDate.append(clientChangeGroup)
    const clientContacts = document.createElement('td')
    const contactsText = document.createElement('div')
    contactsText.classList.add('contacts__img')

    for (let key in el.contacts) {
        clientContacts.append(contactsText)
        if (el.contacts[key].type == 'Телефон') {
            const phoneImg = document.createElement('img')
            phoneImg.classList.add('cursor__img')
            phoneImg.src = 'img/phone.png'
            contactsText.append(phoneImg)
            phoneImg.dataset.tooltip = el.contacts[key].type + ':' + ' '
            phoneImg.dataset.tooltext = el.contacts[key].value
        }
        if (el.contacts[key].type == 'Email') {
            const mailImg = document.createElement('img')
            mailImg.classList.add('cursor__img')
            mailImg.src = 'img/mail.png'
            contactsText.append(mailImg)
            mailImg.dataset.tooltip = el.contacts[key].type + ':' + ' '
            mailImg.dataset.tooltext = el.contacts[key].value
        }
        if (el.contacts[key].type == 'Facebook') {
            const fbImg = document.createElement('img')
            fbImg.classList.add('cursor__img')
            fbImg.src = 'img/fb.png'
            contactsText.append(fbImg)
            fbImg.dataset.tooltip = el.contacts[key].type + ':' + ' '
            fbImg.dataset.tooltext = el.contacts[key].value
        }
        if (el.contacts[key].type == 'Vk') {
            const vkImg = document.createElement('img')
            vkImg.classList.add('cursor__img')
            vkImg.src = 'img/vk.png'
            contactsText.append(vkImg)
            vkImg.dataset.tooltip = el.contacts[key].type + ':' + ' '
            vkImg.dataset.tooltext = el.contacts[key].value
        }
        if (el.contacts[key].type == 'Другое') {
            const userImg = document.createElement('img')
            userImg.classList.add('cursor__img')
            userImg.src = 'img/user.png'
            contactsText.append(userImg)
            userImg.dataset.tooltip = el.contacts[key].type + ':' + ' '
            userImg.dataset.tooltext = el.contacts[key].value
        }
    }

    const contactShowBtn = document.createElement('button')
    contactShowBtn.classList.add('show__btn')
    let elem = []
    if (contactsText.childNodes.length >= 4) {
        contactsText.childNodes.forEach((e, i) => {
            if (i > 3) {
                elem.push(e)
                e.style.display = 'none'
                contactsText.append(contactShowBtn)
                contactShowBtn.innerText = `+` + elem.length
            }
            contactShowBtn.addEventListener('click', () => {
                e.style.display = 'inline-block'
                contactShowBtn.style.display = 'none'
                contactsText.childNodes.forEach((e, i) => {
                    if (i > 4) {
                        e.classList.add('icon__style')
                    }
                });
            })
        }, );
    }

    clientDo = document.createElement('td')
    btnGroup = document.createElement('div')
    btnGroup.classList.add('btn__group-block')
    changeBtn = document.createElement('button')
    deleteBtn = document.createElement('button')
    changeBtn.textContent = 'Изменить'
    changeBtn.classList.add('change__btn')
    deleteBtn.textContent = 'Удалить'
    deleteBtn.classList.add('change__delete-btn')
    btnGroup.append(changeBtn)
    btnGroup.append(deleteBtn)
    clientDo.append(btnGroup)
    tr.append(clientId)
    tr.append(clientFio)
    tr.append(clientDate)
    tr.append(clientChangeDate)
    tr.append(clientContacts)
    tr.append(clientDo)
    changeBtn.classList.add('btn__group')
    deleteBtn.classList.add('btn__group')
    changeBtn.addEventListener('click', () => {
        changePatch(el)
    })
    deleteBtn.addEventListener('click', () => {
        deleteUserModal(el)
    })
}

async function changeContact(el) {

    let values = Object.values(el.contacts);

    const inputAll = document.querySelectorAll('input.contact__input');
    const selectAll = document.querySelectorAll('select');

    for (let i = 0; i < values.length; i++) {
        values[i].type = selectAll[i].value
        values[i].value = inputAll[i].value
    }

    for (let i = 0; i < 10; i++) {
        if (newSel[i] && allInput[i]) {
            el.contacts.push({
                type: newSel[i].value,
                value: allInput[i].value
            })
        }
    }

    await fetch(`http://localhost:3000/api/clients/${el.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            surname: inputSurname.value,
            name: inputName.value,
            lastName: inputMiddlename.value,
            contacts: removeDuplicates(el.contacts)
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    tbody.innerHTML = '';
    times()
    modalClose()
}

async function deleteUser(el) {
    await fetch(`http://localhost:3000/api/clients/${el.id}`, {
        method: 'DELETE',
    })

    tbody.innerHTML = '';
    times()
}

function userCard(el) {
    createForm()
    inputTextSurName.classList.add('surname__focus')
    inputTextName.classList.add('name__focus')
    inputTextMiddleName.classList.add('middlename__focus')
    inputTextSurName.classList.add('input__surname')
    inputTextName.classList.add('input__name')
    inputTextMiddleName.classList.add('input__middlename')
    inputTextSurName.textContent = 'Фамилия'
    inputTextName.textContent = 'Имя'
    inputTextMiddleName.textContent = 'Отчество'
    h2.textContent = 'Карточка клиента'
    inputSurname.value = el.surname
    inputName.value = el.name
    inputMiddlename.value = el.lastName
    inputSurname.disabled = true
    inputName.disabled = true
    inputMiddlename.disabled = true

    for (const key in el.contacts) {
        addContact(key)
        selectBody
        select.parentNode.lastElementChild.lastElementChild.textContent = el.contacts[key].type
        contactIpnut.value = el.contacts[key].value
        select.disabled = true
        contactIpnut.disabled = true
        button.style.display = 'none'
    }
    saveBtn.style.display = 'none'
    addContacts.style.display = 'none'
    header.style.display = 'none'
    page.innerHTML = ''
    body.style.backgroundColor = "rgb(47 47 47 / 93%)"
    modalElement.style.boxShadow = "rgb(245 161 161 / 33%) 1px -3px 20px 14px"

    createModalDom()
}

function changePatch(el) {
    createForm()
    const saveChange = document.createElement('button')
    const daleteChange = document.createElement('button')
    form.append(saveChange)
    form.append(daleteChange)
    saveChange.textContent = 'Сохранить'
    daleteChange.textContent = 'Удалить клиента'
    saveChange.classList.add('save__btn')
    daleteChange.classList.add('delete__btn')
    saveChange.type = 'button'
    daleteChange.type = 'button'
    inputTextSurName.classList.add('surname__focus')
    inputTextName.classList.add('name__focus')
    inputTextMiddleName.classList.add('middlename__focus')
    inputTextSurName.classList.add('input__surname')
    inputTextName.classList.add('input__name')
    inputTextMiddleName.classList.add('input__middlename')
    inputTextSurName.textContent = 'Фамилия'
    inputTextName.textContent = 'Имя'
    inputTextMiddleName.textContent = 'Отчество'
    h2.textContent = 'Изменить данные'
    modalHeader.append(divId)
    divId.innerHTML = 'ID:' + ' ' + el.id.slice(3, 9)
    inputSurname.value = el.surname
    inputName.value = el.name
    inputMiddlename.value = el.lastName
    saveBtn.style.display = 'none'
    cancelBtn.style.display = 'none'
    saveChange.addEventListener('click', () => {
        if (inputSurname.value === '' || inputName.value === '' || (contactIpnut && contactIpnut.value === '')) {
            reqired()
        } else {

            changeContact(el)
        }

    })

    daleteChange.addEventListener('click', () => {
        deleteUserModal(el)
    })

    for (let key in el.contacts) {
        addContact()
        const deleteContact = document.createElement('button')
        deleteContact.classList.add('del__contact')
        deleteContact.classList.add('delete__contact')
        deleteContact.type = 'button'
        selectBody.append(deleteContact)
        select.parentNode.lastElementChild.lastElementChild.textContent = el.contacts[key].type
        select.firstChild.value = el.contacts[key].type
        contactIpnut.value = el.contacts[key].value
        deleteContact.addEventListener('click', () => {
            removeContact(selectBody)
            el.contacts.splice(0, 1)
        })
    }

    createModalDom()
}

function deleteUserModal(el) {
    deleteUserBtn = document.createElement('button')
    modalOpen.classList.remove('open')
    modalContent.classList.remove('modal__dark')
    modalElementDelete.append(modalBody)
    modalElementDelete.classList.add('modal__delete')
    modalElementDelete.classList.add('open')
    page.append(modalElementDelete)
    html.classList.add('modal__opened')
    modalContent.classList.add('modal__dark')
    button.classList.add('modal__btn')
    deleteTitle.textContent = 'Удалить клиента'
    deleteTitle.classList.add('delete__title')
    deleteText.classList.add('delete__text')
    deleteText.textContent = 'Вы действительно хотите удалить данного клиента?'
    deleteUserBtn.textContent = 'Удалить'
    deleteUserBtn.classList.add('save__btn')
    cancelBtn.textContent = 'Отмена'
    modalBody.append(deleteTitle)
    modalBody.append(deleteText)
    modalBody.append(button)
    modalBody.append(deleteUserBtn)
    modalBody.append(cancelBtn)
    modalBody.classList.add('modal__body')
    cancelBtn.addEventListener('click', () => {
        modalClose()
    })
    deleteUserBtn.addEventListener('click', () => {
        deleteUser(el)
        modalClose()
        deleteUserBtn.remove()
    })
}

function removeContact(arg) {
    let del = arg.parentNode.parentNode.getElementsByTagName('div')[2]
    del.parentNode.removeChild(del);
}

function modalClose() {
    removeElement('select__body')
    if (modalElement) {
        modalElement.remove()
    }
    modalOpen.classList.remove('open')
    modalContent.classList.remove('modal__dark')
    modalElementDelete.classList.remove('open')
    inputTextSurName.classList.remove('surname__focus')
    inputTextName.classList.remove('name__focus')
    inputTextMiddleName.classList.remove('middlename__focus')
    addContactContent.classList.remove('add__contacts-body')
    addContacts.classList.remove('contacts__btn-active')
    addContacts.style.display = 'flex'
    html.classList.remove('modal__opened')
    saveBtn.classList.remove('error__btn')
    if (deleteUserBtn) {
        deleteUserBtn.remove()
    }
}

window.addEventListener('click', e => {
    const target = e.target
    if (target == modalContent) {
        if (modalElement) {
            modalElement.classList.remove('open')
        }
        modalElementDelete.classList.remove('open')
        modalContent.classList.remove('modal__dark')
        modalClose()
    }
})

function addContact() {
    selectBody = document.createElement('div')
    selectBody.classList.add('select__body')
    select = document.createElement('select')
    const optionPhone = document.createElement('option')
    optionPhone.textContent = 'Телефон'
    const optionEmail = document.createElement('option')
    optionEmail.textContent = 'Email'
    const optionFacebook = document.createElement('option')
    optionFacebook.textContent = 'Facebook'
    const optionVk = document.createElement('option')
    optionVk.textContent = 'Vk'
    const optionOther = document.createElement('option')
    optionOther.textContent = 'Другое'
    contactIpnut = document.createElement('input')
    contactIpnut.classList.add('contact__input')
    contactIpnut.placeholder = 'Введите данные контакта'
    selectBody.append(select)
    select.append(optionPhone)
    select.append(optionEmail)
    select.append(optionFacebook)
    select.append(optionVk)
    select.append(optionOther)
    selectBody.append(contactIpnut)
    addContactContent.append(selectBody)
    addContacts.classList.add('contacts__btn-active')
    addContactContent.classList.add('add__contacts-body')
    let allSelect = document.querySelectorAll('div.select__body');
    newSel = document.querySelectorAll('select');
    allInput = document.querySelectorAll('input.contact__input');
    if (allSelect.length == 10) {
        addContacts.style.display = 'none'
    }
    const choices = new Choices(select, {
        searchEnabled: false,
        searchChoices: false,
        shouldSort: false,
        itemSelectText: '',
    })
}



function tooltip() {
    let tooltipElem;
    let toolText

    document.onmouseover = function(event) {
        let target = event.target;
        let tooltipHtml = target.dataset.tooltip;
        let toolTextHtml = target.dataset.tooltext;
        if (!tooltipHtml) return;
        tooltipElem = document.createElement('div');
        toolText = document.createElement('span');
        tooltipElem.className = 'tooltips';
        toolText.className = 'tooltext';
        tooltipElem.innerHTML = tooltipHtml;
        toolText.innerHTML = toolTextHtml
        document.body.append(tooltipElem);
        tooltipElem.append(toolText);
        let coords = target.getBoundingClientRect();
        let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
        if (left < 0) left = 0;
        let top = coords.top - tooltipElem.offsetHeight - 15;
        if (top < 0) {
            top = coords.top + target.offsetHeight + 5;
        }
        tooltipElem.style.left = left + 'px';
        tooltipElem.style.top = top + 'px';
    };
    document.onmouseout = function(e) {
        if (tooltipElem) {
            tooltipElem.remove();
            tooltipElem = null;
        }
    };
}

tooltip()

document.addEventListener("DOMContentLoaded", times);

function removeDuplicates(arr) {

    const result = [];
    const duplicatesIndices = [];

    arr.forEach((current, index) => {
        if (duplicatesIndices.includes(index)) return;
        result.push(current);
        for (let comparisonIndex = index + 1; comparisonIndex < arr.length; comparisonIndex++) {

            const comparison = arr[comparisonIndex];
            const currentKeys = Object.keys(current);
            const comparisonKeys = Object.keys(comparison);

            if (currentKeys.length !== comparisonKeys.length) continue;

            const currentKeysString = currentKeys.sort().join("").toLowerCase();
            const comparisonKeysString = comparisonKeys.sort().join("").toLowerCase();
            if (currentKeysString !== comparisonKeysString) continue;

            let valuesEqual = true;
            for (let i = 0; i < currentKeys.length; i++) {
                const key = currentKeys[i];
                if (current[key] !== comparison[key]) {
                    valuesEqual = false;
                    break;
                }
            }
            if (valuesEqual) duplicatesIndices.push(comparisonIndex);

        }
    });

    return result;
}

button.addEventListener('click', modalClose)

tableId.addEventListener('click', () => {
    sortId()
})

fio.addEventListener('click', () => {
    sortFio()
})

newDateId.addEventListener('click', () => {
    sortNewDate()
})

changeDateId.addEventListener('click', () => {
    sortChangeDate()
})

async function sortId() {
    let result = await fetch(`http://localhost:3000/api/clients`)
    let response = await result.json()
    let newId = []
    for (i of response) {
        newId.push(i)
    }
    if (sortCount == 0) {
        newId.sort((a, b) => a.id < b.id ? 1 : -1)
        sortCount = 1;
    } else {
        newId.sort((a, b) => a.id > b.id ? 1 : -1)
        sortCount = 0;
    }
    tbody.innerHTML = ''
    for (el of newId) {
        createString(el)
    }
}

async function sortFio() {
    let result = await fetch(`http://localhost:3000/api/clients`)
    let response = await result.json()
    let newId = []
    for (i of response) {
        newId.push(i)
    }

    if (sortCount == 0) {
        newId.sort((a, b) => a.surname < b.surname ? 1 : -1)
        sortCount = 1;
    } else {
        newId.sort((a, b) => a.surname > b.surname ? 1 : -1)
        sortCount = 0;
    }

    tbody.innerHTML = ''
    for (el of newId) {
        createString(el)
    }
}

async function sortNewDate() {
    let result = await fetch(`http://localhost:3000/api/clients`)
    let response = await result.json()
    let newId = []
    for (i of response) {
        newId.push(i)
    }

    if (sortCount == 0) {
        newId.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1)
        sortCount = 1;
    } else {
        newId.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1)
        sortCount = 0;
    }

    tbody.innerHTML = ''
    for (el of newId) {
        createString(el)
    }
}

async function sortChangeDate() {
    let result = await fetch(`http://localhost:3000/api/clients`)
    let response = await result.json()
    let newId = []
    for (i of response) {
        newId.push(i)
    }

    if (sortCount == 0) {
        newId.sort((a, b) => a.updatedAt < b.updatedAt ? 1 : -1)
        sortCount = 1;
    } else {
        newId.sort((a, b) => a.updatedAt > b.updatedAt ? 1 : -1)
        sortCount = 0;
    }

    tbody.innerHTML = ''
    for (el of newId) {
        createString(el)
    }
}

let newSearch = []

const fullName = document.getElementsByClassName('full__name')

async function search(inp, arr, el) {
    let result = await fetch(`http://localhost:3000/api/clients`)
    let response = await result.json()

    for (el of response) {
        newSearch.push(el.surname + ' ' + el.name)
    }

    let currentFocus

    inp.addEventListener("input", function(e) {
        let a, b, i, link, val = this.value;
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        a = document.createElement('div');
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement('div');
                link = document.createElement('a');
                link.classList.add('style__link')
                b.innerHTML = arr[i].substr(0, val.length);
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

                function filter() {
                    for (textName of fullName) {
                        if (textName.innerText.split(' ').slice(0, 2).join().replace(/,/gi, ' ') == b.innerText) {
                            link.href = `#${textName.parentNode.id}`
                        }
                    }
                    let newArr = newSearch.map(item => {
                        return item
                    })
                    newArr = newArr.filter(el => (el).toLowerCase().includes(inp.value.toLowerCase()))
                    if (newArr == inp.value) {
                        b.innerHTML = newArr
                        for (textName of fullName) {
                            if (textName.innerText.split(' ').slice(0, 2).join().replace(/,/gi, ' ') == b.innerText) {
                                textName.parentNode.classList.add('find')
                            }
                        }
                    }
                }

                b.addEventListener("click", function(e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    filter()
                    closeAllLists();
                });
                a.appendChild(link);
                link.appendChild(b);
                filter()
            }
        }
    });

    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        for (textName of fullName) {
            textName.parentNode.classList.remove('find')
        }
        if (x) x = x.getElementsByTagName('div');
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
}

search(document.getElementById("search"), newSearch);

const idText = document.querySelector('.id__text')
idText.classList.add('arrow__up')
idText.addEventListener('click', () => {
    idText.classList.toggle('arrow__down')
})

function myFunction(x) {
    if (x.matches) {
        table.classList.add('table-responsive')
    } else {
        table.classList.remove('table-responsive')
    }
}

const screen = window.matchMedia("(max-width: 760px)")
const table = document.querySelector('.new__table')
myFunction(screen)
screen.addListener(myFunction)