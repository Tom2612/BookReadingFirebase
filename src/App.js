import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
     <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
