import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/dashboard/home'
import Leading from '../components/icons/Leading'
import DeploymentMain from '../pages/dashboard/deployments'
import LeadingMain from '../pages/dashboard/Lending'
// user

const Routers = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path='/'
          element={ <Home /> }
        />
        <Route
          path='/dashboard'
          element={ <Dashboard /> }
        />
        <Route
          path='/dashboard/deployments'
          element={ <DeploymentMain /> }
        />
        <Route
          path='/dashboard/lending'
          element={ <LeadingMain /> }
        />
      </Routes>
    </HashRouter>
  )
}

export default Routers
