const STORAGE_KEYS = {
    USER_KEY: "mktfy-user",
    AUTH_TOKEN: "mktfy-token",
};

const setSessionStorage = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
};

const getSessionStorage = (key, initialValue) => {
    try {
        const value = sessionStorage.getItem(key);
        return JSON.parse(value);
    } catch (error) {
        return initialValue;
    }
};

const clearSessionStorage = () => {
    sessionStorage.removeItem(STORAGE_KEYS.USER_KEY);
    sessionStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
};

export {
    STORAGE_KEYS,
    setSessionStorage,
    getSessionStorage,
    clearSessionStorage,
};
