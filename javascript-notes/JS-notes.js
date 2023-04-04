// KEY NOTES:

/*
1. Put the javascript at the bottom of the page\
2. To link <script scr="fileNAME.js"></script>
3. Use console log instead of alert most of the time
4.semicolons arent mandatory unless writing cultiple instructions on one line
5. Floats don't exist, treated as numbers, ints dont technically exist either

*/
// --------------------------------------------

// ALERT:
// _______________________________________

// alert('Hi');
// creates a pop up with the text
// ----------------------------------------------

// CONSOLE LOG:
// ________________________________________
// console.log('Hello there')
// displays text in the console of the browser
// ---------------------------------------------

// VARIABLES:
// ________________________________________
// There are 3 ways to declare variables
// var, let and const
// var is the old way and shouldnt be used as it is globa;
// let is not global but is reassaignable
// const is not global but is not reassaignable
// use const unless you know the value will change

// string
// const name = 'Ame';

// num
// let age = '19';

// bool
// let isSmart = false;

// decimals/still nums
// let rating = 7.5;

// null 
// const a = null;

// CONCATINATION:
// way 1:
// console.log('My name is ' + name + ', I am ' + age )

// way 2: template literals
// console.log(`'My name is ${name}, I am ${age}'`)
// do not forget the back ticks!

// STRING METHODS:

// length:
// console.log(name.length)

// upper/lowercasage:
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())

// substring:
// console.log(name.substring(0, 2))
// -----------------------------------------------

// ARRAY:
// _____________________________________________
// way 1:
// const numb = new Array(1,2,3,4,5)
// console.log(numb)

// way 2:
// const number = ['one', 'two', 'three', 'four', 5]
// console.log(number);

// RETRIEVING DATA:
// console.log(number[1]);

// ADDING TO THE END:
// way 1:
// number[5] = '6';
// console.log(number);

// way 2:
// number.push(7);
// console.log(number);

// ADDING TO THE FRONT:
// number.unshift('zero');
// console.log(number);


// REMOVE LAST
// number.pop()


// INDEX OF A VALUE
// console.log(number.indexOf('one'))


// ---------------------------------------------------

// OBJECT LITERALS/ DICTIONAIRIES:

// const person = {
// 	firstName:'John',
// 	lastName: 'Doe',
// 	age: 20,
// 	hobbies: ['music', 'sports', 'gaming'],
// 	// embedded objects
// 	adress: {
// 		street: 'big street',
// 		city: 'Smallville',
// 	}
// }
// use commas
// use colons instead of equals signs
// if you alert this youll just get object
// console.log(person)


// getting a single value:
// console.log(person.firstName)

// more than one thing:
// console.log(person.firstName, person.lastName)

// selecting from an array within the console:
// console.log(person.hobbies[0])

// get from a dictionary within the dictionary:
// console.log(person.adress.city)

// creating variables with destructuring:
// essentially pulling data from the dictionary as a new variable kind of
// const {firstName, lastName} = person;
// console.log(firstName)


// destructing embedded values:
// const {adress: {city}} = person
// console.log(city)

// ADD PROPERRIES:
// person.email = 'issjohnnydoe@yahoo.com';
// console.log(person);

// you can however alert the values
// alert(person.firstName)

// A lot of the time you will deal with arrays of objects(dictionary key value pairs)
// for example a todo list

// const todo = [
// 	{
// 		id: 1,
// 		text: 'Take out trash.',
// 		Completed: true
// 	},
// 	{
// 		id: 2,
// 		text: 'Meeting with boss.',
// 		Completed: true
// 	},
// 	{
// 		id: 3,
// 		text: ' Dentist appointment',
// 		Completed: false
// 	},
// ]

// selecting specific objects/values/data
// console.log(todo[0].text, todo[0].id, todo[0].Completed)
// -----------------------------------------------------------

// JSON:
// _________________________________________________
// a data format, used when sending data or recing data from and to the data
// is very similar to object literals
// go to google and search json convertet
// go to free formatter.com
// paste in your array
// you'll notice that the only difference from the text is that  you have double quotes
// when getting i ready to send to the server
// use the following method
// this is how you would send data to a server
// const todoJSON = JSON.stringify(todo);
// console.log(todoJSON)

// ----------------------------------------------------------

// LOOPS:
// _________________________

// FOR LOOPS:
// first initialise the variable like i
// then the condition
// then lastly the incrimentation
// then in curly braces the code
// seperate with semicolons
// for(let i = 0; i < 10; i++) {
// 	console.log(i)
// }


// WHILE LOOP:
// the difference is that the variable is defined outside the loop
// let b = 0
// while(b < 10){
// 	console.log(`Hi ${b}`)
// 	b += 1
// }

// LOOPING IN AN ARRAY
// for(let i = 0; i < todo.length; i += 1) {
// 	console.log(todo[i])
// }

