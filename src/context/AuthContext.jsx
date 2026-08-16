import {
    createContext,
    useContext,
    useState,
} from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        try {
            const loggedIn =
                localStorage.getItem("shopease_logged_in");

            const savedUser =
                localStorage.getItem(
                    "shopease_current_user"
                );

            if (loggedIn === "true" && savedUser) {
                return JSON.parse(savedUser);
            }

            return null;
        } catch (error) {
            console.error(
                "Failed to load authentication:",
                error
            );

            return null;
        }
    });

    const login = (userData) => {
        localStorage.setItem(
            "shopease_logged_in",
            "true"
        );

        localStorage.setItem(
            "shopease_current_user",
            JSON.stringify(userData)
        );

        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem(
            "shopease_logged_in"
        );

        localStorage.removeItem(
            "shopease_current_user"
        );

        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                isAuthenticated: Boolean(user),
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth must be used inside AuthProvider"
        );
    }

    return context;
};