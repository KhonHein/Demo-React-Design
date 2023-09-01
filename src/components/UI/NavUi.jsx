import './navUi.css'

import { Link } from 'react-router-dom'

const NavUi = ({linkAdnIcon}) => {
  return (
    <ul>
    {
        linkAdnIcon.map(({id,name,path,icon})=>{
            return(
                <li key={id}><Link className='link' to={path}>{icon}</Link></li>
            )
        })
    }
</ul>
  )
}

export default NavUi