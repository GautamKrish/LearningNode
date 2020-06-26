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
//standard function will have it's own this binding
//arrow function will not have it's own this binding