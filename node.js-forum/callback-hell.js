// setTimeout(() => {
//     console.log('Inside 1 second timer. About to call 2 seconds timer')
//     setTimeout(() => {
//         console.log('Inside 2 seconds timer.About to call 3 seconds timer')
//         setTimeout(() => {
//             console.log('Inside 3 seconds timer. About to call 4 seconds timer')
//             setTimeout(() => {
//                 console.log('Inside 4 second timer.About to call 5 seconds timer')
//                 setTimeout(() => {
//                     console.log('Inside 5 seconds timer. Whoa! Finally callback hell ends')
//                 }, 5000);
//             }, 4000);
//         }, 3000);
//     }, 2000)
// }, 1000);



const userLogin = (email, password, callback) =>{
    setTimeout(() => {
        console.log(email, password)
        console.log('Logging in....')
        callback(email)
    }, 1000);
}


const userDetails = (email, callback) => {
    setTimeout(() => {
        console.log(`Fetching user details for ${email}.......`)
        callback({
            name : 'Gautam',
            age : 23,
            subscriptions : ['netflix', 'amazon prime'],
            playlists : ['pop', 'relax', 'edm'] 
        })
    }, 2000);
}

const netflixDetails = (name, callback) => {
    setTimeout(() => {
        console.log(`Fetching netflix information for ${name} `)
        callback({
            favoriteTVSeries: ['Suits', 'Stranger Things', 'Sherlock'],
            favoriteGenre : ['drama', 'thriller']
        })
    }, 3000);
}


const tvSeriesInfo = (name, callback) => {
    setTimeout(() => {
        console.log(`Fetching all information for ${name}`)
        callback({
            name : name,
            genre : 'law&familydrama',
            protagonist : 'Harvey Spector',
            antagonist : 'Tanner'
        })
    }, 4000);
}

userLogin('gautam@gmail.com', '12345', (email) => {
    console.log(`Successfully Logged in with email id : ${email}`)
    userDetails(email, (userInformation) => {
        console.log(userInformation)
        netflixDetails(userInformation.name, (netflix) => {
            console.log(netflix)
            tvSeriesInfo('Suits', (show) =>{
                console.log(show)
            })
        })
    })
})