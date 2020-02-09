import React from 'react';
import Country from './components/Country';
import './App.css';

class App extends React.Component {
  
  render (){
    return (
        <div className = 'App'>
          <Country />
        </div>
    );
  }
}
export default App;