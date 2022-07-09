import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Input from './components/Input'
import About from './components/About';
import { useState } from 'react';


function App() {
  const [mode,setMode] = useState("light");
  const[navmode,setNavmode]=useState("primary");
  // document.body.style.backgroundColor="#edddd8";
  const toggle_navbar=()=>{
    if(navmode==="primary"){
      setNavmode("dark");
    }
    else setNavmode("primary");
    if(mode==="light"){
      setMode("dark");
      // const color1="#96830d";
      // const degree='45deg';
      // const color2='transaprent';
      document.body.style.backgroundColor=`rgb(84,115,124)`;
      // document.body.style.background-Image=`lienar-gradient(${degree},${color1},${color2})`; 
    }
    else {
      setMode("light");
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
    
      <Navbar Title={"Text_Switcher"} mode={navmode} toggle_navbar={toggle_navbar}></Navbar>
      <Input Heading={"Enter Your Text Below :-"} mode={mode}> </Input>
      {/* <About></About> */}
    </>
  );
}

export default App;
