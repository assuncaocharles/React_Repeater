import React from 'react';

const RepeaterComponent = ({ content, component, config }) => {
  return (
    <span>
      {
        content.map((model, i) => 
          React.createElement(component, { ...config, key: `model-${i}`, model }, null)
        )
      }
    </span>
  );
};

export { RepeaterComponent };
export default RepeaterComponent;
