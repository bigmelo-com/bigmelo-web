import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./error-page";
import About from "./routes/About";
import Terms from "./routes/Terms";
import Profile from "./routes/Profile";
import ValidateUser from "./routes/ValidateUser"

export function App() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Root />,
          errorElement: <ErrorPage/>,
        },
        {
          path: "about",
          element: <About />,
          errorElement: <ErrorPage/>
        },
        {
          path: "terms",
          element: <Terms />,
          errorElement: <ErrorPage/>
        },
        {
          path: "profile",
          element: <Profile />,
          errorElement: <ErrorPage/>
        },
        {
          path: "validate",
          element: <ValidateUser />,
          errorElement: <ErrorPage/>
        },
      ]);
    return(
        <>
        <RouterProvider router={router}/>
        </>
    )
}