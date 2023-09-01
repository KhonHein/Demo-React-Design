import Book from "../components/UI/Book"
import { books } from "../data/books/data"
import './bookList.css'
const BookList = () => {
  return (
    <div className="book_list_container">
    {
    books.map(({id,bName,img})=> <Book index={id} b_title={bName} b_img={img} b_className='book_list_item'/>)
    }
  </div>
  )
}

export default BookList