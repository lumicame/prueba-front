import { listProductos } from "../helper";

export function productsFetch() {
    return listProductos;
    //return fetch('https://fakestoreapi.com/products').then(response => response.json());
}