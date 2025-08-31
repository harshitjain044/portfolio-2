import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from "./Layout.jsx"
import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Projects from './components/Projects.jsx'
import Experiences from './components/Experiences.jsx'

const router  = createBrowserRouter([
  {
    path : '/',
    element : < Layout />,
    children : [
      {
        path : '',
        element : <Home />
      },
      {
        path : 'skills',
        element : <Skills />
      },
      {
        path : 'contact',
        element : <Contact />
      },
      {
        path : 'projects',
        element : <Projects />
      },
      {
        path : 'experiences',
        element : <Experiences />
      }

    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
)
