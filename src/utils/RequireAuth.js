import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import jwtDecode from "jwt-decode";
import PropTypes from "prop-types";
import { getSessionStorage, STORAGE_KEYS } from "./storageUtils";

export default function RequireAuth({ children }) {
    const { isAuthenticated, logout } = useUserContext();
    let location = useLocation();

    React.useEffect(() => {
        const token = getSessionStorage(STORAGE_KEYS.AUTH_TOKEN, null);
        if (token) {
            try {
                const decoded = jwtDecode(token);
                if (decoded.exp * 1000 < Date.now()) {
                    console.log("token expired");
                    logout();
                }
            } catch (error) {
                console.log(error);
                logout();
            }
        }
    }, [location]);

    if (!isAuthenticated) {
        return <Redirect to="/" state={{ from: location }} replace />;
    }
    return children;
}

RequireAuth.propTypes = {
    children: PropTypes.node,
};
