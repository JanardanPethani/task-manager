require('../src/db/mongoose')
const task = require('../src/models/tasks')

// withour async

// task.findByIdAndDelete('60195e7280d4491e2040bfa7').then((result) => {
//     console.log(result);
//     return task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

// with async

const removeTaskAndCount = async (id) => {
    const deletedTask = await task.findByIdAndDelete(id) // await task.findByIdAndDelete(id) will also work
    const count = await task.countDocuments({ completed: false })

    return count
}

removeTaskAndCount('601a2f84c8f46e371433b84e').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})