import React, { Component } from 'react';


class Repeater extends Component {
   
  render() {
    return (
        <span>
            {
                this.props.content.map((model, i)=>{                    
                    return React.createElement(this.props.element, {key: i}, `${model[this.props.display]}`);    
                })
            }
        </span>
     ) 
  }

}

export default Repeater;
