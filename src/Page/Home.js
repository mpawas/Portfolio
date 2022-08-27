import '../Components/Component.css'
import logo from '../Components/Logo.png'
import React, { useEffect, useState } from 'react'
import Loading from '../Components/loadingComponent'


function Home() {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(p=>setLoading(false), 1000)
    },[])
    return (
        loading ? <Loading/> :
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