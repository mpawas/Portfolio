import React, { useEffect, useState } from 'react'
import Loading from '../Components/loadingComponent'

const Contact = () => {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(p=>setLoading(false), 1000)
    },[])
  return (
    loading ? <Loading/> :
    <div>Contact</div>
  )
}

export default Contact