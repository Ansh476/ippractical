import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Body from './components/Body'
import Cardview from './components/Cardview'
import Error from './components/Error'

function App() {

  const routerapp = createBrowserRouter([{
    path: '/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/card/:cardId',
        element:<Cardview/>
      }
  ],
  errorElement:<Error/>
  }])

  return (
    <>
      <RouterProvider router={routerapp}/>
    </>
  )
}

export default App
