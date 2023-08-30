import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ErrorPage, HomeLayout, ProductDetails } from "./pages/index.ts"
import Layout from "./pages/Layout.tsx"
import { useEffect } from 'react'
import { getBestProducts, getCategories, getMainCategories, getNewProducts, getProducts, getSubCategories } from './redux/productsSlice'
import { useAppDispatch } from "./redux/hooks.ts"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMainCategories())
    dispatch(getCategories())
    dispatch(getSubCategories())
    dispatch(getProducts())
    dispatch(getBestProducts())
    dispatch(getNewProducts())
  }, [dispatch])

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
        },
        {
          path: '/:mainCategory/:category/:subCategory/:productSlug/:productId',
          element: <ProductDetails />,
          errorElement: <ErrorPage />,
        },
      ]
    }
  ])

  return <>
    <RouterProvider router={router} />
  </>

}

export default App
