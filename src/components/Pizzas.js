import React from 'react';
import comidas from './comidas';

const Pizzas = ({agregarProductosTotal, productosTotal, pizza, agregarPizza}) => {

    const sumarPizza = pizz => {
        const buscarPizza = comidas.find(comida => comida.name === pizz)
        agregarPizza([...pizza, buscarPizza]);
        agregarProductosTotal([...productosTotal, buscarPizza]);
    }

    const restarPizza = pizz => {
        const pizzaEncontrada = pizza.findIndex(pizza => pizza.name === pizz);
        const pizzaEnTotalEncontrada = pizza.findIndex(pizza => pizza.name === pizz);
        if(pizzaEncontrada >= 0){
            pizza.splice(pizzaEncontrada, 1);
            productosTotal.splice(pizzaEnTotalEncontrada, 1);
        }
        agregarPizza([...pizza]);
        agregarProductosTotal([...productosTotal]);
    }

    const muzza = pizza.filter(pizza => pizza.name === "Muzzarella");
    const napo = pizza.filter(pizza => pizza.name === "Napolitana");
    const americana = pizza.filter(pizza => pizza.name === "Americana");
    const roquefort = pizza.filter(pizza => pizza.name === "Roquefort");


    return ( 
        <div>
            <h2>Nuestras pizzas</h2>
            <ul>
                <li className="my-3">
                    <span>Muzzarella </span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => sumarPizza("Muzzarella")}>+</button>
                    <button type="button" className="btn btn-outline-danger rounded-circle ml-2" onClick={() => restarPizza("Muzzarella")}>-</button>
                </li>
                <li className="my-3">
                    <span>Napolitana </span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => sumarPizza("Napolitana")}>+</button>
                    <button type="button" className="btn btn-outline-danger rounded-circle ml-2" onClick={() => restarPizza("Napolitana")}>-</button>
                </li>
                <li className="my-3">
                    <span>Americana </span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => sumarPizza("Americana")}>+</button>
                    <button type="button" className="btn btn-outline-danger rounded-circle ml-2" onClick={() => restarPizza("Americana")}>-</button>
                </li>
                <li className="my-3">
                    <span>Roquefort </span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => sumarPizza("Roquefort")}>+</button>
                    <button type="button" className="btn btn-outline-danger rounded-circle ml-2" onClick={() => restarPizza("Roquefort")}>-</button>
                </li>
            </ul>

            <h4>El total de pizzas es: {pizza.length} </h4>
            <h5>Tu pedido actual es: <br />
                {muzza.length > 0 ? muzza.length + " Muzarrella" : null}<br />
                {napo.length > 0 ? napo.length + " Napolitana" : null}<br />
                {americana.length > 0 ? americana.length + " Americana" : null}<br />
                {roquefort.length > 0 ? roquefort.length + " Roquefort" : null}
            </h5>
        </div>
     );
}
 
export default Pizzas;