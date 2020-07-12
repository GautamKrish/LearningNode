console.log('Inside client side javascript file')

fetch('http://puzzle.mead.io/puzzle').then((response) =>{
    response.json().then((data) => {
        console.log(data)
    })
})