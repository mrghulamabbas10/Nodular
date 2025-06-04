import './App.css'

import React from 'react'
import Routers from './routes/Routers'
import LayoutMain from './layout/LayoutMain'

export default function App() {
  return (
    <>
      <LayoutMain>
        <Routers />
      </LayoutMain>
    </>
  )
}
