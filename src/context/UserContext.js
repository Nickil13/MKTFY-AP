import React, { useState, useContext, useEffect } from "react";
import auth0js from "auth0-js";
import axios from "../utils/request";
import jwt_decode from "jwt-decode";
import {
    clearLocalStorage,
    getLocalStorage,
    setLocalStorage,
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
        getLocalStorage(STORAGE_KEYS.USER_KEY, null)
    );
    const [isAuthenticated, setIsAuthenticated] = useState(
        sessionStorage.getItem("access_token")
    );
    //const [editUserSuccess, setEditUserSuccess] = useState(false);
    const [error, setError] = useState("");

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
            /* Set is Authenticated and store the access token in session storage */
            sessionStorage.setItem("access_token", access_token);
            setIsAuthenticated(true);
            console.log("access token saved");

            /* Decode token to get user information */
            getUserDetails();
        }
    }, []);

    /* Store changes made to user in local storage */
    useEffect(() => {
        if (user) {
            setLocalStorage(STORAGE_KEYS.USER_KEY, { ...user });
        }
    }, [user]);

    /* User API Functionality */
    const getIdFromToken = () => {
        const token = sessionStorage.getItem("access_token");
        if (token) {
            const decoded = jwt_decode(token);
            return decoded.sub;
        }
        return;
    };
    const getUserDetails = async () => {
        const userId = getIdFromToken();

        try {
            const res = await axios.get(`/User/${userId}`);
            setUser(res);
        } catch (error) {
            console.log(error);
        }
    };

    const editUser = async (userDetails) => {
        const userId = getIdFromToken();
        const body = { ...userDetails, id: userId };
        // setEditUserSuccess(false);
        // setError("");

        try {
            const res = await axios.put("/User", body);
            setUser(res);
            //setEditUserSuccess(true);
            toast.success("User info saved!");
        } catch (error) {
            toast.error("Error: did not save user info.");
            // setError("Error editing user");
            // console.log(error);
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
        sessionStorage.removeItem("access_token");
        clearLocalStorage();
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
                // setEditUserSuccess,
                // editUserSuccess,
                isAuthenticated,
                error,
                setError,
                getUserDetails,
                editUser,
                changePassword,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

UserContextProvider.propTypes = {
    children: PropTypes.node,
};
