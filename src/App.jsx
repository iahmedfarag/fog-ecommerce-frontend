import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HomeLayout, ErrorPage, Home } from "./pages/index.js"





function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
          errorElement: <ErrorPage />,
        },
        // {
        //   path: "/products/:id",
        //   element: <ProductDetails />,
        //   errorElement: <ErrorPage />,
        // },
      ]
    }
  ])

  return <>
    <RouterProvider router={router} />
  </>

}

export default App
