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
        const name = event.target.name
        this.setState({
            [name]: event.target.value
        })
    }

    handleClick(event) {
        const {dispatchLogin, username, passoword, dispatch} = this.props
        
        event.target.value
        dispatchLogin(username, passoword)
    }

    render() {
        const { authenthicated } = this.props.auth
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
