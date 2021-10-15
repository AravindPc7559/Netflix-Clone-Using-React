import React from 'react'
import './App.css'
import Banner from './Component/Banner/Banner'
import NavBar from './Component/navbar/NavBar'
import RowPost from './Component/RowPost/RowPost'
import {action,originals,romance} from './urls.js';

function App() {
  return (
    <div className='App' >
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Orginals' />
    <RowPost url={action} title='Action' isSmall />
    <RowPost url={romance} title='romance' isSmall />
    </div>
  )
}

export default App
