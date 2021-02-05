require('../src/db/mongoose')
const User = require('../src/models/user')

// withour async

// User.findByIdAndUpdate('60195dbc2dd63430c44e1ebd', { age: 21 }).then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 21 })
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

// with async

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })

    return count
}

updateAgeAndCount('60195dbc2dd63430c44e1ebd', 25).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})