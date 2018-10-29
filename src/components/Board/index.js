import React, {Component} from 'react';

class Board extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span>
                    {this.props.text}
                </span>
                <br/>
                Hello i'am board
            </div>
        )
    }
}

export default Board