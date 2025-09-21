import { ItemCounter } from "./shopping-cart/ItemCounter";

interface Product {
    id: number;
    name: string;
    quantity?: number;
}

export function FirstStepsApp() {

    const products: Product[] = [
        {id: 1, name: "Nintendo Switch", quantity: 8},
        {id: 2, name: "Play Station 5", quantity: 15},
        {id:3 , name: "Soccer ball", quantity: 59}
    ];

    return (
        <>
            <h1>Carrito de compras</h1>

            {products.map((game => (
                <ItemCounter key={game.id} name={game.name} quantity={game.quantity}/>
            )))}
        </>
    );
}
