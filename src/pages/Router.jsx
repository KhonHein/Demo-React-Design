//import ReactDOM from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import NavBar from '../components/NavBar'

import {routes} from '../data/data'
const Router = () => {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            {/* <Route path='/' index element={<Home/>} /> */}
            {
              routes.map(({id,path,element})=>{
                return(
                  <Route key={id} path={path} element={element}/>
                )
              })
            }
            
        </Routes>
    </BrowserRouter>
  )
}

export default Router