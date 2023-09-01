import { Link } from 'react-router-dom'
import './book.css'
const Book = ({b_id,b_title,b_img,b_className}) => {
  //fetch book detail with book id
  return (
    <div className={`book_container ${b_className}`}>
        <div className="book">
          <Link to="/book_details">
            <img src={b_img} alt='' />
            <h5>{b_title}</h5>
          </Link>
        </div>
    </div>
  )
}

export default Book