import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './components/home'
import Buses from './components/Buses'
import Sidebar from './components/Sidebar'
import Navigate from './components/Navigate'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/book' element={
    <>

      <Navigate/>
      <div style={{display:"flex",flexDirection:"row",position:"absolute",top:"200px",marginLeft:'0px'} }>
      <Sidebar/>
      <Buses/>
      </div>
    </>
    }/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
