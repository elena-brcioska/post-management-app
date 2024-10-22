import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/AppLayout/AppLayout'
import HomePage from './pages/Home/HomePage'
import User from './pages/User/User'
import NewPost from './pages/Posts/NewPost'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [{
        index: true,
        element: <HomePage />
      },{
        path: "new",
        element: <NewPost />
      },
      {
        path: "user",
        element: <User />
      }
]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App;
