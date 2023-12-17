import React, { useState } from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Upper Case was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowerClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText)
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter Text here');

    //    setText("new text");
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase </button>
            <div>

            <button className='btn btn-secondary my-3' onClick={handleLowerClick}>Convert to LowerCase </button>
            </div>
        </>
    )
}
