
import React from "react"
import { listaArticulos } from "../types"

interface Props{
    articulos: listaArticulos
    ArticuloSelecionado: string | null;
    setArticuloSelecionado: React.Dispatch<React.SetStateAction<string | null>>;
    name: () => void
}



export const Lista: React.FC<Props> = ({articulos,ArticuloSelecionado,setArticuloSelecionado,name}) =>{

    


    return(
        <div className=" border-2 row-span-8">
            <ul className="grid gap-2 p-2">
                {articulos.map(baseArticulos => baseArticulos.cantidad >= 1 ?(
                    
                        <li 
                        className="gap-2"
                        key={baseArticulos.articulo_id}
                        onDoubleClick={()=>{name()}}
                        >
                            
                            <input
                            type="radio"
                            id={baseArticulos.articulo_id}
                            className="peer hidden"
                            name="ArticuloSelecionado"
                            value={baseArticulos.articulo_id}
                            checked={ArticuloSelecionado === baseArticulos.articulo_id}
                            onChange={()=> setArticuloSelecionado(baseArticulos.articulo_id)}
                            />
                            <label
                            htmlFor= {baseArticulos.articulo_id}
                            className="block gap-2 cursor-pointer rounded-xl border p-4 transition-colors
                                     peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-600
                                     hover:bg-blue-500 border-gray-300"
                            >
                            {baseArticulos.articulo_title} {baseArticulos.cantidad} x {baseArticulos.articulo_precio} ={" "}
                            {(baseArticulos.articulo_precio * baseArticulos.cantidad) % 1 === 0
                            ? baseArticulos.articulo_precio * baseArticulos.cantidad
                            : (baseArticulos.articulo_precio * baseArticulos.cantidad).toFixed(1)}
                            
                            </label>
                            
                        </li>
                    
                ):null
                )} 
            </ul>
        </div>
    )

}