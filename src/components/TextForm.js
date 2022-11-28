// import { clear } from '@testing-library/user-event/dist/clear';
import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted in to Uppercase","success");
        // console.log({text});
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted in to Lowercase","success");
        // console.log({text});
    }
    const clear = ()=>{
        // console.log("Uppercase was clicked");
        let newText = "";
        setText(newText);
        props.showAlert("Text Clear","success");
        // console.log({text});
    }
    
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
        // props.showAlert("Light mode has been enabled","success");
    }
    const [text,setText] = useState("");
    // console.log(useState("Enter text here2"));
    // setText("hello");
    return (
        <>
        <div>
            <div className="mb-3" style={{color: props.mode}}>
                <h3>{props.heading}</h3>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: "rgb(255, 255, 255)" ,color: "rgba(-255, -255, -255)"}} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={clear}>Clear</button>
        </div>
        
        <div className="container" style={{color: props.mode}}>
            <h3> Your text summary</h3>    
            <p>{text.split(" ").length} words and {text.length} charecters</p>
            <p>{text.split(".").length} Sentence</p>
            <p> <b>{0.008 * text.split(" ").length}</b> Minutes to Read</p>
            <h3> Preview </h3>
            <p>{text}</p>
        </div>
        </>
    )
}

