import React, {useState} from "react";

import UserButton from "./UserButton";

import UserRenderBlock from "./UserRenderBlock";

const User = () =>{

    const [ShowUserInfo, setShowUserInfo] = useState(false)

    const UserFirst = {
        name: "Иван Иванов",
        age: 25,
        sex: "мужской"
    };

    const onClick = (e) => {
        e.preventDefault();
        setShowUserInfo(true)
    };

    return(
        <div className="user">
            <div className="user__content">
                <div className="user__title" style={{fontSize: "20px", fontWeight: "bold", marginBottom: "10px"}}>
                    <span>User Information</span>
                </div>

            </div>
            <div className="user__text">
                    {!!ShowUserInfo && <UserRenderBlock name={UserFirst.name} age={UserFirst.age} sex={UserFirst.sex}/>}
            </div>
            <div className="user__button">
                <UserButton text={'Показать информацию'} handleClick={onClick}/>
            </div>
        </div>
    );
}

export default User;
