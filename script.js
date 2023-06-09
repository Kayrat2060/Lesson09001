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
const messageBtn = document.querySelector('.messageBtn');
const message = document.querySelector('.message');
messageBtn.addEventListener('click', () => {
    message.classList.add("animate_animated", "animate_fadeInLeftBig");
    // message.setAttribute('visibility', 'visible');
    message.style.visibility = 'visible';
    console.log(message);
});


// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, 
// форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). 
// Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const form = document.querySelector('form');
const firstInput = document.querySelector('input.form-control');
const secondInput = document.querySelector('select.form-control');

form.addEventListener('submit', (event) => {    
    if(firstInput.value.trim() === '') {
        firstInput.setAttribute('class', 'error');
        event.preventDefault();
    }
    if(secondInput.value.trim() === '') {  
        secondInput.setAttribute('class', 'error');
        event.preventDefault();
    }
})  

firstInput.addEventListener('input', (event) => {
    if (event.target.value.trim() !== '') {
        firstInput.classList.remove('error');
    } else {
        firstInput.classList.add('error');
    }
})
secondInput.addEventListener('input', (event) => {
    if (event.target.value.trim() !== '') {
        secondInput.classList.remove('error');
    } else {
        secondInput.classList.add('error');
    }
})

