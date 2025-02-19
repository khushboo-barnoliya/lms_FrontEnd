import React from 'react'
import { Button } from './components/ui/button'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import HeroSection from './pages/student/HeroSection'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layout/MainLayout'
import path from 'path'
import Courses from './pages/student/Courses'
import MyLearing from './pages/student/MyLearing'


const appRouter=createBrowserRouter([
  {
    path:'/',
    element:(<> 
    <HeroSection/>
    <Courses/>
    {/* couses */}
    </>
    ),

  },
  {
    path:'login',
    element:<Login/>
  },
  {
    path:'my-learning',
    element:<MyLearing/>
  }
  
])
const App = () => {
  return (
    <main>
      <Navbar/>
    <RouterProvider router={appRouter}>

    </RouterProvider>
    </main>
  )
}

export default App