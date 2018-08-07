import expect from 'expect'
import * as Auth from './authReducer'

describe("Auth Reducer", () => {
    it("should added state correctly with empty state", () => {
        const user = {
            username: "suri",
            password: "surigs",
            name: "Suri Mtui"
        } 
        const expectedAnswer = {            
            user: user,
            authenticated: true
        }

        const action = {
            type: Auth.LOGIN,
            user: user,
            authenticated: true
        }

        expect(Auth.authReducer(undefined, action)).toEqual(expectedAnswer)
    })

    it("should default state correctly", () => {
        const user = {
            username: "suri",
            password: "surigs",
            name: "Suri Mtui"
        } 
        const expectedAnswer = {}
        const action = {
            type: "N/A",
            user: user,
            authenticated: true
        }

        expect(Auth.authReducer(undefined, action)).toEqual(expectedAnswer)
    })


})