import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ErrorPage, HomeLayout } from "./pages/index.ts"
import Layout from "./pages/Layout.tsx"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomeLayout />,
          errorElement: <ErrorPage />,
        }
      ]
    }
  ])

  return <>
    <RouterProvider router={router} />
  </>

}

export default App
