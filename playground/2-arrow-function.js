// const square = function(x) {
//     return x*x
// }

// const square = (x) => {
//     return x*x
// }

const square = (x) => x * x

const event = {
    name : 'Birthday Party',
    guestList : ['Gautam', 'Katta', 'Shreyasi', 'Riya'],
    printGuestList() {
        console.log('Guest List for ', this.name )
        this.guestList.forEach((guest) => {
            console.log(guest + " is attending " + this.name)
        })
    }
}
console.log(square(3))
event.printGuestList()
//cannot access this property of the current calling object inside arrow function
//standard function will have it's own this binding. That is why while defining a method that uses 'this' inside it is preferred to use ES6 method definition syntax
//arrow function will not have it's own this binding