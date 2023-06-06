import React, { useState } from "react";

export default function TextForm(props) {
    
    const handleUpClick = () => {
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowerClick = () => {
        let newText= text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const handleCopy = () => {
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }
    const clear = () => { 
      let newText = "";
      setText(newText);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1"onClick={handleLowerClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1"onClick={clear}>Clear Text</button>
      <button className="btn btn-primary mx-1"onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1"onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").filter((element)=> {return element!=0}).length} words {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=> {return element!=0}).length} minutes read time</p>
      <h2>Preview</h2>
      <p>{text.length>0? text:"Enter something in above textbox to preview it here"}</p>
    </div>
    </>
  );
}