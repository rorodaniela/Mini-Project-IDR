const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY || "semangat"

export const generateToken = (payload) => {
    const token = jwt.sign(payload, SECRET_KEY)
    return token
}

export const cekToken = (token) => {
    return jwt.verify(token, SECRET_KEY)
}
