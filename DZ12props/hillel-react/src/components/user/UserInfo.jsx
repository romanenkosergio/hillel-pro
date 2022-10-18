import React from "react";

const UserSelfInfo = ({name, age, sex}) => {
    return (
        <div className="userBlock" style={{border: "2px grey solid", width:"222px", marginBottom: "15px"}}>
            <div className="user__text" style={{borderBottom: "2px grey solid", padding: "8px 0"}}>
                <span>User name: {name}</span>
            </div>
            <div className="user__age" style={{borderBottom: "2px grey solid", padding: "8px 0"}}>
                <span>User age: {age}</span>
            </div>
            <div className="user__sex" style={{padding: "8px 0"}}>
                <span>User sex: {sex}</span>
            </div>
        </div>
        
    )
};

export default UserSelfInfo;