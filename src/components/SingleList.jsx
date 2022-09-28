import React from "react";
import PropTypes from "prop-types";

// Single List Item
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      key={index}
      style={{
        backgroundColor: isSelected ? "green" : "red",
        marginBottom: "5px",
        cursor: "pointer",
        padding: "5px",
      }}
      onClick={() => {
        onClickHandler(index);
      }}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default WrappedSingleListItem;
