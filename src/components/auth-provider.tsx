import { createContext, useContext, useState } from "react";

type Auth = "true" | "false";

type AuthProviderProps = {
    children: React.ReactNode;
    defaultAuth?: Auth;
    storageKey?: string;
};

type AuthProviderState = {
    auth: Auth; // Gunakan nama 'auth' untuk konsistensi
    setAuth: (auth: Auth) => void;
};

const initialState: AuthProviderState = {
    auth: "false",
    setAuth: () => null,
};

const AuthProviderContext = createContext<AuthProviderState>(initialState);

export function AuthProvider({
    children,
    defaultAuth = "false",
    storageKey = "Auth",
    ...props
}: AuthProviderProps) {
    const [auth, setAuth] = useState<Auth>(() => {
        const storedValue = localStorage.getItem(storageKey);
        return storedValue === "true" || storedValue === "false" ? storedValue : defaultAuth;
    });

    const value = {
        auth, // Gunakan 'auth' sesuai dengan nama state
        setAuth: (newAuth: Auth) => {
            localStorage.setItem(storageKey, newAuth);
            setAuth(newAuth);
        },
    };

    return (
        <AuthProviderContext.Provider {...props} value={value}>
            {children}
        </AuthProviderContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthProviderContext); // Gunakan 'AuthProviderContext'
}
