import React, {useState} from "react";
import Title from "./buttons/title";


const App = () => {

const [showInfo, setShowInfo] = useState(false)

function funOfPerson() {
   setShowInfo(true)
}

 return (
      <div>
         <button onClick={funOfPerson}>Press</button>
         {showInfo === true && <Title name='Сергей Дударчук' age={28} gender='Мужской'/>}
      </div>
)
}

export default App
