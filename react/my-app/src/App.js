import './App.css';
import React, {useEffect, useState} from "react";

// 만든 HelloWorld를 불러와서 사용 
import HelloWorld from './components/HelloWorld';
import CaptionImage from './components/CaptionImage';
import BlinkComponent from './components/BlinkComponent';
import CountComponent from './components/CountComponent';
import FocusButton from './components/RegisterInputButton';
import ToDoComponent from './components/ToDoComponent';
import PrimeCalculator from './components/PrimeCalculator';
import { ThemeProvider } from './components/ThemeProvider';
import ThemeButton from './components/ThemeButton';
import MyPage from './components/MyPage';
import ToDoPostComponent from './components/ToDoPostComponent';

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

      {/* memo를 사용하지 않았을 때 */}
      {/* <PrimeCalculator text={4}></PrimeCalculator> */}

      {/* <ThemeProvider>
          <ThemeButton/>
              <MyPage/>
      </ThemeProvider> */}

      <ToDoPostComponent></ToDoPostComponent>
    </div>
  )
}

export default App;
