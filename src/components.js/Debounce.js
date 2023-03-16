import { useState } from "react";
import { DebounceInput } from "react-debounce-input";


export default function Debounce() {
    const [input, setInput] = useState('')
    console.log(input)
    return (
        <div>
            <DebounceInput element='textarea'
                // type="number"
                debounceTimeout={500}
                onChange={(e)=>setInput(e.target.value)}
            
            />
        </div>
    )
}