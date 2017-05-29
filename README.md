# About

A simple element repeater based on objects

## Usage
```
npm i --save repeater-react
```


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