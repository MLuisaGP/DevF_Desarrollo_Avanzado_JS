import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    //Montaje
    console.log('Componente Montado');
    return ()=>{
      console.log('Componente Desmontado');

    }
  },[])//Se usa para los efectos secundarios
  return (
    <>
    </>
  )
}

export default App
