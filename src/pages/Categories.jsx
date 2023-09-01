import Catego from "../components/UI/Catego"
import './categories.css'
import { categories } from "../data/categories/data"
import { Link } from "react-router-dom"

import {SiSololearn} from 'react-icons/si'
import {BsFillFileEarmarkFontFill} from 'react-icons/bs'

const Categories = () => {
  return (
  <div className="container">
    <h4>Categories</h4>
    <div className="depency">
      <Link to="download/fonts" className="link download btn btn-primary font"><BsFillFileEarmarkFontFill/>font </Link>
      <Link to="/learn" className="link download btn btn-primary learn"><SiSololearn/> learn </Link>
    </div>
    <div className="categories_container">
      {
        categories.map(({id,name})=>{
          return(<Catego key={id} catgoName={name} className='category'/>)
        })
      }
    </div>
  </div>
  )
}

export default Categories