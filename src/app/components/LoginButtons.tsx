// src/components/LoginButtons.tsx
'use client';
import React from 'react';
import { useState } from 'react';
import { loginWithEmail} from '../utils/supabase/auth';
import { User } from '@supabase/supabase-js';


export default function LoginButtons() {
  const [, setLoading] = useState(false);
  const [role, setRole] = useState<'admin' | 'empleado' | null>(null);
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [, setUser] = useState<User | null>(null);

  const handleLogin = async (role: 'admin' | 'empleado') => {
    setRole(role);
    setErrorMsg('');

    if (role === 'empleado') {
      await doLogin('empleado@miapp.com', 'empleado123');
    }
  };

  const doLogin = async (email: string, password: string) => {
    setLoading(true);
    const { data, error } = await loginWithEmail(email, password);
    if (error) {
      setErrorMsg(error.message);
    } else {
      setUser(data.user);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <button onClick={() => handleLogin('empleado')} className="bg-blue-500 text-white px-4 py-2 rounded">
        Entrar como Empleado
      </button>

      <button onClick={() => setRole('admin')} className="bg-red-500 text-white px-4 py-2 rounded">
        Entrar como Admin
      </button>

      {role === 'admin' && (
        <div className="flex flex-col gap-2">
          <input
            type="password"
            placeholder="Contraseña de admin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border rounded"
          />
          <button
            onClick={() => doLogin('admin@miapp.com', password)}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Confirmar
          </button>
        </div>
      )}

      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
    </div>
  );
}
