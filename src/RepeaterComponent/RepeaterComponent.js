import React, { Component } from 'react';


class RepeaterComponent extends Component {
   
  render() {
    return (
        <span>
            {
                this.props.content.map((model, i)=>{                         
                    return React.createElement(this.props.component, Object.assign({key: i, model: model},this.props.config), null);    
                })
            }
        </span>
     ) 
  }

}

export default RepeaterComponent;
