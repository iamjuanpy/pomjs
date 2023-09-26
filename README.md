# 😺 pomJS 😺

Librería para React para el uso de Web Templating

## Instalación y Uso

0. Proyecto para testear

   - Instalar Vite
     <code>npm install -g create-vite</code>
   - Crear proyecto Vite
     <code>npm create vite</code>
   - Utilizar React + JavaScript

<br>

1. Pack

   - Instalar dependencia:
     <code>npm install</code>
   - En Windows completar el script <b>test.ps1.example</b> con el nombre de los directorios de la librería y del proyecto y ejecutar.
   - En Linux/Mac
     - En el directorio de librería:
       <code>npm pack</code>
     - Mover "pomjs-1.0.0.tgz" a la carpeta del proyecto.
     - En el directorio del proyecto:
       <code>npm install ./pomjs-1.0.0.tgz</code>

<br>

2.  Usar

    - Correr el proyecto Vite
      <code>npm run dev</code>
    - Crear archivos en carpeta <i>public</i>

      ![Alt text](readme/image.png)

    - Abrir el archivo <i>App.jsx</i> o cualquier otro que represente un componente

    - Importar la librería

      ```js
      import { pom } from "pomjs";
      ```

    - Instanciar las templates en componentes siguiendo la sintaxis:

      ```js
      function Componente() {
        return <>{pom("/ruta/archivo.pom")}</>;
      }
      ```

      ![Alt text](readme/image-1.png)

    - El resultado (de momento) es en donde se llamo a la función se incluye:

      ```js

          <h1>
              {contenido del archivo}
          </h1>

      ```
