//* will run between req and route handler
//  next is used to state that we are done with middleware function

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down, Check back soon!')
// })
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SIGN)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!user) {
            throw new Error(user)
        }

        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' + e })
    }
}

module.exports = auth