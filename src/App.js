import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Input from './components/Input'
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {


  const [mode, setMode] = useState("light"); // state used for dark mode of whole body
  const [navmode, setNavmode] = useState("primary"); //state used for changing the navbar darkmode
  const [alert, setAlert] = useState(null);

  // document.body.style.backgroundColor="#edddd8";

  // this function is used for setting the alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }
      , 1500);

  }



  const toggle_navbar = () => {
    if (navmode === "primary") {
      setNavmode("dark");
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setNavmode("primary");
      showAlert("Light Mode has been enabled", "success");
    }
    if (mode === "light") {
      setMode("dark");
      // const color1="#96830d";
      // const degree='45deg';
      // const color2='transaprent';
      document.body.style.backgroundColor = `rgb(84,115,124)`;
      // document.body.style.background-Image=`lienar-gradient(${degree},${color1},${color2})`; 
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (

    <Router>

      <Navbar Title={"Text_Switcher"} mode={navmode} toggle_navbar={toggle_navbar}></Navbar>
      <Alert alert={alert}> </Alert>

      <Routes>
        <Route exact path="/" element={<Input Heading={"Enter Your Text Below :-"} mode={mode} showAlert={showAlert}> </Input>} />
        <Route exact path="/About" element={<About />} />
      </Routes>

    </Router>
  );
}

export default App;
