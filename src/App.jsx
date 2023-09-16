import { useState } from "react";
import "./App.css";
import TicTacToe from "./components/TicTacToe";

const apikey = import.meta.env.VITE_APIKEY;

function App() {

  const [mode, setMode] = useState('light')
  const handleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
    }else setMode('light')
  }

  return <>
  <div className="test">
  <TicTacToe handleMode={handleMode} mode={mode} apikey={apikey}/>

  </div>
  </> 
}

export default App;
