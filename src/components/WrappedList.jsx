import PropTypes from "prop-types";
import React, { useState, useEffect, memo } from "react";

import WrappedSingleListItem from "./SingleList";

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({ items }) => {
  const [itemsState, setItemsState] = useState([]);
  useEffect(() => {
    setItemsState(items);
  }, [items]);

  const handleClick = (targetIndex) => {
    let updateItems = itemsState.map((item, index) => {
      return targetIndex === index
        ? { ...item, selected: !item.selected }
        : { ...item };
    });
    setItemsState(updateItems);
  };

  return (
    <ul style={{ textAlign: "left" }}>
      {itemsState?.map((item, index) => (
        <SingleListItem
          key={index}
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={item.selected}
        />
      ))}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired,
    })
  ),
};

WrappedListComponent.defaultProps = {
  items: undefined,
};

export default WrappedListComponent;
