import React from 'react'
import Tweet from './Tweet'
import './style.css'

function App() {
    return (
       <div className='tweet'>
        <Tweet
            name="User Name"
            username="username"
            date={new Date().toDateString()}
            message={"Hello World!"}/>
        <Tweet
          name="Elie Schoppik"
          username="eschoppik"
          date={new Date().toDateString()}
          message="#Ilovehashtags"/>
        <Tweet
          name="Tim Garcia"
          username="TimGarcia0"
          date={new Date().toDateString()}
          message="Follow me on Twitter!"/>
       </div> 
    )
}

export default App;