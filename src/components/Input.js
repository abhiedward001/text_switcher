import React, { useState } from 'react'

export default function Input(props) {

    const coloroftxtbox=`rgb(84,115,124)`;
    //creating a useState hook through which we will update the input text
    const [Text, setText] = useState("");
    const [totalwords, setTotalwords] = useState(Text.length);




    //function which is  handling the update of text
    const updateTextupper = () => {
        let uppertext = Text.toUpperCase();
        setText(uppertext);
        props.showAlert("Text converted to UPPERCASE","success");
    }
    const updateTextlower = () => {
        let lowertext = Text.toLowerCase();
        setText(lowertext);
        props.showAlert("Text converted to LOWERCASE","success");
    }

    //Function which is updating the onchange text
    const handleonChange = (event) => {
        setText(event.target.value);

        let count = 0;
        let dummy_txt=Text + " ";
        for (let i = 0; i < dummy_txt.length; i++) {
            if (dummy_txt[i] === " " && dummy_txt[i + 1] !== " ") count++;
        }
       
        setTotalwords(count);
        console.log(count);
    }

    return (

        <>
            <div className="container my-5" style={{color:props.mode==='dark'?'white':'black'}}>
                <div className="mb-5">
                    <h1>{props.Heading}</h1>
                    <textarea className="form-control" style={{backgroundColor:(props.mode==="dark")?coloroftxtbox:'white',color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="10" value={Text} onChange={handleonChange}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={updateTextupper}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={updateTextlower}>Convert to Lowercase</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your text summary is here</h1>
                <p>{totalwords} Words and {Text.length} Charachters</p>
                <p>{0.008*totalwords} Mintues Read</p>
                <h2>Preview</h2>
                <p>{Text.length>0?Text:"Write some text to get the preview"}</p>
            </div>
        </>

    )
}
