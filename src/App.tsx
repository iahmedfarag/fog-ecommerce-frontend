import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { AllProducts, ErrorPage, HomeLayout, ProductDetails, Layout, Login, Register, MyAccountPage } from "./pages/index.ts"
import { useEffect } from 'react'
import { getBestProducts, getEventProducts, getFilterProductsObjects, getNewProducts } from './redux/products/productsFetchFunctions.ts'
import { getMainCategories, getCategories, getSubCategories } from "./redux/categories/categoriesFetchFunctions.ts"
import { useAppDispatch } from "./redux/hooks.ts"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMainCategories())
    dispatch(getCategories())
    dispatch(getSubCategories())
    dispatch(getBestProducts())
    dispatch(getNewProducts())
    dispatch(getFilterProductsObjects())
    dispatch(getEventProducts("64e3ac48b095130eeb73ac3b"))
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
        {
          path: '/all-products', //?page=1&limit=8&model=all&brand=all&color=all&price=all
          element: <AllProducts />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/register',
          element: <Register />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/login',
          element: <Login />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/my-account',
          element: <MyAccountPage />,
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
