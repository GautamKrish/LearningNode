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

// const random = async() => {
    
//     let time1 = await delay(1000)
//     let time2 = await delay(time1)
//     let time3 = await delay(time2)
//     let time4 = await delay(time3)
//     let time5 = await delay(time4)
// }

// random()
// .then(() => console.log('promise resolved'))
// .catch((error) => console.log(error))


const userLogin = (email, password) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(email, password)
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
                name : 'Gautam',
                age : 23,
                subscriptions : ['netflix', 'amazon prime'],
                playlists : ['pop', 'relax', 'edm'] 
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
                favoriteGenre : ['drama', 'thriller']
            })
        }, 3000);
    })
}


const tvSeriesInfo = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetching all information for ${name}....`)
            resolve({
                name : name,
                genre : 'law&familydrama',
                protagonist : 'Harvey Spector',
                antagonist : 'Tanner'
            })
        }, 4000);
    })
}


const details = async () => {
    let email = await userLogin('gautam@gmail.com', '12345')
    let user = await userDetails(email)
    console.log('line no 86')
    let netflix = await netflixDetails(user.name)
    let seriesInfo = await tvSeriesInfo(netflix.favoriteTVSeries[0])
    return seriesInfo
}

details()
.then(seriesInfo => console.log(seriesInfo))
.catch(error => console.log(error))

console.log('line no 96')
