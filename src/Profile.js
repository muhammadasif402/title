import React, {useState} from 'react'


export default function Profile(props) {
 
  const handleUpClick = ()=>{
        // console.log("Uppercase was clecked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clecked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleTitleCase=()=>{
      let newText= text.toLowerCase().split(' ').map(word=>word.replace(word[0],word[0].toUpperCase())).join(' ')
      setText(newText);
   }
   const handleFindEmail = () =>{
    let reg = /[a-z0-9]+@[a-z]+\.[a-z]+/gm;
    let n = text.match(reg);

    setText(n[0]+" "+n[1]);
  }
  const handledelete= ()=>{
    let b = text.substring(text.length)
    setText(b)
  }
  const ReverseText=()=>{        
    setText(text.split('').reverse().join(''));
}
const copyText = () => {
  navigator.clipboard.writeText(text)
}
  
    const [text, setText] = useState('');


  return (
    <>
    <div className="container my-3 style={{color: props.mode==='dark'?'light':'dark'}}">
    <h1 >{props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpClick}>Uppercase</button>
<button className='btn btn-warning mx-2' onClick={handleLoClick}>Lowercase</button>
<button className='btn btn-danger mx-2' onClick={handleTitleCase}>1st Word Capitalized </button>
<button className='btn btn-secondary mx-2' onClick={handleFindEmail}>Find email </button>
<button className='btn btn-success mx-2' onClick={handledelete}>Clear text </button>
<button className='btn btn-primary mx-2' onClick={ReverseText}>Reverse text </button>
<button className='btn btn-dark mx-2' onClick={copyText}>Copy text</button>

    </div>
    <div className="container my-5">
    <h2> Your Text Summary</h2>
    <p>{text.split(" ").length} <b>words</b> and {text.length} <b>characters</b> </p>
    <p>{ text.split(" ").length / 200 * 60 } <b>Seconds</b> time required to read it.</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
}
