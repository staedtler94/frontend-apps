import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import LoginForm from "./components/LoginForm"

function App() {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} >
        <Route index element={<LoginForm />} />
      </Route>
    )
  )
  
  return (
    <RouterProvider router={route} />
  )
}

export default App
