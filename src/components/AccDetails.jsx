import { Link } from 'react-router-dom'
import './accDetails.css'

import {BiUserCheck,BiListCheck} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import {GrMapLocation} from 'react-icons/gr'
import {FaCriticalRole,FaTransgenderAlt} from 'react-icons/fa'
import {BsFillPhoneVibrateFill} from 'react-icons/bs'


import {FcNext} from 'react-icons/fc'
const AccDetails = () => {
//fetch acc
const acc = {
  id:1,
  name:"User Client",
  email:'client@gmail.com',
  img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
  address:'Pinlebu',
  role:'user',
  plan:'free',
  phone:'0912345678',
  gender:'female',
  path:'',
  clsName:'information color-1',
}
  return (
    <div className='acc_details_container'>
       <div className={`acc_info image ${acc.clsName}`}>
            <img src={acc.img} alt="" />
       </div>

       <Link className={`acc_info link ${acc.clsName}`}>
            <span><i><BiUserCheck/></i> Name </span>
            <span> {acc.name} <FcNext/></span>
       </Link>

       <Link className={`acc_info link ${acc.clsName}`}>
            <span><i><AiOutlineMail/></i> Email </span>
            <span> {acc.email} <FcNext/></span>
       </Link>

       <Link className={`acc_info link ${acc.clsName}`}>
            <span><i><GrMapLocation/></i> Address </span>
            <span> {acc.address} <FcNext/></span>
       </Link>
       <Link className={`acc_info link ${acc.clsName}`}>
            <span><i><FaCriticalRole/></i> Role </span>
            <span> {acc.role} <FcNext/></span>
       </Link>
       <Link className={`acc_info link ${acc.clsName}`}>
            <span><i><BiListCheck/></i> Plan </span>
            <span> {acc.plan} <FcNext/></span>
       </Link>
       <Link className={`acc_info link ${acc.clsName}`}>
            <span><i><BsFillPhoneVibrateFill/></i> Phone </span>
            <span> {acc.phone} <FcNext/></span>
       </Link>

       <Link className={`acc_info link ${acc.clsName}`}>
            <span><i><FaTransgenderAlt/></i> Gender </span>
            <span> {acc.gender} <FcNext/></span>
       </Link>

    </div>
  )
}

export default AccDetails