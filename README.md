# React Repeater

[![Greenkeeper badge](https://badges.greenkeeper.io/assuncaocharles/React_Repeater.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/repeater-react.svg)](https://badge.fury.io/js/repeater-react)

A simple, lightweight React component/element repeater that makes it easy to render lists of items without boilerplate code. Perfect for iterating over arrays and rendering repeated components or elements.

## Features

- 🎯 **Simple API**: Intuitive component-based or element-based repeating
- ⚡ **Lightweight**: Minimal dependencies
- 🔧 **Flexible**: Works with both custom components and HTML elements
- 📦 **Easy to use**: Works with objects and arrays out of the box

## Installation

```bash
npm install --save repeater-react
```

## Quick Start

### 1. Component Repeater

For rendering custom React components multiple times:

```javascript
import React, { Component } from 'react';
import RepeaterComponent from 'repeater-react';

// Create your component to repeat
class MyComponent extends Component {
  render() {
    return (
      <h1 className={this.props.class}>{this.props.model.name}</h1>
    );
  }
}

export default MyComponent;
```

Then use it in your parent component:

```javascript
import React, { Component } from 'react';
import RepeaterComponent from 'repeater-react';
import MyComponent from './MyComponent';

class App extends Component {
  state = {
    model: [
      { name: "First" },
      { name: "Last" }
    ],
    myComponentProps: {
      class: 'MyCSSclass'
      // Add any other props you want to pass to your component
    }
  };

  render() {
    return (
      <div>
        <RepeaterComponent 
          content={this.state.model} 
          component={MyComponent} 
          config={this.state.myComponentProps}
        />
      </div>
    );
  }
}

export default App;
```

### 2. Element Repeater

For rendering simple HTML elements:

```javascript
import React, { Component } from 'react';
import Repeater from 'repeater-react';

class App extends Component {
  state = {
    model: [
      { id: 0, name: "First" },
      { id: 1, name: "Last" }
    ]
  };

  render() {
    return (
      <Repeater 
        element="div" 
        content={this.state.model} 
        display="name" 
      />
    );
  }
}

export default App;
```

## API Reference

### RepeaterComponent

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `content` | Array | ✓ | Array of objects to repeat |
| `component` | Component | ✓ | React component to render for each item |
| `config` | Object | ✓ | Props to pass to each rendered component |

### Repeater

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `element` | String | ✓ | HTML element type (e.g., 'div', 'span', 'li') |
| `content` | Array | ✓ | Array of objects to repeat |
| `display` | String | ✓ | Property name to display from each object |

## Examples

### Component Repeater with Multiple Props

```javascript
const model = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 28 }
];

const config = {
  className: 'user-card',
  onClick: (item) => console.log(item)
};

<RepeaterComponent 
  content={model} 
  component={UserCard} 
  config={config}
/>
```

### Element Repeater with Different Elements

```javascript
// Render as list items
<Repeater 
  element="li" 
  content={items} 
  display="name" 
/>

// Render as paragraphs
<Repeater 
  element="p" 
  content={items} 
  display="description" 
/>
```

## Browser Support

Works with all modern browsers supporting ES6.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

MIT

## Author

[Charles Assuncao](https://charlesassuncao.tech)