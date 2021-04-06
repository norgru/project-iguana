//html elements and putting them in variables etc

console.log(window);//if we look in here 
//alert(1); //since window is the very top level object we don't need to put window. in front of it

//if we look within the window object in console we can see the document property
//the document property is where we have the DOM
//Document
//Object
//Model

//SINGLE ELEMENT SELECTORS
//console.log(document.getElementById('user-form')); //using the getElementById('user-form') function

const form = document.getElementById('user-form');
console.log(form);

console.log(document.querySelector('h1')); //this is a single element selector, so it's only going to select the first one

//MULTIPLE ELEMENT SELECTORS
console.log(document.querySelectorAll('.item')); //returns NodeList which you can use array methods on and its properties.
//the above can pass ID, class, tag, anything. USE THE ABOVE NOT BELOW.
console.log(document.getElementsByClassName('item'));//returns HTML collection of classes with that classname, can't use array methods, you have to convert it.

console.log(document.getElementsByTagName('li'));//does the same but with tagname

//Looping
const itemTime = document.querySelectorAll('.item');
itemTime.forEach((item) => console.log(item));

//let's grab stuff from the DOM aka elements or objects from the document/webpage
const ul = document.querySelector('.items');

//ul.remove(); //removes the list from webpage
//ul.lastElementChild.remove(); //removes last element from the list
ul.firstElementChild.textContent = 'Hello there son';
ul.children[1].innerText = 'Norman';
ul.lastElementChild.innerHTML = '<h1>That&#x27s it</h1>';

//ACTUALLY USING IT

const btn = document.querySelector('.submit-btn'); //grab button element
btn.style.background = '#E88EED'; // change the background colour

const button = document.querySelector('.submit-btn');
button.addEventListener('click', (e) => { //first thing you add to event listener is the event, second is the function that you want to run when event happens. Instead of 'click' you can do 'mouseover'
    console.log(e.target.className); //the function is an arrow function and you have to use an event object, in this case it's 'e', which doesn't matter

    /*
    document.querySelector('#user-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>NORMAN FERNANDO GRUNDY</h1>'
    */

});

const myForm = document.querySelector('#user-form'); //remember # for ids, . for classes
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);


function onSubmit(g){
    console.log(`First name is: ${nameInput.value}`);

    if(nameInput.value === '' || emailInput.value === ''){
        console.log('Please enter vessel amount field');

        msg.classList.add('error'); //add css 'error' class to msg
        msg.innerHTML = 'Please enter vessel amount field' //add value to msg

        setTimeout(() => msg.remove(), 3000);
    }
    else{
        console.log('Success');

        const newUser = document.createElement('li'); //creating a new list item when we submit
        newUser.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(newUser); //actually applying the new list item to the list, #users is in the html below the form and list.

        //clear fields
        //nameInput.value = '';
        //emailInput.value = '';
    }

}