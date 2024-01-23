import {createRoot} from "react-dom/client";
import {App} from "./components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Cart from "@/pages/Cart/Cart";
import Shop from "@/pages/Shop/Shop";
const root = document.getElementById('root')

if (!root) {
  throw new Error('root not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/store',
        element: <Shop/>
      },
    ]
  }
])

container.render(
  <RouterProvider router={router}/>
)