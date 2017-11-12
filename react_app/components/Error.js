import React from 'react';
import {Component} from 'react';

class Error extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="error">
                {this.props.error.toString()}
            </div>
        )
    }
}

Error.propTypes = {
    error: React.PropTypes.object
};

export default Error;