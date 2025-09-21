/*
fetch API es una API nativa del navegador que permite hacer peticiones HTTP asincronas y trabajar con las respuestas de forma basada en Promesas .

Sintaxis basica : 
fetch(url, options?)
    .then(res => {
        ... Se maneja la respuesta
    })
    .catch(err => {
        ... Se maneja el error
    });

Parametros : 
-> url : la direccion a la qu ese quiere hacer la peticion
-> options (opcional) : objeto con configuracion (metodo, headers, body, etc)

Ej : 
fetch("http://miapi.com/posts")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error("Error : ", err));

Objeto Response : 
El objeto response que devuelve fetch tiene : 
-> status : codigo http (200, 404, 500, etc) .
-> ok : true si el status es 200-209 .
-> Metodos para leer el cuerpo :
    - .text() -> devuelve Promise<string>
    - .json<T>() -> devuelve Promise<T>
    - blob() -> binarios (imagenes, pdfs)
    - arrayBuffer() -> binarios en bajo nivel

-------

Ejemplo con TS : 

type Post = {
    id: number;
    title: string;
    body: string;
};

async function getPost(id: number): Promise<Post> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!res.ok) {
        throw new Error(`Error HTTP: ${res.status}`);
    }

    const data = await res.json() as Post;
    return data;
}

(async () => {
    try {
        const post = await getPost(1);
        console.log(post.title);
    } catch (err) {
        console.error(err); 
    }
})();

-------

Opciones de configuracion :
-> Se puede personalizar la peticion . 

Ej : 

await fetch("http://api.ejemplo.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer token123"
    },
    body: JSON.stringify({ title: "Nuevo post", body: "Contenido" })
});

------

Manejo de errores : 
-> Fetch solo lanza un error de red . 
-> Si el servicor responde con 404 o 500 , etc ; fetch no lanza error automaticamente , se debe de validar con res.ok() .

Ej : 
const res = await fetch(url);
if (!res.ok) {
  throw new Error(`Request failed with ${res.status}`);
}
*/

import type { GiphyRandomResponse } from "./data/giphy.response";

const API_KEY = 'zOiaiDr0Q5r641Tx4IJG7HdnjqSOUdJv';
const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`

const myRequest = fetch(URL);

const createImageOnDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
};

myRequest
    .then((response) => response.json())
    .then(({ data }: GiphyRandomResponse) => {
        const imageUrl = data.images.original.url;
        createImageOnDOM(imageUrl);
    })
    .catch((error) => console.error(error));