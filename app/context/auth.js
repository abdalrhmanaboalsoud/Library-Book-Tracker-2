"use client";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export default function AuthWrapper({ children }) {
    const router = useRouter();
    const [globalState, setGlobalState] = useState({
        tokens: null,
        username: null,
        login,
        logout,
    });

    useEffect(() => {
        const storedTokens = localStorage.getItem("tokens");
        if (storedTokens) {
            setGlobalState((prevState) => ({
                ...prevState,
                tokens: JSON.parse(storedTokens),
            }));
        }
    }, []);

    async function login(userinfo) {
        try {
            const url = "http://127.0.0.1:8000/api/token/";
            const res = await axios.post(url, userinfo);
            const tokens = res.data;
            localStorage.setItem("tokens", JSON.stringify(tokens));
            setGlobalState((prevState) => ({
                ...prevState,
                tokens,
            }));
            router.push("/");  // Redirect to home or dashboard after login
        } catch (error) {
            console.error("Login failed:", error.response?.status, error.response?.data);
            if (error.response && error.response.status === 401) {
                alert("Invalid credentials. Please try again.");
            } else {
                alert("An error occurred. Please try again later.");
            }
        }
    }

    function logout() {
        localStorage.removeItem("tokens");
        setGlobalState((prevState) => ({
            ...prevState,
            tokens: null,
        }));
        router.push("/login");  // Redirect to login page after logout
    }

    return (
        <AuthContext.Provider value={globalState}>
            {children}
        </AuthContext.Provider>
    );
}
