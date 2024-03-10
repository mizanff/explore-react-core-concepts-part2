import { useState } from "react"

export default function Tem(){
    const [tem, setTem] = useState(11)
    const handleAdd = () =>{
        const newTem = tem + 1;
        setTem(newTem)
    }

    const handleRemove = () =>{
        const newTem = tem - 1;
        setTem(newTem);
    }
    const temStyles = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return(
        <div style={temStyles}>
            <h3>Players: {tem}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}