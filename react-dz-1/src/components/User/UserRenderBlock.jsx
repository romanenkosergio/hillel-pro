import React from "react";

const UserRenderBlock = ({name, age, sex}) => {
    return(
        <div className="user__text">
            <div className="user__text-name">
                <span>Имя: {name}</span>
            </div>
            <div className="user__text-age">
                <span>Возраст: {age}</span>
            </div>
            <div className="user__text-sex">
                <span>Пол: {sex}</span>
            </div>
        </div>
    )
}

export default UserRenderBlock;