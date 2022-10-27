const User = require('./models/User')
const {connect} = require('mongoose')
require('dotenv').config()


export default class MongoDB {
    userModel = User;

    connect = async () => {
        try {
            console.log("URI");
            console.log(process.env.MONGODB_URI)
            await connect(process.env.MONGODB_URI);
            console.log('Mongodb connected')
        } catch (error) {
            console.log(error)
        }
    }
}