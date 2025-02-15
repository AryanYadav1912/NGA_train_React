import { Component, useState } from "react";

// export class SampleState extends Component{
//     constructor(props) {
//         super(props);
//         this.state=
//     }
// }
import React from 'react'

function SampleState() {
    const [message, setMessage] = useState("Hello");
    const handleButton = () =>{
       const message=setMessage("Have a good day!");
    }
  return (
    <div>SampleState

        <h1>{message}</h1>
        <button onClick={handleButton}>
            Click me
        </button>
    </div>
  )
}

export default SampleState