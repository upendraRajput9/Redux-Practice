import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { incNum, decNum, reset, setMax, setStep } from '../Redux/Action/index'

export default function App() {
    const myState = useSelector((state) => state.changeTheNumber);
   
    const dispatch = useDispatch()

    return (
        <div>
            <h1>{myState.initialState}</h1>
            <section>
                <article>

                    <h2>Steps</h2>
                    <ul>
                        <li onClick={() => dispatch(setStep({ step: 5 }))}>5</li>
                        <li onClick={() => dispatch(setStep({ step: 10 }))}>10</li>
                        <li onClick={() => dispatch(setStep({ step: 15 }))}>15</li>
                    </ul>
                </article>
                <article>
                    <h2>Max Value</h2>
                    <ul>
                        <li onClick={() => dispatch(setMax({ max: 15 }))}>15</li>
                        <li onClick={() => dispatch(setMax({ max: 100 }))}>100</li>
                        <li onClick={() => dispatch(setMax({ max: 200 }))}>200</li>
                    </ul>
                </article>
            </section>
            <section>
                <button onClick={() => dispatch(incNum())}>Increment</button>
                <button onClick={() => dispatch(decNum())}>Decrement</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </section>
        </div>
    )
}
