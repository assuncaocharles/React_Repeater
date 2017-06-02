# About

A simple element/component repeater based on objects

## Usage

```
npm i --save repeater-react
```

### Component Repeater

```
import RepeaterComponent from 'repeater-react';
```

```
import React, { Component } from 'react';

//This is the component you want to repeat

class MyComponent extends Component {

    render() {               
        return (            
            <h1 className={this.props.class}>{this.props.model.name}</h1>
        )
    }
}

export default MyComponent
```


```
  model = [{
    name  : "First"
  },
  {
    name  : "Last"
  }]

  myComponentProps = {
      class: 'MyCSSclass'
      //..Any other prop you have to passo to your component
  }

  render() {
    return (        
          <RepeaterComponent content={this.model} component={MyComponent} config={myComponentProps}></RepeaterComponent>        
      );
    }
  }
```


### Element Repeater

```
import Repeater from 'repeater-react';
```

```
 model = [{
    id: 0,
    name  : "First"
  },
  {
    id: 1,
    name  : "Last"
  }]


  render() {
    return (
      <Repeater element="div" content={this.model} display="name" />
    );
  }
```