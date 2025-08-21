import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./assets/Redux";
import Body from "./Components/Body";
import Mainsec from "./Components/Mainsec";
import Watch from "./Components/Watch";
import Layout from "./Components/Layout";
import Video from "./Components/Video";
import Display_Video_Card from "./Components/displayVideoCard";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <Mainsec />,
          },
          {
            path: "watch",   // ✅ no need leading slash
            element: <Watch />,
          },
          {
            path: "video",   // ✅ relative
            element: <Video />,
          },
          {
            path : "display",
            element : <Display_Video_Card />
          }
        ],
      },
    ],
  },
]);


function App() {
  return (
    <Provider store={Store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
