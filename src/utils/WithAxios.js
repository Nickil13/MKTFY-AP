import React from "react";
import { useUserContext } from "../context/UserContext";
import axios from "./request";
import { getSessionStorage, STORAGE_KEYS } from "./storageUtils";

export default function WithAxios({ children }) {
    const { logout, setIsLoading } = useUserContext();

    React.useMemo(() => {
        axios.interceptors.request.use(
            (config) => {
                const token = getSessionStorage(STORAGE_KEYS.AUTH_TOKEN, null);
                if (token) {
                    config.headers["Authorization"] = "Bearer " + token;
                }
                setIsLoading(true);
                return config;
            },
            (error) => {
                console.log(error);
                setIsLoading(false);
                Promise.reject(error);
            }
        );
        axios.interceptors.response.use(
            (response) => {
                setIsLoading(false);
                return response.data;
            },
            (error) => {
                // parseError(error.message );
                setIsLoading(false);
                const originalConfig = error.config;
                if (
                    originalConfig.url !== "/auth/login" &&
                    originalConfig.url !== "/" &&
                    !originalConfig.url.includes("marketforyou.us.auth0.com") &&
                    error.response
                ) {
                    // Access token expired
                    if (error.response.status === 401) {
                        // Grab refresh token and use it to get a new accessToken & a new refresh token OR redirect to login
                        console.log("401 error");
                        logout();
                    }
                }
            }
        );
    }, []);
    return children;
}
