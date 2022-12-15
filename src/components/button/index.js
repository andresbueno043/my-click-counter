import React from "react";
import './index.css'

function Button({ text, isClickButton, clickHandler }){
    return(
        <button 
        className={ isClickButton ? 'click-button' : 'reset-button' }
        onClick={clickHandler}>
            {text}
        </button>
    );
}

export { Button }