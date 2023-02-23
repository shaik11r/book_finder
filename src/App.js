import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home";

function App() {
  return(
    <div className="app">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
