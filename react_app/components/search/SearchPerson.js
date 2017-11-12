import React from 'react';
import {Component} from 'react';
import {Person} from './../../models';

class SearchPerson extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <figure className="person">
                {this.props.person.picture && <img className="person-picture" src={this.props.person.picture}/>}
                <figcaption>
                    {this.props.person.name}{this.props.person.age && ` (${this.props.person.age})`}
                    {this.props.person.phone &&
                    <span>, <a href={`tel:${this.props.person.phone}`} className="person-phone">{this.props.person.phone}</a></span>}
                </figcaption>
                <address>{this.props.person.address.toString()}</address>
            </figure>
        );
    }
}

SearchPerson.defaultProps = {
    person: new Person()
};

SearchPerson.propTypes = {
    person: React.PropTypes.objectOf(Person).isRequired
};

export default SearchPerson;