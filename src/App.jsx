import React from "react";
import Navbar from "./Components/Navbar.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shop from "./Pages/Shop.jsx";
import Category from "./Pages/Category.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx"
import Loginsignup from "./Pages/Loginsignup.jsx"
import Mens from "./Pages/Mens.jsx";
import Womens from "./Pages/Womens.jsx";
import Kids from "./Pages/Kids.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar /> <Shop/></>
    },


    {
      path:  "/men",
      element: <> <Navbar/> <Mens/> </>
    },


    {
      path: "/women",
      element: <><Navbar/> <Womens/></>

    },


    {
      path:"/kids",
      element: <><Navbar/> <Kids/> </>
    },

    {
      path: "/cart",
      element: <> <Navbar/> <Cart/> </>
    },

    {
      path: "/login",
      element: <> <Navbar/><Loginsignup/> </>
    },


  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
