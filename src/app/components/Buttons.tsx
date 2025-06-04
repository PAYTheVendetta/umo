import { ArticuloID, listaArticulos } from "../types"
import React from "react"
import { Info } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"

interface Props{
    articulos: listaArticulos
    añadirArticulo: ({articulo_id}: ArticuloID) => void
}


export const Buton: React.FC<Props> = ({articulos, añadirArticulo}) =>{   

    return(
        <div className="grid row-span-8 col-span-3 grid-cols-3 gap-4 justify-items-stretch">
            {articulos.map(baseArticulos =>(
                <div
                key={baseArticulos.articulo_id} 
                className="grid relative border-2">

                    <button 
                    className="flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"                 
                    onClick={() => añadirArticulo({articulo_id: baseArticulos.articulo_id})}
                    >
                        {baseArticulos.articulo_title}                    
                    </button>
                     <Popover>
                        <PopoverTrigger asChild>
                            <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                                <Info className="w-4 h-4 text-blue-600" />
                            </button>
                        </PopoverTrigger>
                        <PopoverContent className="z-50 w-80 p-5 rounded-xl bg-black text-white border-cyan-200 shadow-xl text-sm" side="left" align="start">
                            <p className="font-medium mb-2">Ingredientes:</p>
                            <ul className="list-disc pl-4 space-y-1">
                                {baseArticulos.articulo_ingredientes?.map((i: string, idx: number) => (
                                <li key={idx}>{i}</li>                                
                                ))}
                            </ul>
                        </PopoverContent>
                     </Popover>
                    
                </div>
            ))}
        </div>
    )
}