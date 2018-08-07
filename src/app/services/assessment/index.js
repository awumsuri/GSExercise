import { delay } from '../helper'

const getQuestions = () => (
    new Promise((resolve, reject) => {
        delay(200).then(() => {
            resolve(require("../../model/assessment/questions.json"))
        }).catch((err) => { reject(err) })
    })
)

export default { getQuestions }