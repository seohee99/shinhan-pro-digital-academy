import logo from './logo.svg';
import './App.css';

// 만든 HelloWorld를 불러와서 사용 
import HelloWorld from './components/HelloWorld';
import CaptionImage from './components/CaptionImage';
import BlinkComponent from './components/BlinkComponent';

function App() {
  return (
    <div className='App'>

      <BlinkComponent text="깜빡깜빡"/>

      <HelloWorld/>

      <CaptionImage imgUrl="https://cdn.imweb.me/thumbnail/20220705/529b7439e6168.jpg"
                    caption="소금빵"
      />
      
    </div>
  )
}

export default App;
