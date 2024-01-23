import React, {useRef} from "react";

export default function FocusButton(){
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <button onClick={focusInput}>입력하러 가기</button>

            <div style={{height:200}}></div>

            <input ref={inputRef} type="text" />

            <div style={{height:200}}></div>
        </div>
    )
}