import React, {useEffect, useState} from "react";

export default function BlinkComponent({text}){
    const [showText, setShowText] = useState(true);
    // state가 바뀌면 새로 그린다(함수를 다시 실행시킨다) 

    useEffect( ()=> {
        const timeoutId = setInterval(()=>{
            setShowText(showText=>!showText);
        }, 1000)
        return () => {clearInterval(timeoutId)}
    }, [])

    return (
        
        <div style={{border:'yellow solid', margin:50, padding:20}}>
            {/* 버튼 클릭 시 텍스트 */}
            <button onClick={()=>{
                setShowText(!showText)
            }}>클릭</button>
            {showText? text : null}

            {/* 깜빡거리는 텍스트 */}
            <div style={{fontSize:20, color:'green'}}>
                {showText? text : null}
            </div>
        
        </div>
    )
}