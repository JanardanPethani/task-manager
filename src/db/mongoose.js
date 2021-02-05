const mongoose = require('mongoose')

mongoose.connect(process.env.MOBGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})