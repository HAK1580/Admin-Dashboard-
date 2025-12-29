import { useState } from 'react'
import Layout from './components/Layout.jsx'
import Reports from './pages/Reports.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Settings from './pages/Settings.jsx'
import Analytics from './pages/Analytics.jsx'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'

function App() {
const router=createBrowserRouter([
{
  path:"/",
  element: <Layout />,
  children:[
    {path:"/reports",element: <Reports />  },
    {path:"/",element: <Dashboard />  },
    {path:"/analytics",element: <Analytics />  },
    {path:"/settings",element: <Settings />  }
  ]
  
}
])


  return (
    <>
    <RouterProvider router={router} />
  
    </>
  )
}

export default App
