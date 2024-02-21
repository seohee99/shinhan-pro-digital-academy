import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter, setColor } from '~/store/reducers/counter';

export default function Counter() {
  const counterObj = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  console.log(counterObj);

  return (
    <div>
      <h1>Counter</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button
          onClick={() => {
            const action = increaseCounter();
            console.log(action);
            dispatch(action);
          }}
        >
          증가
        </button>
        <button
          onClick={() => {
            dispatch(decreaseCounter());
          }}
        >
          감소
        </button>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            const action = setColor(e.target.value);
            console.log(action);
            dispatch(action);
          }}
        />
      </div>
      <h1 style={{ color: counterObj.color }}>{counterObj.counter}</h1>
    </div>
  );
}
