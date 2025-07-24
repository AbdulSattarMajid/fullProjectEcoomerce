import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../Components/AuthForm";
import axios from "axios";
import { toast } from "react-toastify";

const SignupPage = ({ setToken, setUser }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const backendUrl = (import.meta.env.VITE_BACKEND_URL || "").replace(/\/$/, "");

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!role) {
            toast.error("Please select a role");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        setIsLoading(true);
        try {
            const { data } = await axios.post(`${backendUrl}/api/users/register`, {
                name,
                email,
                password,
                role,
            });

            if (data.success) {
                setToken(data.token);
                setUser(data.user);
                localStorage.setItem("token", data.token);
                toast.success("Account created successfully!");
                navigate("/");
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            toast.error(err.response?.data?.message || "Signup failed");
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <AuthForm
            mode="Signup"
            onSubmit={handleSignup}
            isLoading={isLoading}
            setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            setRole={setRole}
            name={name}
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            role={role}
            alternateLinkText="Already have an account?"
            alternateLinkAction={() => navigate("/login")}
        />

    );
};

export default SignupPage;
