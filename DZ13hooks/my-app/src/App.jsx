import React, { useCallback, useEffect, useMemo, useRef, useState, memo } from "react";


function App() {
  
const [inputValues, setInputValues] = useState([]);

const [value, setValue] = useState('');

const onClick = (e) => {
  if(!!value) {
  e.preventDefault();
  setInputValues([...inputValues, value]);
  setValue('');
  
  }
};

const onChange = (e) => {
  setValue(e.target.value);
};

const [checked, setChecked] = useState(false);


const DeleteTask = (value, index) => {
  let todo = document.querySelector(`.todo-${index}`) ;
  let result = inputValues.filter(item =>{ 
   return  item !== value
  }) 
  if (todo.style.textDecoration == "line-through") {
  setInputValues([...result]) 
  } else alert('task is not fulfilled')
 }


const checkCheckbox = (event, index) => {
  let todo = document.querySelector(`.todo-${index}`) ;
  if (event.target.checked) {
    todo.style.textDecoration = "line-through";
  } else todo.style.textDecoration = "none";
}

  return (
    <>
    <form >
        <input type="text" name="name" value={value} onChange={onChange}/>  
        <button onClick={onClick} type={'button'} disabled={!value}>Save Input here</button>
    </form>
    <ul>
      {!inputValues?.length && <li>No data</li>}
        {
          inputValues?.map((item, index) => {
            return (
              <li className={`todo-${index}`}  key={`${item} - ${index}`}>{item}<input key={`${item} - ${index}`}   onChange={(event) => checkCheckbox(event, index)}   type="checkbox"></input> 
              <img onClick={() => DeleteTask(item, index)} className="backet" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwJGLkApW3shw4okhZbEKf6wuNKdckJXnMiQ&usqp=CAU" alt="basket" width={'20px'} height={'15px'}/>
              </li> 
            )
          })
        }
    </ul>
    </>
  );
}  

export default App;
