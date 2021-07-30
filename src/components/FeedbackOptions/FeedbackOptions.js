import React from "react";
import PropTypes from "prop-types";
import { Btn } from "./FeedbackOptions.styles";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Btn type="button" name={options} onClick={onLeaveFeedback}>
      {options}
    </Btn>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