// FOR OF LOOP:
// esentially is like getting the items of whatever is after of so practically the same code
// this way is closer to python
// for(let task of todo){
// 	console.log(task)
// }

// High Order Array Methods:
// The proper way of doing array iterations
// ForEach, Map, filter

// ForEach:
// For iteration
// take in as a paramete a function
// and a variable
// todo.forEach(function(todo) {
// 	console.log(todo)
// });

// Map:
// To create a New Array from an array
// all it does is return an array
// const todotext = todo.map(function(todo) {
// 	return(todo)
// });
// console.log(todotext)

// Filter:
// create a new array based on a condition
// const completedTodo = todo.filter(function(todo) {
// 	return todo.Completed == true
// });
// console.log(completedTodo)

// YOU CAN TACK ON MULTIPLE OF THESE METHODS
// const completedTodoArray = todo.filter(function(todo) {
// 	return todo.Completed == true
// }).map(function(todo){
// 	return todo
// })
// console.log(completedTodoArray)
// -----------------------------------------------------

// CONDITIONALS:
//_________________________________________________


// Double equals will chech if the values are equal
// Tripple equal will check that not only are the values equal but as well as the data type
// const x = 10;
// const y = 10;

// if (x == '10'){
// 	console.log('X is 10')
// } 

// if (y === '10'){
// 	console.log('y is 10')
// }
// else{
// 	console.log('Y is 10 but the datatypes clash')
// };

// multiple conditions
// OR OPERAND:
// if(x > 5 || y > 5){
// 	console.log('x or y are greater than 5')
// }

// AND OPERAND:
// if(x + y == 20 && x * y == 100){
// 	console.log('x and y are 10')
// } 

// The TERNIERY OPERATOR:
// a short hand if statement
// assigns variables based on a condition
// how:
// it defines a variable name
// then exquals sign
// then the condition
// then a question mark
// then you pass the value for the variable if the condition is true
// then a colon which stands for else
// then you pass the value of the variable id the condition is not true
// const x = 10;
// const color = x > 10 ? 'red': 'blue';
// console.log(color);

// SWITCHES:
// An alternate way of evaluating a condition

// const x = 10;
// const color = x > 10 ? 'red': 'blue';

// here we will evaluate the color
// what we do is set cases
// switch(color) {
// case 'red':
// 	console.log('color is red');
// 	break;
// case 'blue':
// 	console.log('color is blue')
// 	break;
// default:
// 	console.log('color is neither red or blue')
// 	break;
// }
// ------------------------------------------------------------

// FUNCTIONS:
// function addNums(num1, num2){
// 	return num1 + num2;
// }

// console.log(addNums(10, 4))

// ARROW FUNCTIONS:
// instead of using the key word function, name it as a variable
// after the equals sign put the inputs it takes then fat arrow => 
// then after the fat arrow you can open curly braces
// if you just want to return you can skip the curly braces and just write what you wanna return
// const addNumsarrow = (num1, num2) =>{
	// return num1 + num2;
// }
// console.log(`Slower Return = ${addNumsarrow(10, 4)}`)


// RETURNER
// if you only have one input you dont need the brackets
// These are perfect in conjuction with map, foreach and filter
// const addNumsarrow2 = (num1, num2) => num1 + num2;
// console.log(`Quick Return = ${addNumsarrow2(11, 10)}`)
// -------------------------------------------------------------

// OBJECT ORRIENTED PROGRAMMING (OOP):
// __________________________________________________________________

// uses constructure functions 
// two ways, construtor functions with prototypes ore with classes

// way 1: Prototypes:
// create a function, give it parameters
// the parameters are the properties of the class
// to set the parameters as properties use the this keyword
// just like the self keyword in python
// constructor function
// function Person(firstName, lastName, dob){
// 	this.firstName = firstName;
// 	this.lastName = lastName;

// 	// date constructor to change the string to a date object
// 	this.dob = new Date(dob);

// 	// Adding methods (function in a class):
// 	this.getBirthYear = function(){

// 		// get full year is a built in method of the date class
// 		return this.dob.getFullYear();
// 	}
// 	this.getFullName = function(){
// 		return `${this.firstName} ${this.lastName}`;
// 	}
// }

// instantiating
// use the new kew word
// const person1 = new Person('Ame', 'Kgomo', '8-29-2003');
// console.log(person1)
// console.log(person1.getFullName())
// console.log(person1.firstName)
// console.log(person1.getBirthYear())
// ==================================================================

// way 2: CLASSES
// class Person{
// 	constructor(firstName, lastName, dob){
// 		this.firstName = firstName
// 		this.lastName = lastName
// 		this.dob = dob
// 	}

	// creating methods
// 	getFullName(){
// 		return `${this.firstName} ${this.lastName}`
// 	}
// }

// person2 = new Person('Aish', 'Munhaar', '03-28-2003')

// console.log(person2.getFullName())
// -------------------------------------------------------------------------------

