import React from 'react';


function RepeaterComponent({ content, component, config }) {
  return (
    <span>
      {
        content.map((model, i) => {
          return React.createElement(component, { key: i, model: model, ...config }, null);
        })
      }
    </span>
  );
}

export default RepeaterComponent;
