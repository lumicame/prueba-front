import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import { getProductsFetch } from './actions'
import { Navigate, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Cart from './pages/Cart'
import Page404 from './pages/Page404'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductsFetch())
  }, [])
  return (
    <RouterProvider router={
      createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/details",
          element: <Detail />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/*",
          element: <Page404 />,
        },

      ])} />
  )
}

export default App
