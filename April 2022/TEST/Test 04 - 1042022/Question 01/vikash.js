/*Question 01:--
Make an On-event handler in which you have to make an input box and a submit button. After clicking on submit button the input you gave should be displayed in an alert.*/

const apple = document.querySelector('button')
apple.addEventListener('click', print)

function print(){
    var bikash = document.getElementsByTagName('input')
    alert(document.getElementById("vik").value)
    } 