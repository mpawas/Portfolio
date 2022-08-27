import React, { useEffect, useState } from 'react'
import Loading from '../Components/loadingComponent'

const Projects = () => {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(p=>setLoading(false), 1000)
    },[])
  return (
    loading ? <Loading/> :
    <div>Projects</div>
  )
}

export default Projects