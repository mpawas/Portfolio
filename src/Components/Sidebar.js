import './Component.css'



function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-content'>
                <a href=''>Home</a>
            </div>
            <div className='sidebar-content'>
                <a href=''>About</a>
            </div>
            <div className='sidebar-content'>
                <a>Experience</a> 
            </div>
            <div className='sidebar-content'>
                <a></a>
            </div>
            <div className='sidebar-content'>
                Contact
            </div>
            <div className='sidebar-link'>
                <a className='sidebar-link-content' href=""><i className='fab fa-github'></i></a>
                <a className='sidebar-link-content' href=""> <i className='fab fa-instagram'></i></a>
                <a className='sidebar-link-content' href=""><i className='fab fa-facebook-f'></i></a>
                <a className='sidebar-link-content' href=""><i className='fab fa-twitter'></i></a>
                <a className='sidebar-link-content' href=""><i className='fa fa-file-pdf'></i></a>
            </div>
            <div className='sidebar-footer'>
                <p><i className='fa-regular fa-copyright'></i> Pawas Mishra</p>

            </div>
        </div>

    )
}

export default Sidebar