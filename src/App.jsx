// import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Head from "./Components/Head";
import Body from "./Components/Body";
import store from "./Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainContainer from "./Components/MainContainer";
import WatchVideo from "./Components/WatchVideo";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchVideo />,
      },
    ],
  },
]);

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
