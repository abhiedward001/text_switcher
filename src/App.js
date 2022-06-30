import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Input from './components/Input'
import About from './components/About';
function App() {
  return (
    <>
    
      <Navbar Title={"Text_Switcher"} ></Navbar>
      <Input Heading={"Enter Your Text Below :-"}> </Input>
      <About></About>
    </>
  );
}

export default App;
