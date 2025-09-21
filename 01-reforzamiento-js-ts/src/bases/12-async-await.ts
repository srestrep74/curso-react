import type { GiphyRandomResponse } from "./data/giphy.response";

const API_KEY = 'zOiaiDr0Q5r641Tx4IJG7HdnjqSOUdJv';
const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`

const createImageOnDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
};

const getRandomGifUrl = async (): Promise<string> => {
    const response = await fetch(URL);

    const { data }: GiphyRandomResponse = await response.json();

    return data.images.original.url;
};

getRandomGifUrl().then((url) => createImageOnDOM(url));