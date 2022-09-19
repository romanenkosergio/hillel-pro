import React, { useState } from "react";
import UserButton from "./UserButton";
import UserInfo from "./UserInfo";


const User = () => {

    const [display, setDisplay] = useState(['none'])
    
    const showInfoAboutUser = () => {
        setDisplay(display === 'none' ? 'block' : 'none')
    }
    return (
        <div style={{fontSize: '24px', textAlign: 'center'}}> 
            <UserButton clickOnButton={showInfoAboutUser}/>
            <div className="infoAboutUser" style={{display}}>
                <UserInfo name={'Иван Иванов'} age={'25'} sex={'мужской'}/>
            </div>
        </div>
    )
}
export default User;
