# React Repeater

[![Greenkeeper badge](https://badges.greenkeeper.io/assuncaocharles/React_Repeater.svg)](https://greenkeeper.io/)

A lightweight React component library that provides two flexible repeater components for rendering lists of data. Perfect for rendering repeated elements or components from arrays of data.

## Features

- **Two repeater modes**: Element repeater and Component repeater
- **Simple API**: Easy to use with minimal configuration
- **Flexible data binding**: Works with any data structure
- **Lightweight**: Minimal dependencies (React only)

## Installation

```bash
npm install --save repeater-react
```

### Requirements

- React 16.4.1 or higher
- React DOM 16.4.1 or higher

## Quick Start

Choose between two repeater types based on your needs:

### 1. Element Repeater (Simpler)

Use this when you want to repeat **HTML elements** for simple display.

```javascript
import Repeater from 'repeater-react';

const model = [
  { id: 0, name: "First" },
  { id: 1, name: "Last" }
];

render() {
  return (
    <Repeater element="div" content={model} display="name" />
  );
}
```

**Output:**
```html
<span>
  <div>First</div>
  <div>Last</div>
</span>
```

### 2. Component Repeater (Advanced)

Use this when you want to repeat **React components** with full control and custom logic.

```javascript
import RepeaterComponent from 'repeater-react';
import MyComponent from './MyComponent';

class MyComponent extends Component {
  render() {
    return (
      <h1 className={this.props.class}>
        {this.props.model.name}
      </h1>
    );
  }
}

const model = [
  { name: "First" },
  { name: "Last" }
];

const myComponentProps = {
  class: 'MyCSSclass'
  // Any other props to pass to your component
};

render() {
  return (
    <RepeaterComponent 
      content={model} 
      component={MyComponent} 
      config={myComponentProps}
    />
  );
}
```

**Output:**
```html
<span>
  <h1 class="MyCSSclass">First</h1>
  <h1 class="MyCSSclass">Last</h1>
</span>
```

## API Reference

### Element Repeater (`Repeater`)

#### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `element` | string | Yes | HTML element tag name (e.g., "div", "li", "span") |
| `content` | array | Yes | Array of data objects to repeat |
| `display` | string | Yes | Property name from each object to display as content |

#### Example with List

```javascript
const items = [
  { id: 1, title: "Item 1" },
  { id: 2, title: "Item 2" },
  { id: 3, title: "Item 3" }
];

<Repeater element="li" content={items} display="title" />
```

### Component Repeater (`RepeaterComponent`)

#### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `component` | React.Component | Yes | React component class to repeat |
| `content` | array | Yes | Array of data objects to pass to each component instance |
| `config` | object | No | Additional props to pass to every component instance |

#### Notes

- Each data item is passed to the component as a `model` prop
- The `config` object props are merged with the `model` prop
- Each item receives a unique `key` prop automatically (using array index)

#### Example with Custom Component

```javascript
// ItemCard.js
class ItemCard extends Component {
  render() {
    const { model, variant } = this.props;
    return (
      <div className={`card card-${variant}`}>
        <h2>{model.title}</h2>
        <p>{model.description}</p>
      </div>
    );
  }
}

// Usage
const items = [
  { id: 1, title: "Card 1", description: "Description 1" },
  { id: 2, title: "Card 2", description: "Description 2" }
];

<RepeaterComponent 
  component={ItemCard}
  content={items}
  config={{ variant: 'primary' }}
/>
```

## Common Use Cases

### Rendering a List of Items

```javascript
<Repeater 
  element="li" 
  content={todoItems} 
  display="text" 
/>
```

### Rendering Complex Components

```javascript
<RepeaterComponent 
  component={UserProfile} 
  content={users}
  config={{ showDetails: true }}
/>
```

### Rendering a Table

```javascript
const rows = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 }
];

<table>
  <tbody>
    <Repeater element="tr" content={rows} display="name" />
  </tbody>
</table>
```

## Browser Support

This library uses standard React features and supports all browsers that React supports.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is available under the MIT License.

## Author

[Charles Assuncao](https://charlesassuncao.tech)

## Repository

[GitHub - assuncaocharles/React_Repeater](https://github.com/assuncaocharles/React_Repeater)

---

**Note:** This is a lightweight wrapper around React's `map()` function. For most projects, consider if using `array.map()` directly might be simpler and more idiomatic React.
