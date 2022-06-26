import React, { useState } from 'react'

export default function Input(props) {

    const [Text, setText] = useState("Hello I am dummy text");
    const updateTextupper = () => {
        let uppertext = Text.toUpperCase();
        setText(uppertext);
    }
    const handleonChange = (event) => {
        setText(event.target.value);
    }
    return (

        <>
            <div className="container">
                <div className="mb-5">
                    <h1>{props.Heading}</h1>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={Text} onChange={handleonChange}></textarea>
                </div>
                <button className="btn btn-primary" onClick={updateTextupper}>Convert to Uppercase</button>
            </div>

        </>

    )
}
