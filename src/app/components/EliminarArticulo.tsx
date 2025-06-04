import React from "react";
import { ArticuloID } from "../types";

interface Props{
    ArticuloSelecionado: string|null,
    eliminarCantidad: ({articulo_id}: ArticuloID) => void

}

export const EliminarArticulo: React.FC<Props> = ({ArticuloSelecionado,eliminarCantidad}) =>{
    return(
        <button
        className="justify-center items-center bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
        onClick={()=>ArticuloSelecionado && eliminarCantidad({ articulo_id: ArticuloSelecionado })}
        >
        Eliminar
        </button>
    )



}  