import React, {useState} from "react";
import Title from "./components/Button/title";

const App = () => {
    const [showInfo, setShowInfo] = useState(false)


    function funOfPerson() {
        setShowInfo(true)
    }

    return (
    <div>
        <button onClick = {funOfPerson}>Получить информацию</button>
        {showInfo === true && <Title name ='Denis Zaharchenko' age={20} gender='Male'/>}
    </div>
    )

}



export default App