import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage, FormattedNumber, FormattedRelative} from 'react-intl';

class Greeting extends Component {
    render() {
        const {user} = this.props;

        return (
            <p>
                <FormattedMessage
                    id="greeting.welcome_message"
                    defaultMessage={`
                        Welcome {name}, 
                    `}
                    values={{
                        name: <b>{user.name}</b>,
                        
                        
                        
                    }}
                />
            </p>
        );
    }
}

Greeting.propTypes = {
    user: PropTypes.object.isRequired,
};

export default Greeting;