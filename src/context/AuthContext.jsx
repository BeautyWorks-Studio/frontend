// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const defaultAdmin = {
  email: "admin@example.com",
  password: "admin123",
  role: "admin",
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  const login = (email, password) => {
    // Check admin
    if (email === defaultAdmin.email && password === defaultAdmin.password) {
      setUser({ email, role: "admin" });
      return { success: true };
    }

    // For demo: any other email logs in as user
    if (password) {
      setUser({ email, role: "user" });
      return { success: true };
    }

    return { success: false, message: "Invalid credentials" };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
