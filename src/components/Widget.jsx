// src/components/Widget.jsx
import React from 'react';
import './Widget.css';

/**
 * @param {{ widthUnits?: number, heightUnits?: number, children: React.ReactNode }} props
 * widthUnits: how many "units" wide this widget is (0.5 = half width, 1 = full width)
 * heightUnits: how many "units" tall this widget is (0.5 = half height, 1 = full height)
 */
const Widget = ({ widthUnits = 1, heightUnits = 1, children }) => {
  return (
    <div
      className="widget"
      style={{ '--width-units': widthUnits, '--height-units': heightUnits }}
    >
      {children}
    </div>
  );
};

export default Widget;
