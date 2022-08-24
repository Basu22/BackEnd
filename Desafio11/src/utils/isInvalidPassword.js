import bcrypt from 'bcrypt'

function isValidPassword(plainPassword, hashedPassword) {
    return bcrypt.compareSync(plainPassword, hashedPassword);
    }

export default isValidPassword