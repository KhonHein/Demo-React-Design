import './library.css'
import Book from '../components/UI/Book'
//import LibraryNav from "../components/LibraryNav"
import { recent } from '../data/library/data'

const Library = () => {
  return (
    <div className='library_container'>
      {/* <div className="library-navbar">
        <LibraryNav/>
      </div> */}
      <div className="library_content">
        <div className="library-book-wrapper recent library-this_week">
        {
            recent.map(({id,bName,img})=>{
              return (
                  <Book key={id} b_title={bName} b_img={img} b_className='recent'/>
              )
            })
          }
        </div>
        <div className="library-book-wrapper recent library-this_month"></div>
        <div className="library-book-wrapper bookmark"></div>
        <div className="library-book-wrapper download"></div>
      </div>
    </div>
  )
}

export default Library