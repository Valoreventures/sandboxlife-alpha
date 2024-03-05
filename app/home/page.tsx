'use client';

import React from 'react';
import { useAuthContext } from '../../AuthProvider';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    console.log(user, 'user');
    if (!user) {
      router.push('/login'); // Redirect to sign-in page if not authenticated
    }
  }, [user]);

  return user ? (
    <div>Welcome, {JSON.stringify(user)}!</div>
  ) : (
    <div>Redirecting to sign-in...</div>
  );
}