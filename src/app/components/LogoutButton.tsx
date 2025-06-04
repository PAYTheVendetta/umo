'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { supabase } from '../utils/supabase/auth';


export const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh(); // O router.push('/') si quieres redirigir
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-700 col-span-4 text-white font-bold rounded"
    >
      Cerrar sesión
    </button>
  );
};
