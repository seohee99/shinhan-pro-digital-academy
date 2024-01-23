import './App.css';
import React, {useEffect, useState} from "react";

// 만든 HelloWorld를 불러와서 사용 
import HelloWorld from './components/HelloWorld';
import CaptionImage from './components/CaptionImage';
import BlinkComponent from './components/BlinkComponent';
import CountComponent from './components/CountComponent';
import FocusButton from './components/RegisterInputButton';
import ToDoComponent from './components/ToDoComponent';


function App() {
  const [visible, setVisible] = React.useState(false)
  return (
    <div className='App'>
      {/* <HelloWorld/>

      <CaptionImage imgUrl="https://cdn.imweb.me/thumbnail/20220705/529b7439e6168.jpg"
                    caption="소금빵"
      />
      <BlinkComponent text="깜빡깜빡"/>

      
      <button onClick={()=> setVisible(!visible)}> 보이기 </button>
      {visible ? <CountComponent/> : null}

      <FocusButton></FocusButton> */}

      <ToDoComponent></ToDoComponent>
    </div>
  )
}

export default App;
