//-----------Monday 9/21 afternoon lecture--------------------
var Burglar = function(name, which){

	this.name  = name + which
	this.dexterity = Math.ceil(Math.random() * 10)
	this.ninja = this.dexterity > 7 
	this.stuff = ['diamonds', 'cash', 'guns', 'dagger of +3 dexterity', 'glass eyeball']
}

Burglar.prototype.burgle = function(victim){
	if ( victim.stuff.length){
	this.stuff.push(victim.stuff.pop())
	console.log(this.name + " now has " + this.stuff.join(', ') + '.')
	console.log(victim.name + " now has " + this.stuff.join(', ') + '.')
	} 
	else{
				cityOfThieves.splice(victim.which, 1, )
				console.log("hasta la vista, " + victim.name)
				console.log()
	}
}

var steve = new Burglar('Steve', 4, false)
// console.log(steve)


var otherDanielle = new Burglar('Danielle', 10, true)
// console.log(otherDanielle)

// steve.burgle(otherDanielle)


// otherDanielle.burgle(steve)

var cityOfThieves = [] //instances are usually referred to in arrays (rather than a new variable of a new Class instance)

for (var i = 0; i < 20; i++){

	cityOfThieves.push(new Burglar('steve', i))
}

var randomBurgle = function(){
	var burglar = cityOfThieves[Math.floor(Math.random()
 					* cityOfThieves.length)]

var victim = cityOfThieves[Math.floor(Math.random()
 				* cityOfThieves.length)]

burglar.burgle(victim)
}

// randomBurgle()


//------------Morning lecture, Tuesday 9/22----------------


var whatsMyName = function(){

	console.log('My name is' + this.name + '.')
}

whatsMyName()  //on a free-standing function, 'this' refers to the window


var whatsMyName = function(excited){
	var ending = excited ? '!!' : '.'
	console.log('My name is' + this.name + ending)
}

var alice = {

	name: "Alice",
	greet: whatsMyName
}
alice.greet() //on a function that is attached to an object (ie a method) this refers the host object. 

//IN javascript, functions are objects, so they can have their own methods. 3 examples: call, apply, and bind.
}

whatsMyName.call(alice, true, 'secondArg', 'thirdArg', 'fourthArg') //call whatsMyName, using the alice object as the context, ie. the value for 'this'

whatsMyName.apply(alice, [true, 'secondArg', 'thirdArg', 'fourthArg'])  //use apply as it's easier to read, and then the rest of the arguments are separated in an array. true matches first parameter of the function, then second and so forth. 

var myNumbers = [1, 20, -4, 10000, Math.PI]
console.log(Math.max(1, 20, -4, 10000, Math.PI))  //obvio that 10000 is biggest. However: could have an array of #s and you need to locate biggest.
console.log(Math.max.apply(null, myNumbers)



// var mapper = function(){
//     console.log(arguments)
//     biggerArgs = [].map.call(arguments, function(element){
//     return element * 10

// })
// console.log(biggerArgs)
// }
// mapper(1,2,3)


var HELLO = [].map.call('hello', function(element){
	return element.toUpperCase()
}).join('') //you can chain on a join method to an array directly. 

console.log(HELLO) //this will return an array-like string. 

//--------------------------


var bob = {
	name: 'Bob'
}
//bind returns a new function
//bobSaysHi is exactly the same as whatsMyName, but all references to 'this' are replaced with bob
var bobSaysHi = whatsMyName.bind(bob)
// var aliceSaysHi = bobSaysHi.bind(alice)
//pass in arguments as usual. A bound function call looks similar to a normal function call. Permanently bound.
bobSaysHi(true, 'secondArg', 'thirdArg', 'fourthArg')
aliceSaysHi()

var carlos = {
	name: 'Carlos'
}

var carlosIsHappyToMeetYou = whatsMyName.bind(carlos, true)
