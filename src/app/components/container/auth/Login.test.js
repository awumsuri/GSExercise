import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import expect from 'expect'
import { Login } from './Login'
import { LoginView } from '../../presentation/auth/LoginView'
import { InputView } from '../../presentation/InputView'


Enzyme.configure({
    adapter: new Adapter()
})

const setup = () => {
    const props = {
        username: "suri",
        password: "surigs",
        auth: {
            authenticated: undefined
        }
    }
    const wrapper = mount(<Login {...props} />)

    return {
        props,
        wrapper
    }
}

describe("Test Login", () => {
    it("should render correctly", () => {
        const { wrapper } = setup()

        expect(wrapper.find(LoginView).length).toBe(1)        
        expect(wrapper.find(InputView).length).toBe(2)        
    })
})