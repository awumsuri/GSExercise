import userInfo from '../../model/auth/userInfo'
import { delay } from '../helper'

export const authenticateUser = (username, password) => delay(200).then(() => (
    userInfo.filter(user => (user.username === username && user.password === password))[0]
)).catch((err) => {
    console.error(err)
})
