import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
