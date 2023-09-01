import './bookUi.css'
import {BsDownload,BsShareFill} from 'react-icons/bs'
import {MdBookmarkAdd} from 'react-icons/md'
import {SlEarphones} from 'react-icons/sl'
import {BiSolidBookReader} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const bookDetail = {
  id:'',
  name:'Khon Note',
  caption:'Crack the Code to Wealth and LiveRich for a lifetime',
  img:'https://bodleianshop.co.uk/cdn/shop/products/SpeakingVolumes_540x.jpg?v=1646308052',
  demoOutline:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ipsum quam praesentium fuga aperiam consequuntur quia, iusto at earum voluptatem, sit itaque alias dolores possimus recusandae sapiente maiores obcaecati nesciunt.',
  pdf_file:'',
}

const BookDetails = ({book = bookDetail}) => {
  return (
    <div className='book_ui_container'>
      <div className="header">
        <div className="left_side img_side">
          <img src={book.img} alt="" />
        </div>
        <div className="right_side title_side">
          <h4 className="title">{book.name}</h4>
          <h5 className="caption">{book.caption}</h5>
          <div className="action header_action">
            <Link to='' className="icon link btn btn-primary save">
              <i><MdBookmarkAdd/></i>
            </Link>
            <Link to={book.pdf_file} className="icon link btn btn-primary down">
              <i><BsDownload/></i>
            </Link>
            <Link to='' className="icon link btn btn-primary share">
              <i><BsShareFill/></i>
            </Link>
          </div>
          <div className="action listener_action">
            <Link to='' className="icon link read btn btn-primary">
              <i><BiSolidBookReader/></i>
            </Link>
            <Link to='' className="icon link read btn btn-primary">
              <i><SlEarphones/></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="container demo_decripton">
        <div className="caption_title">Demo Outlines </div>
        <div className="description">
          <p>{book.demoOutline}</p>
        </div>
      </div>
    </div>
  )
}

export default BookDetails