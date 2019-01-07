import React, { Component, lazy, Suspense } from 'react';
import './App.css';

// import MyComponent from './Components/myComponent'
const MyComponent = lazy(()=> import('./Components/myComponent'))

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <div>Component which load first</div>
          <Suspense fallback={<div>Loading...</div>}>
            <MyComponent></MyComponent>
          </Suspense>
        </header>
      </div>
      
    );
  }
}

export default App;
