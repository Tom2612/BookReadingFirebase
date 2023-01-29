import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { currentUser } = useAuth();

  return (
    <div className="app">
     <BrowserRouter>
     <Navbar />
     <div className="pages">
        <Routes>
          <Route path='/' element={currentUser ? <Home /> : <Navigate to='/login' />} />
          <Route path='/signup' element={!currentUser ? <Signup /> : <Navigate to='/' />} />
          <Route path='/login' element={!currentUser ? <Login /> : <Navigate to='/' />} />
        </Routes>
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
