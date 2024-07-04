import React, { useContext } from 'react'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'

import Display from './Components/Display'
import Chatbot from './Components/Chatbot'


const App = () => {



  return (
    <div className='h-screen bg-black'>

      <div className='h-[98%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <Chatbot />


    </div>
  )
}

export default App