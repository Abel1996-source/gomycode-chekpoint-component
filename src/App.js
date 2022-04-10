
import React,{Component} from 'react';
import './App.css';
import Adress from './Component/Profile/Adress' ;
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

class App extends Component {
  render(){
    return (
      <div className="App">
        <ProfilePhoto/>
        <FullName/>
        <Adress/>
      </div>
    );
  }
  
}

export default App;
