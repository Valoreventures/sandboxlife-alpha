'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect, useContext } from 'react';
import React from 'react';
import { AuthContext } from './AuthContext';

export function useAuthContext() {
  return useContext(AuthContext);
}

const DEFAULT_USER = null
export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(DEFAULT_USER);
  useEffect(() => {
    // Implement user session restoration if needed
    // For example, check for a valid session or token
    restoreSession();
  }, []);

  useEffect(() => {
    // Implement user session restoration if needed
    // For example, check for a valid session or token
    if (user) router.push('/home')
  }, [user]);

  const updateUser = (userInfo) => {
    console.log(userInfo, 'userInfo');
    setUser(userInfo);
    
    // Implement your sign-in logic here, setting the user upon success
  };

  const signOut = () => {
    setUser(DEFAULT_USER)
    // Implement your sign-out logic here, clearing the user state
  };

  const restoreSession = () => {
    // Implement session restoration logic here
  };

  return (
    <AuthContext.Provider value={{ user, updateUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
