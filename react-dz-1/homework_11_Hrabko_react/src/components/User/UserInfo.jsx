import React from "react";

const UserInfo = ({name, age, sex}) => {

    return (
        <ul style={{listStyle: 'none', padding: '0'}}>
            <li>Имя: {name}</li>
            <li>Возраст: {age}</li>
            <li>Пол: {sex}</li>
        </ul>
    )
}

export default UserInfo;