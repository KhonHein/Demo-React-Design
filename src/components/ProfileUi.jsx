import './profileUi.css'
import { profileInfoLinks } from '../data/data'
import {FcNext} from 'react-icons/fc'
import {GrDocumentUpdate} from 'react-icons/gr'

import {BiLogOut} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
      <div className="profileUi_container">
        <div className="profile-info profile_head_section">
          
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" srcSet="" />
          
          <div className="profile-name">
            <h5>User Client</h5>
            <span>user id </span>
            <h6>Free Plan</h6>
          </div>
        </div>
        <div className="profile-info upgrade-premium_section">
          <div className="upgrade_wrapper">
          <i className='up_icon'><GrDocumentUpdate/></i>
          <span> Upgrade to Premium</span>
          <p>Unlimited Books and Audio Books</p>
          <button className='btn btn-primary'>Upgrade</button>
          </div>
        </div>
        <div className="profile-info profile-content_section">
          {
            profileInfoLinks.map(({id,icon,name,path})=>{
              return(
              <Link key={id} to={path} className={`about profile-content profile_about ${name}`}>
                <span><i>{icon}</i> {name}</span>
                <span><FcNext/></span>
              </Link>
              )
            })
          }
          <Link to="" className="about profile-content profile_about">
            <span>Log out </span>
            <button className='btn btn-primary'><BiLogOut/></button>
          </Link>
        </div>
      </div>
  )
}

export default Profile