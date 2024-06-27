import { useState } from 'react'
import Navbar from"./components/Navbar";
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Route,Routes } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
       
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
