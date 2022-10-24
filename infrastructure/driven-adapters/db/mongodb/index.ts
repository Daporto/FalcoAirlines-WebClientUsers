const User = require('./models/User')
const {connect} = require('mongoose')

export default class MongoDB {
    userModel = User;

    connect = async () => {
        try {
            await connect(process.env.MONGODB_URI);
            console.log('Mongodb connected')
        } catch (error) {
            console.log(error)
        }
    }
}