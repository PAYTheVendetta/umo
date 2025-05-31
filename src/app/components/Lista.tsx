import { listaArticulos } from "../types"


interface Props{
    articulos: listaArticulos
}

export const Lista: React.FC<Props> = ({articulos}) =>{

    

    return(
        <div>
            <ul>
                {articulos.map(baseArticulos => baseArticulos.cantidad >= 1 ?(
                    <li key={baseArticulos.articulo_id}>
                        {baseArticulos.articulo_title} {baseArticulos.cantidad} x {baseArticulos.articulo_precio} ={" "}
                        {(baseArticulos.articulo_precio * baseArticulos.cantidad) % 1 === 0
                        ? baseArticulos.articulo_precio * baseArticulos.cantidad
                        : (baseArticulos.articulo_precio * baseArticulos.cantidad).toFixed(1)}
                    </li> 
                ):null
                )}
            </ul>
        </div>
    )

}