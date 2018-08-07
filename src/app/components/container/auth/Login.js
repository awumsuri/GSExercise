import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { authenticate } from '../../../actions/auth/authActions'
import { LoginView } from '../../presentation/auth/LoginView'
import Assessment from '../assessment/Assessment'

class Login extends PureComponent {
    constructor(props) {
        super(props)  
        this.handleSubmitClick = this.handleSubmitClick.bind(this)
        this.handleOnInputChange = this.handleOnInputChange.bind(this)    
    }

    state = {
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

    handleSubmitClick() {
        const { dispatchLogin } = this.props
        const { username, password } = this.state
        
        dispatchLogin(username, password)
    }

    render() {
        const { authenticated, user } = this.props.auth

        return (
           authenticated ?
            <Assessment fullName={user.name}/> : 
            <LoginView authenticated={authenticated} 
                onClick={this.handleSubmitClick} 
                onChange={this.handleOnInputChange} 
            /> 
        )
    }
}

const mapStateToProps = state => ( { ...state } )

const mapDispatchToProps = dispatch => ({
    dispatchLogin: (username, passoword) => authenticate(dispatch, username, passoword)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
