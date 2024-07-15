import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Leyout/Root";
import Home from "../Pages/Home";
import ChatWindow from "../Components/ChatWindow";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
       {
        path: '/chatWindow',
        element: <ChatWindow></ChatWindow>
       }
      ]
    },
  ]);