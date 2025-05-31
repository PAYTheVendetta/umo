export interface baseArticulos {
    articulo_id: number
    articulo_title: string
    cantidad: number
    articulo_precio: number
}

export type ArticuloID = Pick<baseArticulos, 'articulo_id'>
export type ArticuloTitle = Pick<baseArticulos, 'articulo_title'>
export type ArticuloCantidad = Pick<baseArticulos, 'cantidad'>
export type ArticuloPrecio = Pick<baseArticulos, 'articulo_precio'>

export type listaArticulos = baseArticulos[]


