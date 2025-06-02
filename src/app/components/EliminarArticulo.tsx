import React from "react";
import { ArticuloID } from "../types";

interface Props{
    ArticuloSelecionado: string|null,
    eliminarCantidad: ({articulo_id}: ArticuloID) => void

}

export const EliminarArticulo: React.FC<Props> = ({ArticuloSelecionado,eliminarCantidad}) =>{
    return(
        <button
        onClick={()=>ArticuloSelecionado && eliminarCantidad({ articulo_id: ArticuloSelecionado })}
        >
        Eliminar
        </button>
    )



}  