import React, { useState } from 'react'

export default function Input(props) {

    //creating a useState hook through which we will update the input text
    const [Text, setText] = useState("Hello I am dummy text");
    
    //function which is  handling the update of text
    const updateTextupper = () => {
        let uppertext = Text.toUpperCase();
        setText(uppertext);
    }

    //Function which is updating the onchange text
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
