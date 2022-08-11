import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./component/Button";

type GetType = {
   "userId": number,
   "id": number,
   "title": string,
   "body": string
}

function App() {
   const [get, setGet] = useState<Array<GetType>>([])

   const GetRequestHandler = () => {
      setGet([])
   }

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.json())
         .then(json => setGet(json))
   }, [])

   return (
      <div className="App">
         <Button nickName={'CleanPages'} callBack={GetRequestHandler}/>
         <p></p>
         {get.map((el) => {
            return (
               <ul>
                  <span>{el.id} - </span>
                  <span>{el.userId} - </span>
                  <span>{el.title}</span>
               </ul>
            )
         })}
      </div>
   );
}

export default App;
