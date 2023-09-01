import './home.css'
import Search from '../components/Search'

import 'react-slideshow-image/dist/styles.css'

import ImageSlider from '../components/ImageSlider';
import Categories from './Categories';
import Book from '../components/UI/Book';
import { books } from '../data/books/data';

const Home = () => {
  
  return (
    <div className='home_container'>
      {/* left-side */}
      <div className="left-side">
        {/* <div className="categories">
          <Categories/>
        </div>  */}
        </div>

      {/* center side */}
      <div className="center-side">
          <div className="header search">
            <Search/>
          </div>
          <div className="section anouncement_container">
            <div className="anouncement">
              <ImageSlider/>
            </div>
          </div>
          <div className="section">
            <div className="categories">
              <Categories/>
            </div>
          </div>
          <h4>Newly Added</h4>
        <div className="section series">
          
          {
            books.map(({id,bName,img})=>{
              return (
                  <Book key={id} b_title={bName} b_img={img} b_className='newlyAdded'/>
              )
            })
          }
        </div>
        <h4>Free Plan</h4>
        <div className="section series">
          
          {
            books.map(({id,bName,img})=>{
              return (
                  <Book key={id} b_title={bName} b_img={img} b_className='freePlan'/>
              )
            })
          }
        </div>
      </div>

      {/* right-side */}
      <div className="right-side">
      right side 
      </div>
    </div>
  )
}

export default Home