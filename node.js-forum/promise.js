// const delay = (time) => {
//     return new Promise((resolve, reject) => {
//         if (isNaN(time)) {
//             reject(new Error('delay requires a number to be passed in'))
//         } else {
//             setTimeout(() => {
//                 console.log(`Inside ${time / 1000} second(s) timer. About to call ${time / 1000 + 1} seconds timer.`)
//                 resolve(time + 1000)
//             }, time);
//         }

//     })
// }

// delay(1000)
//     .then((time) => delay(time))
//     .then((time) => delay(time))
//     .then((time) => delay('gautam'))
//     .then((time) => delay(time))
//     .catch((error) => {
//         console.log(error)
//     })

// delay('gautam')
//     .then(result => console.log(result))
//     .catch(error => console.log(error))




// to demostrate the resolve issue
// const delay = (time) => {
//     return new Promise((resolve, reject) => {
//         if (isNaN(time)) {
//             reject()
//         } else {
//             setTimeout(() =>{
//                 resolve()
//             }, time);
//         }

//     })
// }


// delay(1000)
//     .then(() => console.log('promise resolved'))
//     .catch(() => console.log('delay expects a valid number'))

const userLogin = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Logging in....')
            resolve(email)
        }, 1000);
    })

}


const userDetails = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetching user details for ${email}.......`)
            resolve({
                name: 'Gautam',
                age: 23,
                subscriptions: ['netflix', 'amazon prime'],
                playlists: ['pop', 'relax', 'edm']
            })
        }, 2000);
    })
}

const netflixDetails = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetching netflix information for ${name}.....`)
            resolve({
                favoriteTVSeries: ['Suits', 'Stranger Things', 'Sherlock'],
                favoriteGenre: ['drama', 'thriller']
            })
        }, 3000);
    })
}


const tvSeriesInfo = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetching all information for ${name}....`)
            resolve({
                name,
                genre: 'law&familydrama',
                protagonist: 'Harvey Spector',
                antagonist: 'Tanner'
            })
        }, 4000);
    })
}

userLogin('gautam@gmail.com', '12345')
    .then(email => userDetails(email))
    .then(user => {
        console.log(user)
        return netflixDetails(user.name)
    })
    .then(netflix => {
        console.log(netflix)
        return tvSeriesInfo(netflix.favoriteTVSeries[0])
    })
    .then(tvShow => console.log(tvShow))
    .catch(error => console.log(error))
