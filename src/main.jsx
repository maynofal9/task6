import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root.jsx'

import Home from './components/header/Home.jsx'
import Sign from './components/sigin/Sign.jsx'
import SignUp from './components/sigin/SiginUp.jsx'

const routes=createBrowserRouter ([{
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
