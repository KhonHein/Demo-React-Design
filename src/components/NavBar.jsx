import './navbar.css'
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import NavUi from './UI/NavUi'
import { navBarLinks } from '../data/data'
const NavBar = () => {

    return (

    <div className='navbar_container'>
        <nav>
            <NavUi linkAdnIcon={navBarLinks}/>
            {/* <div className="humbagar"><AiOutlineMenuUnfold/></div> */}
        </nav>
    </div>
  )
}

export default NavBar