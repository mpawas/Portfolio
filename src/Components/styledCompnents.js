const { default: styled } = require("styled-components");

exports.MenuBar = styled.div`
display: block;
margin-top: 6rem;
height: ${props => props.display};
width: 100%;
position: fixed;
z-index: 100;
top: 0;
color: #fff;
left: 0;
background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
overflow-x: hidden;
transition: 0.9s;
`


exports.Main = styled.div`
color:#bbb; 
position:relative;
width: -webkit-fill-available;
padding:20px;
overflow-x: hidden;
height: calc(100vh - 6rem);
-ms-overflow-style: none;  
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  
`
// exports.Content = styled.div`
// position:fixed;  
// `

