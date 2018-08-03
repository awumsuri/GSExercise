import React, {PureComponent} from 'react'

class Results extends PureComponent {
    constructor(props) {
        super(props)
        this.answers = props.answers      
    }

    render() {
        const { answers, isComplete } = this.props
        return(
            <div>
                {
                  isComplete && ( " Results")  
                }
            </div>
        )
    }
}

export default Results