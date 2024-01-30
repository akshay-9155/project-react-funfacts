import react, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';

function App() {
  const [darkMode, setdarkMode] = useState(false);
  const handleToggle = ()=>{
    setdarkMode(prevdarkMode => !prevdarkMode);
  }
  return (
    <div className="App">
        <Navbar darkMode = {darkMode} handleToggle = {handleToggle} />      
        <Main darkMode = {darkMode} />      
    </div>
  );
}

export default App;
