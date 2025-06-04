"use client";
import React from "react";
import { useEffect, useState} from "react";
import { Buton } from "./components/Buttons";
import { Lista } from "./components/Lista";
import { ArticuloID, listaArticulos } from "./types";
import { supabase } from "./utils/supabase/auth";
import { Session } from "@supabase/supabase-js";
import LoginButtons from "./components/LoginButtons";
import { LogoutButton } from "./components/LogoutButton";
import { EliminarArticulo } from "./components/EliminarArticulo";




export default function Home () {

    const [listas, actualLista] = useState<listaArticulos>([])
    const [session, setSession] = useState<Session | null>(null);
    const [ArticuloSelecionado,setArticuloSelecionado] = useState< string | null >(null)

    useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);


    useEffect(() => {
    if (session) getInstruments();
  }, [session]);

    async function getInstruments() {
      const { data } = await supabase.from("articulo").select("*");
      if (data) {
        // Añadir la propiedad 'cantidad' si no viene de la base de datos
        const articulosConCantidad = data.map((item) => ({
          ...item,
          cantidad: 0
        })) as listaArticulos;
        console.log(articulosConCantidad)
          actualLista(articulosConCantidad);
      }
    }
    async function name() {
      try{
      const {data,error} = await supabase.from("articulo").select("articulo_ingredientes")
       if (error) {
      console.error("Error al obtener los ingredientes:", error.message);
      return;
      }
      if(data){
        const ingredientes = data.map(item => item.articulo_ingredientes)
        console.log(ingredientes)
      } 
      }catch (err) {
        console.error("error inesperado", err)
      }
      
    }
   

    const modificarCantidad =({articulo_id}: ArticuloID): void=>{
      const newCompleted = listas.map(lista => {
      if(lista.articulo_id === articulo_id){
        return{
          ... lista,
          cantidad: lista.cantidad +1
        }
      }
      return lista
    })

    actualLista(newCompleted)

    }
    const eliminarCantidad =({articulo_id}: ArticuloID): void=>{
      const newCompleted = listas.map(lista => {
      if(lista.articulo_id === articulo_id){
        return{
          ... lista,
          cantidad: 0
        }
      }
      return lista
    })

    actualLista(newCompleted)

    }

    if (!session) {
    return  <div className="flex flex-col items-center justify-center min-h-screen p-4">
              <LoginButtons />
            </div>;
  }
  


    return (
   <div className="grid grid-rows-10 grid-cols-4 p-4 gap-4 border-2 h-lvh">
      <LogoutButton/>
      <Lista
        articulos={listas}
        ArticuloSelecionado={ArticuloSelecionado}
        setArticuloSelecionado={setArticuloSelecionado} 
        name={name}
        />
      <Buton
        añadirArticulo={modificarCantidad}
        articulos={listas} 
        />
      
      <EliminarArticulo
        ArticuloSelecionado={ArticuloSelecionado}
        eliminarCantidad={eliminarCantidad}
      />      
    </div>
  );
}
