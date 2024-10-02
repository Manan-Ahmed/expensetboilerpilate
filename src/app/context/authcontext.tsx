

"use client";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { app } from "../firebase/firebaseconfig";

type UserType = {
    email: string | null;
    uid: string;
    emailVerified: boolean | null;
};

type AuthContextType = {
    user: UserType | null;
    id: string | null;
    setId: (id: string | null) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthContextProvider({ children }: { children: ReactNode }) {
    const route = useRouter();
    const [user, setUser] = useState<UserType | null>(null);
    const [id, setId] = useState<string | null>(null);

    useEffect(() => {
        const auth = getAuth(app);

        const unsubscribe = onAuthStateChanged(auth, (logInUser) => {
            if (logInUser) {
                const { email, uid, emailVerified } = logInUser;
                setUser({ email, uid, emailVerified });
                route.push('/homes');
                console.log(emailVerified);
            } else {
                console.log('User is not logged in');
                setUser(null);
                route.push('/');
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [route]);

    return (
        <AuthContext.Provider value={{ user, id, setId }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error("useAuthContext must be used within an AuthContextProvider");
    }
    return context;
};