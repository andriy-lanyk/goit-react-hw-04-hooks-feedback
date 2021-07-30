import React from "react";
import PropTypes from "prop-types";
import { Paragrapgh } from "./Notification.styles";

const Notification = ({ message }) => {
  return <Paragrapgh>{message}</Paragrapgh>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
