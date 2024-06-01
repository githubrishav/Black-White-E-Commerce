import React from "react";
import Navbar from "./Components/Navbar.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./Pages/Cart.jsx"
import Loginsignup from "./Pages/Loginsignup.jsx"
import Mens from "./Pages/Mens.jsx";
import Womens from "./Pages/Womens.jsx";
import Kids from "./Pages/Kids.jsx";
import Home from "./Pages/Home.jsx";
import Wishlist from "./Pages/Wishlist.jsx";
import Newacc from "./Pages/Newacc.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar /> <Home/></>,
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

    {
      path:"/wishlist",
      element: <><Navbar/><Wishlist/></>
    },
    {
      path: "/signup",
      element : <><Navbar/><Newacc/></>
    }


  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
