import React from "react";

const Button = ({onClick, title}) => {
    return (

        <button
            onClick={onClick}
            type="button" 
            style={{background: '#3e8ede', color: '#fff', fontSize: '20px', border: 'none', cursor: 'pointer', width: '200px', height: '50px'}}>
            <span>{title}</span>
        </button> 
    )   
}

export default Button;