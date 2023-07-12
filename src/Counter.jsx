import { useState } from "react";
import InnerComponent from "./InnerComponent";

const Counter = () => {

    // // initial value = 5
    const [number, setNumber] = useState(5)

    return (
        <div>
            <div>
                <input
                    type="number"
                    value={number}
                    onChange={event => setNumber(Number(event.target.value))}
                />
            </div>
            <button
                onClick={() => {
                    setNumber(number - 1)
                }}
            >
                Count down
            </button>
            <h1>{number}</h1>
            <button
                onClick={() => {
                    setNumber(number + 1)
                }}
            >
                Count up
            </button>
            <br />
            <br />
            <br />
            <InnerComponent currentNumber={number} />
        </div>
    )
}

export default Counter;