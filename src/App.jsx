import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import List from "./List"
import './App.css'

function App() {
  

  let list = [
        {
          id:1,
          text:"hey i am div 1",
          rating:"3"
        },
        {
          id:2,
          text:"hey i am div 2",
          rating:"4"
        },{
          id:3,
          text:"hey i am div 3",
          rating:"2"
        }
  ]


  return (
    <div>
          {/* {for handling events code please visit List Component} */}

            {
              list.filter(item=>item.rating>2).map((item)=>{
                return(
                    <List  item = {item}/>
                )
              })
            }

           
          
    </div>
  )
}

export default App
