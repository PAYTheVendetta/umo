"use client";

import { useEffect, useState } from "react";
import { Buton } from "./components/Buttons";
import { Lista } from "./components/Lista";
import { ArticuloID, listaArticulos } from "./types";
import { createClient } from "@supabase/supabase-js";
import { VITE_SUPABASE_ANON_KEY, VITE_SUPABASE_URL } from "./lib/conexiondatos";

const supabase = createClient(VITE_SUPABASE_URL,VITE_SUPABASE_ANON_KEY);

/*const pruevaButons = [
  {
    id: '1',
    title: 'new york',
    cantidad: 0,
    precio: 12.2
  },
  {
    id: '2',
    title: 'goat',
    cantidad: 0,
    precio: 15.5
  },
  {
    id: '3',
    title: 'preri',
    cantidad: 0,
    precio: 13.4
  },
  {
    id: '4',
    title: 'yanki',
    cantidad: 0,
    precio: 10.9
  }
] */

export default function Home() {

    const [listas, actualLista] = useState<listaArticulos>([])    

    useEffect(() => {
      getInstruments();
    }, []);
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




    return (
   <div className="flex">
      <Lista
        articulos={listas} 
        />
      <Buton
        añadirArticulo={modificarCantidad}
        articulos={listas} 
        />
    </div>
  );
}
