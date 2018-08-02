import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { HeaderView } from '../../presentation/assessment/Views'

class Assessment extends PureComponent {
    constructor(props) {
        super()
    }

    render() {
       return (
           <div> <HeaderView title={"welcome " + this.props.username} /></div>
       )
    }
}

const mapStateToProps = state => ({state})
const mapDispatchToProps = dispatch => ({dispatch})

export default connect(mapStateToProps, mapDispatchToProps)(Assessment)