import React from "react";
import PropTypes from "prop-types";

function Validate({ validated }) {
  if (validated) {
    return <small className="success">Validated</small>;
  } 
  return null;
}

Validate.propTypes = {
  validated: PropTypes.bool.isRequired
};

export default Validate;
