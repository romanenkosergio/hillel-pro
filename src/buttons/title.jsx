import React from "react";

const Title = (props) => {
  return (
  <>
    <div>Имя: {props.name}</div>
    <div>Возраст: {props.age}</div>
    <div>Пол: {props.gender}</div>
  </>
    
  )
}

export default Title



//     const titles = ['Имя: Сергей Дударчук', 'Возраст: 28', 'Пол: Мужской']

// return (
//     <>
//        { titles.map((title, id) => {
//         return (
//             <div className="info">
//                 <Text text={title} key={`title-${id}`}/>
//             </div>
//         )
//        })}
       
//     </>
   
// )

