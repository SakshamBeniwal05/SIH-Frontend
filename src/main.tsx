import Login from './custom/Login/Login.tsx'
import Home from './pages/Home/Home.tsx'
import Subject1_page from './pages/subject-page/Subject1_page.tsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[{
    path:'/',
    element:<Login/>
  },
  {
    path:'/home',
    element:<Home/>
  },
  {
    path:"/subject1",
    element:<Subject1_page/>
  }
]
}
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
