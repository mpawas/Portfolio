import React, { useEffect, useState } from 'react'
import Loading from '../Components/loadingComponent'

const About = () => {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(p=>setLoading(false), 1000)
    },[])
  return (
    loading ? <Loading/> :
    <>
    <ksdncjakd>
      dsc asdcn
    </ksdncjakd>
    </>
  )
}

export default About