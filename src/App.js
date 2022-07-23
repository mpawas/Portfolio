import './App.css';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar';
import { useState, useRef, useEffect } from "react";
import { Content, Main, Page } from './Components/compnents';
import './Components/Component.css'
import Home from './Components/home';




function App() {


  


  // height={`${height.height}px`
  const [display, setDisplay] = useState('0%')
  const [cls, menuClass] = useState('fa fa-bars')

  return (
    <>
      <Header setDisplay={setDisplay} display={display} menuClass={menuClass} />
      <div className='Page'>
        <Sidebar />
        <Main>
          <Content>
          <Home/>
          </Content>
        </Main>
      </div>

    </>
  );
}

export default App;
