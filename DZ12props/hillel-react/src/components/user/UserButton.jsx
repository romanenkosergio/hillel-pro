import React from "react";

const UserButton  = ({handlerEvent}) => {
return (
    <button className="user__button user-button" type="button" style={{textTransform: "uppercase", background: "#ffff", padding: "10px 5px"}} onClick={() => handlerEvent('Denis', '25', 'male')}>
            <span className="user-button__text">Press to show Info on User</span>
        </button>
)

}

export default UserButton;