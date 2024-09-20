import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [services, setServices] = useState([])
    const authoriztionToken = `Bearer ${token}`

    const storeTokenInLS = (generatedToken) => {
        setToken(generatedToken)
        return localStorage.setItem("token", generatedToken);
    }

    let isLogedIn = token;


    const logoutUser = () => {
        setToken("");
        return localStorage.removeItem("token")
    }

    const userAuthentication = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`https://servicebase-api.vercel.app/api/user/auth`, {
                method: "GET",
                headers: {
                    Authorization: authoriztionToken,
                }
            });

            if (response.ok) {
                const data = await response.json();
                // console.log("contact data",data.userData)
                setUser(data.userData)
                setIsLoading(false)
            } else {
                console.log("Error fetching user data");
                setIsLoading(false);
            }

        } catch (error) {
            console.error("error fetching user data")
        }
    }

    const getServices = async () => {
        try {
            const response = await fetch(`https://servicebase-api.vercel.app/api/service`, {
                method: "GET"
            })

            if (response.ok) {
                const data = await response.json();
                // console.log(data.msg);
                setServices(data.msg)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getServices()
        userAuthentication()
    }, [])


    return (
        <AuthContext.Provider value={{
            isLogedIn, logoutUser, storeTokenInLS, user, services,
            authoriztionToken, isLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
}