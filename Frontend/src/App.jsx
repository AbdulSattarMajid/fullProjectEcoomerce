import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
const [user, setUser] = useState(() => {
  const storedUser = localStorage.getItem("user");
  try {
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Failed to parse user from localStorage:", error);
    return null;
  }
});


  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || "";
  });
  


  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/login"
          element={<LoginPage setToken={setToken} setUser={setUser} />}
        />
        <Route
          path="/signup"
          element={<SignupPage setToken={setToken} setUser={setUser} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
