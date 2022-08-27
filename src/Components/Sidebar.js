import { Link } from 'react-router-dom'
import './Component.css'



function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-content'>
               <Link to={'/'}>Home</Link>
            </div>
            <div className='sidebar-content'>
                <Link to={'/about'}>About</Link>
            </div>
            <div className='sidebar-content'>
                <Link to={'/experience'}>Experience</Link> 
            </div>
            <div className='sidebar-content'>
                <Link to={'/projects'}>Projects</Link> 
            </div>
            <div className='sidebar-content'>
                <Link to={'/contact'}>Contact</Link>
            </div>
            <div className='sidebar-link'>
                <p className='sidebar-link-content' to="github.com"><i className='fab fa-github'></i></p >
                <p className='sidebar-link-content' to="instagram.coom"> <i className='fab fa-instagram'></i></p >
                <p className='sidebar-link-content' to=""><i className='fab fa-facebook-f'></i></p >
                <p className='sidebar-link-content' to=""><i className='fab fa-twitter'></i></p >
                <p className='sidebar-link-content' to=""><i className='fa fa-file-pdf'></i></p >
            </div>
            <div className='sidebar-footer'>
                <p><i className='fa-regular fa-copyright'></i> Pawas Mishra</p>

            </div>
        </div>

    )
}

export default Sidebar