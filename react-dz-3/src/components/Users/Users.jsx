import { useEffect, useState } from "react";
import User from "../User/User";


const Users = (promps) => {

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {

    fetchUsers();
  }, []);
  console.log(users)
  const renderedUsers = users.map(user => <User user={user} key={user.id}/>)
  return (

    <div className="users container">
      <div>
        {renderedUsers}
      </div>
    </div>
  );
};

export default Users;
