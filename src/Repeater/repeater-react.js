import React from 'react';

const Repeater = ({ content, element, display }) => {
  return (
    <span>
      {
        content.map((model, i) => 
          React.createElement(element, { key: `${display}-${i}` }, `${model[display]}`)
        )
      }
    </span>
  );
};

export default Repeater;
