import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../Components/AuthForm";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPage = ({ setToken, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const backendUrl = (import.meta.env.VITE_BACKEND_URL || "").replace(/\/$/, "");

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post(`${backendUrl}/api/users/login`, {
        email,
        password,
      });

      if (data.success) {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem("token", data.token);
        toast.success("Logged in successfully!");
        navigate("/"); // go to homepage or dashboard
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthForm
      mode="Login"
      onSubmit={handleLogin}
      isLoading={isLoading}
      setEmail={setEmail}
      setPassword={setPassword}
      email={email}
      password={password}
      alternateLinkText="Don't have an account?"
      alternateLinkAction={() => navigate("/signup")}
    />
  );
};

export default LoginPage;
