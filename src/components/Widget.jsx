// src/components/Widget.jsx
import React from 'react';
import './Widget.css';

/**
 * Enhanced Widget component with improved grid positioning
 *
 * @param {Object} props
 * @param {number} [props.widthUnits=1] - Width in grid units (0-1)
 * @param {number} [props.heightUnits=1] - Height in grid units
 * @param {number} [props.row] - Starting row position (optional)
 * @param {number} [props.col] - Starting column position (optional)
 * @param {React.ReactNode} props.children - Widget content
 * @param {string} [props.className] - Additional CSS classes
 */
const Widget = ({
  widthUnits = 1,
  heightUnits = 1,
  row,
  col,
  children,
  className = '',
}) => {
  const style = {
    '--width-units': widthUnits,
    '--height-units': heightUnits,
  };

  // Add explicit grid positioning if provided
  if (row !== undefined) style['--row'] = row;
  if (col !== undefined) style['--col'] = col;

  return (
    <div className={`widget ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Widget;
