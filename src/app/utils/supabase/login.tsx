"use client";
import React from "react";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Login({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Correo o contraseña incorrectos");
      console.error(error);
    } else {
      console.log("Sesión iniciada:", data.session);
      onLogin(); // Llamamos al padre
    }
  };

  return (
    <div className="p-4 flex flex-col gap-2">
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white p-2 rounded"
      >
        Iniciar sesión
      </button>
    </div>
  );
}
