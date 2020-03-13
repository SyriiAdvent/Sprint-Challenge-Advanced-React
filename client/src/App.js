import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

import { useLocalStorage } from "./Hooks/useLocalStorage";
import NavBar from './Components/NavBar'
import PlayerCards from './Components/PlayerCards'
import BarChart from './Components/BarChart'

function App() {
  const [serverCall, setServerCall] = useLocalStorage("data", {});
  const localData = localStorage.getItem('data')

  useEffect(() => {
    axios(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(res.data);
        setServerCall(res.data);
      })
      .catch(error => console.log(`Couldnt retreieve data. `, error));
  }, []);

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <NavBar />
        <BarChart data={localData} />
      {JSON.parse(localData).map(ele => <PlayerCards key={ele.id} data={ele} /> )}
    </div>
  )
}

export default App;