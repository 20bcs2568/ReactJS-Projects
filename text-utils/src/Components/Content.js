import './Content.css';
import { useState } from 'react';
function Content() {
    const [style, setStyle] = useState({ color: 'black', backgroundColor: 'white' });
    const [mode, setMode] = useState('Dark Mode');
    const [btn, setBtn] = useState('btn mx-2 fs-5 p-1 px-2 btn-outline-primary');

    const [text, setText] = useState('');
    function Change(event){
        setText(event.target.value);
    }

    function UpperCase() {
        let temp = text.toUpperCase();
        setText(temp);
    }

    function LowerCase() {
        let temp = text.toLowerCase();
        setText(temp);
    }

    function Clear() {
        setText('');
    }

    function DarkMode() {
        if (style.color === 'black') {
            setStyle({ color: 'white', backgroundColor: 'black' });
            document.body.style.backgroundColor = 'black';
            setMode('Light Mode');
            setBtn('btn mx-2 fs-5 p-1 px-2 btn-outline-light');
        }
        else {
            setStyle({ color: 'black', backgroundColor: 'white' });
            document.body.style.backgroundColor = 'white';
            setMode('Dark Mode');
            setBtn('btn mx-2 fs-5 p-1 px-2 btn-outline-primary');
        }
    }

    return (
        <>
            <div id='container' style={style}>
                <h2>Enter text to analyze below</h2>
                <textarea value={text} style={style} onChange={Change} className='w-50 p-2 my-4' placeholder='Enter text here' ></textarea>
                <div>
                    <button className={btn} onClick={UpperCase}>UpperCase</button>
                    <button className={btn} onClick={LowerCase}>LowerCase</button>
                    <button className={btn} onClick={Clear}>ClearData</button>
                    <button className={btn} onClick={DarkMode}>{mode}</button>
                </div>
            </div>
            <div className='d-flex flex-column align-items-center' style={style}>
                <h2>Your text summary</h2>
                <p>{(text.split(' ').length)} words and {text.length} characters</p>
                <p>It takes {(text.split(' ').length) * 0.04} minutes to read</p>
                <h3>Preview</h3>
                <p className='w-50'>{text}</p>
            </div>
        </>
    );
}

export default Content; 