import React from "react";
import UserButton from "./UserButton";
import UserSelfInfo from "./UserInfo";

const UserTemplate = () => {
    let counter = 0;
    const insertInfoOnUser = (name, age, sex) => {
        counter++;
        if(counter < 2) {
        let Uname = document.querySelector('.user__text');
        let Uage = document.querySelector('.user__age');
        let Usex = document.querySelector('.user__sex');
         Uname.insertAdjacentText('beforeend', name);
         Uage.insertAdjacentText('beforeend', age);
         Usex.insertAdjacentText('beforeend', sex);
        }        
    }

    return (
        <div className="template">
            <UserSelfInfo />
            <UserButton  handlerEvent={insertInfoOnUser}/>
    </div>
    )
}

export default UserTemplate;