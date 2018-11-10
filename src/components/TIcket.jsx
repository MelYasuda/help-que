import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
    var ticketListStyles = {
        backgroundColor: '#ecf0f1'
        }
    return (
        <div style={ticketListStyles}>
            <h3>{props.location} - {props.names}</h3>
            <p><em>{props.issue}</em></p>
            <hr/>
        </div>
    );
}

Ticket.propTypes = {
    location: PropTypes.string.isRequired,
    names: PropTypes.string.isRequired,
    issue: PropTypes.string
};

export default Ticket;