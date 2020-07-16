const userLogin = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(email, password)
            console.log('Logging in....')
            resolve(email)
        }, 1000);
    })

}


userLogin('gautam@gmail.com', '12345')
    .then(email => {
        console.log(email)
    })
    .catch(error => console.log(error))