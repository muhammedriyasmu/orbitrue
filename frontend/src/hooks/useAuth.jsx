import { createContext, useContext, useMemo, useState } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(authService.getSession());

  const value = useMemo(
    () => ({
      user: session?.user || null,
      token: session?.token || null,
      isAuthenticated: Boolean(session?.token),
      login: async (values) => {
        const nextSession = await authService.login(values);
        setSession(nextSession);
        return nextSession;
      },
      register: async (values) => {
        const nextSession = await authService.register(values);
        setSession(nextSession);
        return nextSession;
      },
      logout: () => {
        authService.logout();
        setSession(null);
      }
    }),
    [session]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const useAuth = () => useContext(AuthContext);

export default useAuth;
