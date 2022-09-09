import React from "react";

const UserButton = ({clickOnButton}) => {

    return (
        <button type="button" onClick={clickOnButton}>
            <span>Показать информацию</span>
        </button>
    )
}

export default UserButton;