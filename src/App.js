import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React,{useState} from 'react';

import TextForm from './components/TextForm';
import Error from './components/Error';
import Alert from './components/Alert';
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  const[mode,setMode] = useState("rgba(255, 255, 255,0.5)");
  const[alert,setAlert] = useState(null);
  const[theme] = useState("rgb(128, 128, 128)");
  
  if(!document.body.style.backgroundColor){
    document.body.style.backgroundColor = "rgba(128, 128, 128,0.5)";
  }
  const toggleMode = (theme)=>{
    document.body.style.backgroundColor = null;
    document.body.style.backgroundColor = theme;

    
    setMode(("rgba(255,255,255,0.5)"));
    // setMode(("rgba(255,255,255,0.5)"));
    // if(mode === "light"){
    //   setMode("dark");
    //   setTheme("rgb(255, 0, 0)");
      
    //   document.body.style.backgroundColor = "theme";
    //   showAlert("Dark mode has been enabled","success");
    // }
    // else{
    //   setMode("light");
    //   document.body.style.backgroundColor = "white";
    //   document.body.style.backgroundColor = "white";
    //   showAlert("Light mode has been enabled","success");
    // }
  }
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  } 
  
  return (
    <>
    {/* <Navbar title = "TextUtils" aboutText = "About Us" mode={mode} toggleMode={toggleMode} theme={theme}/> */}
    {/* <div className="hello"> Welcome</div> */}
    
    {/* <div className="container">
    <TextForm heading = "Enter Your Text" mode={mode} />
    <About/>
    <Error/>
    </div> */}

    <BrowserRouter>
      <Navbar title = "TextUtils" aboutText = "About Us" mode={mode} toggleMode={toggleMode} theme={theme}/>
      <Alert alert={alert}/>
      <div className="container">
    <Routes>
      <Route exact path="/" element={<TextForm heading = "Enter Your Text" mode={mode} showAlert={showAlert}/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="*" element={<Error/>}/>
    </Routes>
      {/* <Navbar/> */}

  
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
