import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { authenticate } from '../../../actions/auth/authenticate'
import { LoginView } from '../../presentation/auth/LoginView'

class Login extends PureComponent {
    constructor(props) {
        super(props)  
        this.handleClick = this.handleClick.bind(this)
        this.handleOnInputChange = this.handleOnInputChange.bind(this)    
    }

    state = {
        username: null,
        password: null,
        authenthicated: false
    }

    handleOnInputChange(event) {

        const input = event.target
        const name = input.name
        const value = name !== 'password' ? input.value.toLowerCase() : input.value

        this.setState({
            [name]: value
        })
    }

    handleClick(event) {
        const { dispatchLogin } = this.props
        const { username, password } = this.state
        
        event.target.value
        dispatchLogin(username, password)
    }

    render() {
        const { authenticated } = this.props.auth
        return (
            <LoginView onClick={this.handleClick} onChange={this.handleOnInputChange} />
        )
    }
}

const mapStateToProps = state => ( { ...state } )

const mapDispatchToProps = dispatch => ({
    dispatchLogin: (username, passoword) => authenticate(dispatch, username, passoword)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
