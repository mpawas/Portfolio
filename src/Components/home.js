import './Component.css'
import logo from './Logo.png'

function Home() {
    return (
        <div className="home">
            <div className='ContentBox'>
                <p style={{fontSize:"24px", width:'50%'}}>Hi, I am</p>
                <p style={{padding:'10px',fontSize:"54px", color:"#FFF"}}>Pawas Mishra</p>
                <p style={{padding:'10px',fontSize:"24px", width:'50%'}}>I'm a Full Stack Developer That Specalizes in Android &
Web Development. And Some Other Nonsense</p>
            </div>
            <div className='ImageBox'>
                <img className='Image' src={logo} alt="" />
            </div>
        </div>
    )
}


export default Home