import mongoose from 'mongoose'

const User = mongoose.model('usuarios',{
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String
});

export default User