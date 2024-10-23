import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import { Analytics } from "@vercel/analytics/react"
import Portfolio from "./Pages/Portfolio/Portfolio";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about-us',
        element: <AboutUs />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Analytics />
    </div>
  );
}

export default App;
