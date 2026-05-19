import {

Routes,
Route

}

from

'react-router-dom'


import Navbar

from

'./components/Navbar/Navbar'


import Footer

from

'./components/Footer/Footer'


import Home

from

'./pages/Home/Home'


import Product

from

'./pages/Product/Product'



function App(){


return(


<>


<Navbar/>


<Routes>


<Route

path='/'

element={

<Home/>

}

/>



<Route

path='/product/:id'

element={

<Product/>

}

/>



</Routes>



<Footer/>


</>


)


}


export default App