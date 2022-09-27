import React from "react";
import Button from "./components/Button";

const App = () => {
  const [user, setUser] = React.useState(null)

  const showUser = () => {
    setUser({
      name: 'Ivan Ivanov',
      age: 25,
      sex: 'man'
    })
  }

  return (
    <>
        <Button
          onClick={showUser}
          title="Show user"
        />
      {
        user !== null && (
          <ul>
            <li>name: {user.name}</li>
            <li>age: {user.age}</li>
            <li>sex: {user.sex}</li>
          </ul>         
        )
      }
    </>
  )
}

export default App;

