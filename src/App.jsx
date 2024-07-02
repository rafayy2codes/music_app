import React, { useContext } from 'react'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'

import Display from './Components/Display'
import { Playercontext } from './Context/Playercontext'

const App = () => {

  const { audioRef } = useContext(Playercontext);

  return (
    <div className='h-screen bg-black'>

      <div className='h-[98%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} preload='auto'></audio>

    </div>
  )
}

export default App