import React, { useEffect, useState } from 'react'
import Loading from '../Components/loadingComponent'


const Experience = () => {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(p=>setLoading(false), 1000)
    },[])
  return (
    loading ? <Loading/> :
    <div>Experience</div>
  )
}

export default Experience