import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createHashRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root.jsx'

import Home from './components/header/Home.jsx'
import Sign from './components/sigin/Sign.jsx'
import SignUp from './components/sigin/SiginUp.jsx'

const routes=createHashRouter ([{
  path:'/', element:<Root/> ,children:[{
    path:'',element:<Home/>
    
  },{path:'signin',element:<Sign/> },{path:'siginup',element:<SignUp/>}
    ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={routes}/>
  </StrictMode>,
)
