import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Loading from '../Components/loadingComponent'
import Experience from './Experience'

const About = () => {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(p=>setLoading(false), 1000)
    },[])
  return (
    loading ? <Loading/> :
    <>
    <InnerDiv>
      <div style={{width:"20%", }}>
        <p>hello How are you.</p>
      </div>
      <div style={{width:"auto"}}>
        <p>adjabsdj</p>
      </div>
    </InnerDiv>
    <Experience/>
    </>
  )
}

export default About


const InnerDiv = styled.div`
display: flex;
`;
