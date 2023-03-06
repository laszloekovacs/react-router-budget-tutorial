import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Main, { mainLoader } from "./layouts/Main"
import Dashboard, { dashBoardLoader } from "./pages/Dashboard"
import Error from "./pages/Error"

// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: dashBoardLoader,
        errorElement: <Error />,
      },
    ],
  },
])

// Main Entry
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
