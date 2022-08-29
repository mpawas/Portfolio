import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Loading from '../Components/loadingComponent'

const Contact = () => {
  const [loading, setLoading] = useState(true)
  const [padding, setPadding] = useState("20px")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState("")
  const width = window.innerWidth;

  useEffect(() => {
    setTimeout(p => setLoading(false), 1000)
    if (width < 650) return setPadding("0px")
  }, [width])
  
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    const body  = {name:name, email:email, message:message}
    console.log(body)
    setResponse("Done")
  }



  return (
    loading ? <Loading /> :
      <Div display={"block"} padding={padding}>
        <P>SEND ME A MESSAGE.</P>
        <Form onSubmit={handleSubmit}>
          <Div display="flex" style={{marginBottom:"20px"}}>
            <Input placeholder="Your Name." type={"text"} autoCapitalize={"true"} onChange={(e)=>setName(e.target.value)} style={{textTransform: "capitalize"}}/>
            <Input id='name' type={"email"} placeholder="Your Email." onChange={(e)=>setName(e.target.value)}/>
          </Div>
          <Div>
            <TextArea placeholder='Your words for me.' onChange={(e)=>setName(e.target.value)}>
            </TextArea>
          </Div>
          <Button type={"submit"} >submit</Button>
        </Form>

      </Div>
  )
}

export default Contact

const  Button = styled.button`
padding:10px;
margin:10px;
background-color: rgb(113, 121, 126); 
color: white;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
border: 2px solid rgb(128, 128, 128);
border-radius: 4px;

`;



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


const TextArea = styled.textarea`
width: 98%;
height: 150px;
padding: 12px 20px;
margin:10px;
outline:none;
color:white;
box-sizing: border-box;
border-radius: 4px;
border: 2px solid rgb(128, 128, 128);
background-color:rgb(129, 133, 137);
resize: none;
&:focus {
  border-color: rgb(54, 69, 79);
  box-shadow: 0 0 0 0.2rem rgba(54, 69, 79, 0.5);
}
::placeholder,
  ::-webkit-input-placeholder {
    color: rgb(211, 211, 211)
    ;
    font-size:16px;
  }
  :-ms-input-placeholder {
     color: red;
  }
`;


const Input = styled.input`
width:100%;
padding: 15px;
margin:10px;
background-color:rgb(129, 133, 137);
outline:none;
font-size:18px;
color:white;
border: 2px solid rgb(128, 128, 128);
border-radius: 4px;
&:focus {
  border-color: rgb(54, 69, 79);
  box-shadow: 0 0 0 0.2rem rgba(54, 69, 79, 0.5);
}
::placeholder,
  ::-webkit-input-placeholder {
    color: rgb(211, 211, 211);
    font-size:16px;
  }
  :-ms-input-placeholder {
     color: red;
  }

`;

export const Form = styled.form`
padding:0px;
`;
