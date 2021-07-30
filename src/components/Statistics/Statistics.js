import React from "react";
import PropTypes from "prop-types";
import { Paragraph } from "./Statistics.styles";

const Statistics = (props) => {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <>
      <Paragraph>
        {Object.keys(props)[0]}: {good}
      </Paragraph>
      <Paragraph>
        {Object.keys(props)[1]}: {neutral}
      </Paragraph>
      <Paragraph>
        {Object.keys(props)[2]}: {bad}
      </Paragraph>
      <Paragraph>Total: {total}</Paragraph>
      <Paragraph>
        Positive feedback: {positivePercentage ? `${positivePercentage}%` : 0}
      </Paragraph>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
