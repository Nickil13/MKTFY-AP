import React, { useState, useContext, useEffect } from "react";
import auth0js from "auth0-js";
import axios from "../utils/request";
import jwt_decode from "jwt-decode";
import {
    clearSessionStorage,
    getSessionStorage,
    setSessionStorage,
    STORAGE_KEYS,
} from "../utils/storageUtils";
import PropTypes from "prop-types";
import { toast } from "components/CustomToast/CustomToastContainer";

const UserContext = React.createContext();

export const useUserContext = () => {
    return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(
        getSessionStorage(STORAGE_KEYS.USER_KEY, null)
    );
    const [isAuthenticated, setIsAuthenticated] = useState(
        getSessionStorage(STORAGE_KEYS.AUTH_TOKEN, false)
    );
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const webAuth = new auth0js.WebAuth({
        domain: process.env.REACT_APP_DOMAIN,
        clientID: process.env.REACT_APP_CLIENT_ID,
        audience: process.env.REACT_APP_AUDIENCE,
    });

    /* Check if token is expired, if so, set Authenticated to false. */
    React.useEffect(() => {
        let access_token = new URLSearchParams(
            document.location.hash.substring(1)
        ).get("access_token");

        if (access_token) {
            const decoded = jwt_decode(access_token);
            // Check if the user is an Admin
            const isAdmin = decoded["http://schemas.marketforyou.com/roles"];
            if (isAdmin.length > 0 && isAdmin.includes("Admin")) {
                /* Set is Authenticated and store the access token in session storage */
                setSessionStorage(STORAGE_KEYS.AUTH_TOKEN, access_token);
                setIsAuthenticated(true);

                /* Decode token to get user information */
                getUserDetails();
            } else {
                setError("You must be an admin to login.");
            }
        }
    }, []);

    /* Store changes made to user in session storage */
    useEffect(() => {
        if (user) {
            setSessionStorage(STORAGE_KEYS.USER_KEY, { ...user });
        }
    }, [user]);

    /* User API Functionality */
    const getIdFromToken = () => {
        const token = getSessionStorage(STORAGE_KEYS.AUTH_TOKEN, null);
        if (token) {
            const decoded = jwt_decode(token);
            return decoded.sub;
        }
        return;
    };
    /* Get user details for the current user */
    const getUserDetails = async () => {
        const userId = getIdFromToken();
        const res = await axios.get(`/User/${userId}`);
        if (res) {
            setUser(res);
        }
    };

    const editUser = async (userDetails) => {
        const userId = getIdFromToken();
        const body = { ...userDetails, id: userId };

        const res = await axios.put("/User", body);
        if (res) {
            setUser(res);
            toast.success("User info saved!");
        }
    };

    /* Auth0 Functionality */
    const login = (email, password) => {
        error && setError("");
        webAuth.login(
            {
                responseType: "token",
                realm: process.env.REACT_APP_REALM,
                email,
                password,
                redirectUri: "http://localhost:3000/auth/login",
                onRedirecting: function (done) {
                    done();
                },
            },
            (error) => {
                console.log(error);
                setError(error.description);
            }
        );
    };

    const logout = () => {
        setIsAuthenticated(false);
        clearSessionStorage();
        webAuth.logout({ returnTo: "http://localhost:3000/auth/login" });
    };

    const changePassword = (email) => {
        webAuth.changePassword(
            {
                connection: process.env.REACT_APP_REALM,
                email,
            },
            function (err, resp) {
                if (err) {
                    toast.error(err.message);
                } else {
                    toast.success(resp);
                }
            }
        );
    };

    return (
        <UserContext.Provider
            value={{
                user,
                login,
                logout,
                isAuthenticated,
                error,
                setError,
                getUserDetails,
                editUser,
                changePassword,
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

UserContextProvider.propTypes = {
    children: PropTypes.node,
};
