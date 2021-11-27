import './App.css';
import Main from './components/Main'
import Nav from './components/Nav'
import Home from './components/Home'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Main />
      <Nav />
      
    </div>
  );
}

export default App;
