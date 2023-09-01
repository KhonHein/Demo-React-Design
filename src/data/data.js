//routers pages
import AccountDetail from '../components/AccDetails'
import Profile from '../components/ProfileUi'
import Categories from '../pages/Categories'
import Home from '../pages/Home'
import Library from '../pages/Library'
import BookList from '../pages/BookList'
import BookDetails from '../pages/BookDetails'
import DownloadFont from '../pages/DownloadFont'
import InviteFriend from '../pages/InviteFriend'


//routers icons for links
import {AiOutlineHome} from 'react-icons/ai'
import {BiCategory} from 'react-icons/bi'
import {MdOutlineLibraryAddCheck} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
// import {SlOptionsVertical} from 'react-icons/sl'



//routers icons for library links
import {FaHistory , FaRegBookmark ,FaCloudDownloadAlt} from 'react-icons/fa'


// icons in profiles
import {FcInvite,FcBusinessContact,FcAbout} from 'react-icons/fc'
import {FaShare} from 'react-icons/fa'
import {AiFillSetting} from 'react-icons/ai'
import {MdSettingsBackupRestore,MdOutlineRateReview} from 'react-icons/md'
import {IoIosNotifications} from 'react-icons/io'
import {BiDevices , BiHelpCircle} from 'react-icons/bi'



export const routes = [
    {
        id:1,
        name:'Home',
        path:'/',
        element:<Home/>,
        icon:''
    },
    {
        id:2,
        name:'Categories',
        path:'/categories',
        element:<Categories/>,
        icon:''
    },
    {
        id:3,
        name:'Library',
        path:'/library',
        element:<Library/>,
        icon:''
    },
    {
        id:4,
        name:'Profile',
        path:'/profile',
        element:<Profile/>,
        icon:''
    },
    {
        id:5,
        name:'Account Details',
        path:'/acc_details',
        element:<AccountDetail/>,
        icon:''
    },
    {
        id:6,
        name:'Book List',
        path:'/book_list',
        element:<BookList/>,
        icon:'',
    },
    {
        id:7,
        name:'Book Details',
        path:'/book_details',
        element:<BookDetails/>,
        icon:'',
    },
    {
        id:8,
        name:'Download Fonts',
        path:'/download/fonts',
        element:<DownloadFont/>,
        icon:'',
    },
    {
        id:9,
        name:'Invite Friend',
        path:'/invite_friends',
        element:<InviteFriend/>,
        icon:''
    }
]
export const navBarLinks = [
        {
        id:1,
        name:'Home',
        path:'/',
        icon:<AiOutlineHome/>,
        
    },
    {
        id:2,
        name:'Categories',
        path:'/categories',
        icon:<BiCategory/>,
        
    },
    {
        id:3,
        name:'Library',
        path:'/library',
        icon:<MdOutlineLibraryAddCheck/>,
        
    },
    {
        id:4,
        name:'Profile',
        path:'/profile',
        icon:<CgProfile/>,
    },
    // {
    //     id:5,
    //     name:'language',
    //     path:'/language',
    //     icon:<SlOptionsVertical/>,
    // },
]

export const libraryNavLinks = [
    {
    id:1,
    name:'Recent',
    path:'/library/recent',
    icon:<FaHistory/>,
    
},
{
    id:2,
    name:'Bookmarks',
    path:'/library/bookmarks',
    icon:<FaRegBookmark/>,
    
},
{
    id:3,
    name:'Download',
    path:'/library/download',
    icon:<FaCloudDownloadAlt/>,
},
]

export const profileInfoLinks = [
    {
    id:1,
    name:'Invite Friends',
    path:'/invite_friends',
    icon:<FcInvite/>
},
{
    id:2,
    name:'Account Details',
    path:'/acc_details', 
    icon:<AiFillSetting/>
},
{
    id:3,
    name:'Restore Purchese',
    path:'/restore',
    icon:<MdSettingsBackupRestore/>
},
{
    id:4,
    name:'Notifications',
    path:'/notifications',
    icon:<IoIosNotifications/>
},
{
    id:5,
    name:'Devices',
    path:'/devices',
    icon:<BiDevices/>
},
{
    id:6,
    name:'Contact Us',
    path:'/contact_us',
    icon:<FcBusinessContact/>
},
{
    id:7,
    name:'Help',
    path:'/help',
    icon:<BiHelpCircle/>
},
{
    id:8,
    name:'About Us',
    path:'/about_us',
    icon:<FcAbout/>
},
{
    id:9,
    name:'Give Reviews',
    path:'/give_reviews',
    icon:<MdOutlineRateReview/>
},
{
    id:10,
    name:'Share App with friends',
    path:'/share_app_with_friends',
    icon:<FaShare/>
},
]
