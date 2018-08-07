import expect from 'expect'
import * as Actions from './authActions'
import * as ActionType from '../../reducers/auth/authReducer'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureMockStore([thunk]);

describe("Auth Action Test", () => {
    it('should succeed authnetication', (done) => {
        const username = "suri"
        const password = "surigs"
        const expectedAnswer = {
            type: ActionType.LOGIN,
            authenticated: true,
            user: { username: username, password: password, name: 'Suri Mtui' }
        }
        const store = mockStore({})

        Actions.authenticate(store.dispatch, username, password)

        setTimeout(() => {
            const action = store.getActions()[0]

            try {
                expect(action).toEqual(expectedAnswer)
                done()
            } catch(err) {
                done.fail(err)
            }
        }, 500)

    })

    it('should fail authnetication', (done) => {
        const username = "suri"
        const password = "surifail"
        const expectedAnswer = {
            type: ActionType.LOGIN,
            authenticated: false,
            user: {}
        }
        const store = mockStore({})

        Actions.authenticate(store.dispatch, username, password)

        setTimeout(() => {
            const action = store.getActions()[0]

            try {
                expect(action).toEqual(expectedAnswer)
                done()
            } catch(err) {
                done.fail(err)
            }
        }, 500)

    })
});