/* eslint-disable @typescript-eslint/no-explicit-any */
import { User, UserCredential } from 'firebase/auth';
import { createContext, ReactNode } from 'react';

import { useClient } from '@/utils/useClient';

import useProvideAuth from './useProvideAuth';

export interface IAuthContext {
  currentUser: User;
  login: (email: string, password: string) => Promise<UserCredential>;
  signup: (email: string, password: string, name: string) => Promise<UserCredential | User>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateUserEmail: (email: string) => Promise<void>;
  updateUserPassword: (password: string) => Promise<void>;
  signInWithGoogle: (toast: any) => Promise<UserCredential>;
  updateDisplayName: (displayName: string) => Promise<void>;
  updateUserPhoto: (photoURL: string) => Promise<void>;
  handleVerifyEmail: (actionCode: string) => Promise<void>;
  requestVerificationMail: (email: string) => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<IAuthContext | null>(null);

export function useAuth(): IAuthContext {
  const context = useClient(AuthContext);
  return context;
}

interface IAuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: IAuthProviderProps): JSX.Element {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
