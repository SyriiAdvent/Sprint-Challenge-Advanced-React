import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import { useLocalStorage } from "./Hooks/useLocalStorage";
import NavBar from './Components/NavBar'
import PlayerCards from './Components/PlayerCards'
import BarChart from './Components/BarChart'

function App() {
  const [serverCall, setServerCall] = useLocalStorage("data", {});
  const [dataBool, setDataBool] = useState(false)
  const localData = localStorage.getItem('data')

  useEffect(() => {
    axios(`http://localhost:5000/api/players`)
      .then(res => {
        // console.log(res.data);
        setServerCall(res.data);
      })
      .finally(() => {
        setDataBool(true)
      })
      .catch(error => console.log(`Couldnt retreieve data. `, error));
  }, [dataBool]);

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <NavBar />
        {/* <BarChart data={localData} /> */}
      {localData ? JSON.parse(localData).map(ele => <PlayerCards key={ele.id} data={ele} /> ) : null }
      {/* {JSON.parse(localData).map(ele => <PlayerCards key={ele.id} data={ele} /> )} */}
    </div>
  )
}

export default App;