// THE DOM:
// __________________________________________________
// Window object is the parent object of the browser
// then document is after that
// the fetch api is in the window object


// SELECTION:
// selecting html elements and put them into variables


// Single Element Selectors:
// - - - - - - - - - - - - - 
// these will only select the first element with the id, class or element specified
// hence single element selector
// selects element by id
// you can console log it or even assaign it to a variable
// document.getElementById('myForm')
// const form = document.getElementById('myForm')
// console.log(form)

// querry selector
// you can select ainything
// console.log(document.querySelector('.container'))

// Multiple Element Selectors:
// - - - - - - - - - - - - - - 

// console.log(document.querySelectorAll('.item'))
// this will give us all the elements as a node list
// which is similar to an array
// you can run array methods on it
// you should always use this way of selecting multiple element

// alternative:
// console.log(document.getElementByClassName('item'))
// this gives you an html collection which you would have to then convert to an array
// so just use querySelectorAll
// You can also get by TagName

// EXAMPLE OF LOOPING THROUGH THE LIST
// const items = document.querySelectorAll('.item')
// items.forEach((item) => console.log(item));

// ____________________________________________________________________

// DOM MANIPULATION:
// grabbing the ul
// const ul = document.querySelector('.items');

// removing the element/list
// ul.remove();

// removing an item from the list
// ul.lastElementChild.remove()

// editing content and the first
// ul.firstElementChild.textContent = 'Hello';

// grabing the second one you use children[index] and then another way to cchange use innertext
// ul.children[1].innerText = 'Two';

// adding html use inner html
// ul.children[2].innerHTML = '<h4>Third</h4>'

// -------------------------------------------------

// CHANGING STYLES:
// ______________________________________________

// use the style method to change styles
// const btn = document.querySelector('.btn')
// btn.style.background = 'red'

// ----------------------------------------------------------------

// EVENTS:
// _______________________________________

// adding an event listener
// it takes two parameters, the event and then a function
// const btn = document.querySelector('.btn')
// btn.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	console.log('click');
// })

// by default when you press the sumit function it flashes quickly becuase its a submit type element
// this is because when you submit it submits to the file
// you have to prevent that parameter With preventDefault


// LOOK AT THE EVENT OBJECT:
// Gives various information on all the different events there are
// const btn = document.querySelector('.btn')
// btn.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	console.log(e);
// 	console.log(e.target.className)
// })
// look at target that will give the actual element that the event is on

// ------------------------------------------------------------------------------

// CHANGING THINGS ON EVENTS:
// this changes the background color of the form
// const btn = document.querySelector('.btn')
// btn.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	document.querySelector('#myForm').style.background = 'white';
// })


// YOU CAN ALSO ADD A CLASS
// to add or remove classes you use .classList.add or .remove

// const btn = document.querySelector('.btn')
// btn.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	document.querySelector('#myForm').style.background = 'black';
// 	document.querySelector('body').classList.add('bg-dark')

// 	// you can change text
// 	document.querySelector('.items').lastElementChild.innerHTML = '<h5>Hello Submitter</h5>'
// })

// TO DO HOVERS:
// Use mouseOver instead of click

// const btn = document.querySelector('.btn')
// btn.addEventListener('mouseover', (e) => {
// 	e.preventDefault();
// 	document.querySelector('#myForm').style.background = 'black';
// 	document.querySelector('body').classList.add('bg-dark')

// 	// you can change text
// 	document.querySelector('.items').lastElementChild.innerHTML = '<h5>Hello Submitter</h5>'
// })
// -----------------------------------------------------------------------------------


// MAKING THE APP USABLE:
// ____________________________________________________________________________

// Creating a form script:

// first defining variables and assigning dom elements to it
const myform = document.querySelector('#myForm')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#Email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

// then creating an event listener for submissions
// note you can name the function as the second parameter and then define the function afterwards
// the e paramaeter always stands for event
myform.addEventListener('submit', onSubmit)

function onSubmit(e) {
	e.preventDefault()

	// this checks if the text typed into the bars is empty or not
	// wont allow submission without both values and will alert you
	if(nameInput.value === '' || emailInput.value === ''){
		// using msg instead of alert
		// applied the styling of the uilt in error class
		msg.classList.add('error')
		msg.innerHTML = 'Please Enter All Fields'

		// making the message disappear with the set timeout method
		// it takes two parameters
		// first a function
		// then the time it should take in miliseconds
		setTimeout(() => msg.remove(), 3000)
	}
	else{
		// if successful, trying to add it to the list element
		// use the variable and the create element method
		const li = document.createElement('li')
		// then append a text node to the list item
		li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`))

		// now we append the new list item to the unordered list
		userList.appendChild(li)

		// lastly we need to clear the fields
		// set the name inputs and email inputs to nothing
		nameInput.value = ''
		emailInput.value = ''
	}
	
}