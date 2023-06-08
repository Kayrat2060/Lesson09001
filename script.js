// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, 
// форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). 
// Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно 
// моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
const inputEl = document.querySelector('[id="from"]');
const spanEl = document.querySelector('span');
inputEl.addEventListener('input', (event) =>{
    spanEl.textContent = event.target.value;
})


// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.



// const form = document.forms[0]
// const list = document.querySelector('ul')
// list.addEventListener('click', (e) => {
// console.log('В первом UL в фазе захвата')
// const propagationControlMethodName =
// form.elements['propagation-control'].value
// if (propagationControlMethodName) {
// e[propagationControlMethodName]()
// }
// }, true)
// list.addEventListener('click', () => {
// console.log('Во втором UL в фазе захвата')}, true)
// list.addEventListener('click', () => {
// console.log('В первом UL в фазе всплытия')
// })
// Array.from(list.children).forEach((child) => {
// child.addEventListener('click', () => {
// console.log('В каждом LI в фазе всплытия')
// })
// })

// const checkbox = document.querySelector('input[type=checkbox]')
// checkbox.addEventListener('click', (event) => {
// console.log(event.target.checked) // true
// event.preventDefault()
// return false;
// })

// const eventOptions = {bubbles: true, cancelable: true}
// const event = new Event('click', eventOptions)
// event.view = window
// const mouseEvent = new MouseEvent('click', {
// ...eventOptions,
// view: window,
// })
// document.addEventListener('click', (event) => {
// console.log(event.isTrusted)
// })
// const button = document.querySelector('button')
// button.dispatchEvent(event)
// button.dispatchEvent(mouseEvent)
// button.click()

// const eventOptions = {bubbles: true, cancelable: true}
// const event = new Event('foo', eventOptions)
// event.detail = {text: 'Произвольный текст 1'}
// const customEvent = new CustomEvent('foo', {
// ...eventOptions,
// detail: {text: 'Произвольный текст 2'},
// })
// document.addEventListener('foo', (event) => {
// console.log(event.detail)
// })
// const button = document.querySelector('button')
// button.dispatchEvent(event)
// button.dispatchEvent(customEvent)

// const rabbit = document.querySelector('#rabbit')
// const button = document.querySelector('button')
// rabbit.addEventListener('hide', (event) => {
// if (confirm('Вызвать event.preventDefault()?')) {
// event.preventDefault()
// }
// })
// button.addEventListener('click', () => {
// const event = new CustomEvent('hide', {cancelable: true})
// const defaultPrevented = !rabbit.dispatchEvent(event)
// if (defaultPrevented) {
// console.log('Отменено обработчиком события');
// } else {
// rabbit.hidden = true
// }
// })