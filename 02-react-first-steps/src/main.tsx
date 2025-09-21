import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from './FirstStepsApp';

{/*
El createRoot lo que hace es crear la raiz del proyecto buscando el elemento root definido en el index.html que no es mas que un div.  
*/}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepsApp/>
  </StrictMode>,
);
