const book = {
    title : 'Ego is the Enemy',
    author : 'Ryan Holiday'
}

const JSONbook = JSON.stringify(book)
console.log(JSONbook)

const bookObject = JSON.parse(JSONbook)
console.log(bookObject.author)