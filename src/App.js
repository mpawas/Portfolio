import './App.css';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar';
import { useEffect, useState} from "react";
import {  Main } from './Components/styledCompnents';
import './Components/Component.css'

import Router from './Router';


function App() {
  const [display, setDisplay] = useState('0%')
  const [cls, menuClass] = useState('fa fa-bars')
  
  return (
    <>
      <Header setDisplay={setDisplay} display={display} menuClass={menuClass} />
      <div className='Page'>
        <Sidebar />
        <Main>
          <Router />
        </Main>
      </div>

    </>
  );
}

export default App;
