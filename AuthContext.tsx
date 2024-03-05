'use client';

import { createContext } from "react";

export const AuthContext = createContext({ user: null, updateUser: (userInfo: any) => {}, signOut: () => {} });
