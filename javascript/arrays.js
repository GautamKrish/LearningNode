let arr = ["Jazz", "Blues"]
arr.push("Rock-n-Roll")
let length = arr.length
arr[Math.floor(length/2)] = "Classics"
console.log(arr.shift)
arr.unshift("Rap", "Reggae")

console.log(arr)

arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

// arr[2](); as array is a special kind of object, upon calling this it will refer to current
// calling object and hence it refers to the array and prints it's metadata

arr = ['I', 'study', 'javascript', 'right', 'now']
//splice returns the array of removed elements
console.log(arr.splice(0,3))
console.log(arr)
