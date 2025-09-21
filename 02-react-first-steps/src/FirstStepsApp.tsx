import type { CSSProperties } from "react";

interface Game {
    id: number;
    title: string;
    description: string;
}

export function FirstStepsApp() {

    // Variables y constantes (tipadas porque estás en TS)
    const firstName: string = 'Sebastian';
    const lastName: string = 'Restrepo';

    const favoriteGames: string[] = [
        "Fifa",
        "God of war",
        "GTA"
    ];

    const isActive: boolean = false;

    const listGames: Game[] = [
        {id: 1, title: "Fifa", description: "Soccer game"},
        {id: 2, title: "God of war", description: "Fight game"},
        {id: 3, title: "GTA", description: "Open world game"}
    ];


    /*
     Nota: Si estas variables fueran valores constantes
     que nunca cambian entre renderizados, sería más eficiente
     definirlas fuera de la función del componente.
     */

    const myStyles: CSSProperties = {
        display: "flex",
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between"
    };

    return (
        <>
            <h1>Hola Mundo</h1>

            {/* 🔹 Interpolación de variables */}
            <p>Esto es mi nombre: {firstName} {lastName}</p>

            {/* 🔹 Usar lógica de JS dentro de JSX */}
            <p>Mis juegos favoritos: {favoriteGames.join(', ')}</p>

            {/* 🔹 Operador ternario */}
            <h3>{isActive ? 'Activo ✅' : 'No activo ❌'}</h3>

            <div style={myStyles}>
                {listGames.map(game => (
                    <div key={game.id}>
                        <h1>Title: {game.title}</h1>
                        <p
                            style ={{
                                backgroundColor: "lightblue",
                                borderRadius: isActive ? 10 : 20,
                            }}
                        >
                            Description: {game.description}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}
