
import './App.css'

import Portada from './views/Portada'
import Frase from './views/Frase'
import CuentaRegresiva from './views/CuentaRegresiva'
import Varios from "./views/Varios"

function App() {
  

  return (
    <>
       <aside className='fondo1'>
        
      <Portada></Portada>
      <Frase></Frase>
       </aside>
       <CuentaRegresiva></CuentaRegresiva>
       <Varios></Varios>

     
      
    </>
  )
}

export default App
