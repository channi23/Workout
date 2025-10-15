import React from 'react';

function DisplayFunctional(props) {
  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <h2>DisplayFunctional Component</h2>
      <p>Message: {props.message}</p>
      <p>Count: {props.count}</p>
    </div>
  );
}

class DisplayClass extends React.Component {
  render() {
    return (
      <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
        <h2>Class Component</h2>
        <p>Message: {this.props.message}</p>
        <p>Count: {this.props.count}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>React Props Example</h1>
      <DisplayFunctional message="Hello from Functional Component" count={10} />
      <DisplayClass message="Hello from Class Component" count={20} />
    </div>
  );
}

export default App;
