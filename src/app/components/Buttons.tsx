import { ArticuloID, listaArticulos } from "../types"

interface Props{
    articulos: listaArticulos
    añadirArticulo: ({articulo_id}: ArticuloID) => void
}


export const Buton: React.FC<Props> = ({articulos, añadirArticulo}) =>{   

    return(
        <div className="grid grid-cols-3 gap-4 justify-items-stretch h-48">
            {articulos.map(baseArticulos =>(
                <button className="flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                key={baseArticulos.articulo_id}
                onClick={() => añadirArticulo({articulo_id: baseArticulos.articulo_id})}
                >
                    {baseArticulos.articulo_title}                    
                </button>
            ))}
        </div>
    )
}