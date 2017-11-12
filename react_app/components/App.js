import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {Component} from 'react'

require('../../stylesheets/main.scss');

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="app-wrapper">
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

