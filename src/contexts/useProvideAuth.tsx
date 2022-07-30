/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  applyActionCode,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
  User,
} from 'firebase/auth';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import { auth } from '@/lib/firebase';

import { IAuthContext } from './AuthProvider';

const showErrorToast = (toast: any, err: any) =>
  toast({
    description: err.message,
    status: 'error',
    position: 'top',
    isClosable: true,
    duration: 15000,
  });

export function useProvideAuth() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const signup = async (email: string, password: string, name: string) => {
    const authState = await createUserWithEmailAndPassword(auth, email, password);
    sendEmailVerification(authState?.user);

    if (currentUser !== null) {
      updateProfile(currentUser, {
        displayName: name,
      });

      return currentUser;
    }
  };

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function logout() {
    router.push('/');
    return await signOut(auth);
  }

  function resetPassword(email: string) {
    return sendPasswordResetEmail(auth, email);
  }

  const signInWithGoogle = useCallback(async (toast: any) => {
    return await signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => res)
      .catch((err) => showErrorToast(toast, err));
  }, []);

  function updateDisplayName(displayName: string) {
    return currentUser ? updateProfile(currentUser, { displayName: displayName }) : Promise.reject('No user logged in');
  }

  function updateUserPhoto(photoURL: string) {
    return currentUser ? updateProfile(currentUser, { photoURL: photoURL }) : Promise.reject('No user logged in');
  }

  function updateUserEmail(email: string) {
    return currentUser ? updateEmail(currentUser, email) : Promise.reject('No user logged in');
  }

  function updateUserPassword(password: string) {
    return currentUser ? updatePassword(currentUser, password) : Promise.reject('No user logged in');
  }

  async function handleVerifyEmail(actionCode: string) {
    await applyActionCode(auth, actionCode);
  }

  const requestVerificationMail = async () => {
    if (currentUser) {
      if (!currentUser.emailVerified) {
        await sendEmailVerification(currentUser);
        return;
      }

      throw new Error('Your email is already verified.');
    }

    throw new Error('Invalid Request');
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      // console.log(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value: IAuthContext = {
    currentUser,
    login,
    signup,
    logout,
    signInWithGoogle,
    resetPassword,
    updateUserEmail,
    updateUserPassword,
    updateDisplayName,
    updateUserPhoto,
    handleVerifyEmail,
    requestVerificationMail,
    loading,
  };

  return value;
}

export default useProvideAuth;
