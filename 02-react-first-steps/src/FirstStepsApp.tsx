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

    /*
     Nota: Si estas variables fueran valores constantes
     que nunca cambian entre renderizados, sería más eficiente
     definirlas fuera de la función del componente.
     */

    return (
        <>
            <h1>Hola Mundo</h1>

            {/* 🔹 Interpolación de variables */}
            <p>Esto es mi nombre: {firstName} {lastName}</p>

            {/* 🔹 Usar lógica de JS dentro de JSX */}
            <p>Mis juegos favoritos: {favoriteGames.join(', ')}</p>

            {/* 🔹 Operador ternario */}
            <h3>{isActive ? 'Activo ✅' : 'No activo ❌'}</h3>
        </>
    );
}
