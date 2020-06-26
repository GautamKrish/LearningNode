let arr = ['Gautam', 'Krishnan', 20, true, {name : 'Gautam'}, function (){
    console.log('Hi!')
}]

console.log(arr.length, '\n')
for(let item of arr){
    console.log(item)
}

for(let item in arr){
    console.log(item,' ', arr[item])
}