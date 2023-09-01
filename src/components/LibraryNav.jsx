import './libraryNav.css'
import NavUi from '../components/UI/NavUi'
import { libraryNavLinks } from '../data/data'

const LibraryNav = () => {
  return (
    <div className='library_nav_container'>
        <nav>
            <NavUi linkAdnIcon={libraryNavLinks}/>
        </nav>
    </div>
  )
}

export default LibraryNav