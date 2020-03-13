import { useEffect } from 'react'
import { useLocalStorage, setValue } from './useLocalStorage'
import axios from 'axios'

export const useDataFetch = (key, initialValue) => {
  const [callServer, setCallServer] = useLocalStorage('data', {})
  
  const setServerData = (value) => {
    if(localStorage.getItem('data')) {
      axios(`${value}`)
      .then(res => {
        // console.log(res)
        setCallServer(res.data)
      })
      .catch(error => console.log(`Couldnt retreieve data. `, error))
    }
  }

  // useEffect(() => {
  //   if(!localStorage.getItem('data')) {
  //     axios(`${URL}`)
  //     .then(res => {
  //       console.log(res)
  //       setServerData(res.data)
  //     })
  //     .catch(error => console.log(`Couldnt retreieve data. `, error))
  //   }
  // }, [callServer])

  return [callServer, setServerData]
}