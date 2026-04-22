import React from 'react';


function Repeater({ element, content, display }) {
  return (
    <span>
      {
        content.map((model, i) => {
          return React.createElement(element, { key: i }, `${model[display]}`);
        })
      }
    </span>
  );
}

export default Repeater;
