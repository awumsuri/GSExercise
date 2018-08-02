import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { HeaderView } from '../../presentation/exam/Views'

class Exam extends PureComponent{
    constructor(props) {
        super()
    }

    render() {
       return (
            <HeaderView username={this.props.username} />
       )
    }
}

const mapStateToProps = state => ({state})
const mapDispatchToProps = dispatch => ({dispatch})

export default connect(mapStateToProps, mapDispatchToProps)(Exam)