import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Product from './pages/Product/Product'

function App() {

  return (

    <Routes>

      <Route
        path='/'
        element={<Home />}
      />


      <Route
        path='/product/:id'
        element={<Product />}
      />


    </Routes>

  )

}

export default App