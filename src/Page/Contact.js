import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Loading from '../Components/loadingComponent'

const Contact = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(p => setLoading(false), 1000)
  }, [])
  return (
    loading ? <Loading /> :
      <Div display={"block"} padding={"20px"}>
        <P>Send me a message.</P>
        <form>
          <Div display="flex" padding="20px">
            <Div style={{ width: "100%", marginRight:"10px", paddingRight:"10px" }} >
              <Label htmlFor='name'>Your Full Name:</Label>
              <Input placeholder="Please help me with your name." style={{
                padding: "10px", color: "white", backgroundColor: "gray"
              }} />
            </Div>
            <Div style={{ width: "100%", marginLeft:"10px"}} >

              <Label>Your Email:</Label>
              <Input id='name' type={"text"} placeholder="Please help me with your name." style={{
                padding: "10px", color: "white", backgroundColor: "gray"
              }} />
            </Div>
          </Div>
          <Div padding="20px">
            <Label htmlFor='name'>Your Message:</Label>
            <TextArea>
              Send Me A Message
            </TextArea>
          </Div>


        </form>

      </Div>
  )
}

export default Contact


const Div = styled.div`
display:${props => (props.display)};
padding:${props => (props.padding)};
color:white;
justify-content: space-between;
  align-items: flex-end; 
`;

const P = styled.p`
font-size:2rem;
text-align:center;
text-decoration:underline;
`;

const Label = styled.label`
font-size:1.25rem;
display:block;
text-decoration:underline;
margin-bottom:10px;
`;

const TextArea = styled.textarea`
width: 100%;
height: 150px;
padding: 12px 20px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
background: #f8f8f8;
resize: none;
`;


const Input = styled.input`
width:100%;
`;

