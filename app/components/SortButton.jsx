import React from 'react';
import PropTypes from 'prop-types';

const SortButton = ({ size, color, children, className, onClickEvent }) => (
  <button
    className={className}
    onClick={onClickEvent}
  >
    {children}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={size}
      height={size}
      viewBox="0 0 16 16"
    >
      <path fill={color} d="M11 7h-6l3-4z" />
      <path fill={color} d="M5 9h6l-3 4z" />
    </svg>
  </button>
);

SortButton.defaultProps = {
  color: 'rgba(0, 0, 0, 0.6)',
  size: 24,
};

SortButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  onClickEvent: PropTypes.func.isRequired,
};

export default SortButton;
