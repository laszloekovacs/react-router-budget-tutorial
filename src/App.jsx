import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { logoutAction } from "./actions/logout"
import Main, { mainLoader } from "./layouts/Main"
import Dashboard, { dashboardAction, dashBoardLoader } from "./pages/Dashboard"
import Error from "./pages/Error"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ExpensesPage, { expensesAction, expensesLoader } from "./pages/ExpensesPage"

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
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
])

// Main Entry
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App
