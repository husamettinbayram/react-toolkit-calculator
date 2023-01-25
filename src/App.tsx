import React from 'react';
import "./style.css"
import { useAppSelector,useAppDispatch } from './redux/store';
import {deleteDigit, append, deleteAll,appendOperand, appendDecimal, evaluate} from "./redux/slices/screenSlice"


function App() {
  const {screenState} = useAppSelector(e=>e)
  const dispatch = useAppDispatch()
  return (
    <div className="main-container">
      <div className='screen'>
        <div className='upper'>{screenState.upper}</div>
        <div className='operand'>{screenState.operand}</div>
        <div className='lower'>{screenState.lower}</div>
      </div>
      <div className='button-grid'>
        <button className='span-two' onClick={()=>{dispatch(deleteAll())}}>AC</button>
        <button onClick={()=>{dispatch(deleteDigit())}}>DEL</button>
        <button onClick={()=>{dispatch(appendOperand("/"))}}>/</button>

        <button onClick={()=>{dispatch(append("1"))}}>1</button>
        <button onClick={()=>{dispatch(append("2"))}}>2</button>
        <button onClick={()=>{dispatch(append("3"))}}>3</button>
        <button onClick={()=>{dispatch(appendOperand("*"))}}>*</button>

        <button onClick={()=>{dispatch(append("4"))}}>4</button>
        <button onClick={()=>{dispatch(append("5"))}}>5</button>
        <button onClick={()=>{dispatch(append("6"))}}>6</button>
        <button onClick={()=>{dispatch(appendOperand("+"))}}>+</button>
     

        <button onClick={()=>{dispatch(append("7"))}}>7</button>
        <button onClick={()=>{dispatch(append("8"))}}>8</button>
        <button onClick={()=>{dispatch(append("9"))}}>9</button>
        <button onClick={()=>{dispatch(appendOperand("-"))}}>-</button>


        <button onClick={()=>{dispatch(appendDecimal())}}>.</button>
        <button onClick={()=>{dispatch(append("0"))}}>0</button>
        <button  className='span-two' onClick={()=> {dispatch(evaluate())}}>=</button>

      </div>

    </div>
  );
}

export default App;
