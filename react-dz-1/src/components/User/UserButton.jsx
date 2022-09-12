import React from "react";


const UserButton = ({text, handleClick}) => {

    return(
            <button className="user__button user-button" type="button" onClick={handleClick}
                    style={{marginTop: "10px"}}>
                <span className="user-button__text">{text}</span>
            </button>
    )
}

export default UserButton;