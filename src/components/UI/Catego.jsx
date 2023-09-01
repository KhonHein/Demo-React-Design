import { Link } from 'react-router-dom'
import './catego.css'
const Catego = ({catgoName,className}) => {
  return (
    <div className='catego_container'>
      <Link className='link' to="/book_list">
      <div className={`catego_name ${className}`}>{catgoName}</div>
      </Link>
    </div>
  )
}

export default Catego