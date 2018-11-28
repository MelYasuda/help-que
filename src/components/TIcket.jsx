import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

function Ticket(props) {
  return (
    <div>
      <style jsx>{`
        div {
          background-color: red;
        }
      `}</style>
      <h3>
        {props.location} - {props.names}
      </h3>
      <h3>
          {displayTimeOpen(props.timeOpen)}
      </h3>
      <p>
        <em>{props.issue}</em>
      </p>
      <hr />
    </div>
  );
}

function displayTimeOpen(timeOpen) {
  return timeOpen.from(new Moment(), true);
}

Ticket.propTypes = {
  location: PropTypes.string.isRequired,
  names: PropTypes.string.isRequired,
  issue: PropTypes.string,
  timeOpen: PropTypes.instanceOf(Moment).isRequired
};

export default Ticket;
