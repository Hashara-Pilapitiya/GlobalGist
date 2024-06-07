import { createContext, useEffect, useState } from "react";

export const UseContext = createContext();

const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <UseContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UseContext.Provider>
    );
}

export default UserProvider;

