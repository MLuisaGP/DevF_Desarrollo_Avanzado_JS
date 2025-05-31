# Desarrollo avanzado de JavaScript
En este repositorio se iran subiendo las actividades realizadas en DEV.F del programa de Becalos.

## Dependencias e instalaciones
___

- ### Axios

  Axios te puede manejar errores http

  Instalacion de node y axios

      npm init y
      npm install axios
      npm install lite-server --save-dev

  para que corra en live server en el package json agregar

      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "lite-server"
      },

  Si no se desea instalar axios por paquete, utilizar cdn. Esta linea de codigo se utiliza en los html que se necesita utilizar axios
  ```js
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  ```

## Actividades
___
A continuación se desglosa lo que contiene cada carpeta

### [Clase 1 Event Loopp y Asincronicidad](https://github.com/MLuisaGP/DevF_Desarrollo_Avanzado_JS/tree/main/class_1)
En esta sesión se da uso de eventos y funciones asincronas, permitiendo desarrollar programas donde se puede correr el codigo miestras corren otras funciones que no afectan al codigo principal.

Para fortalecer los conocimientos adquiridos en esta clase se hizo como actividad una pagina web para generar pedidos de un restaurante y entregar ordenes. Al generar una orden, se simula la preparación de esa orden dependiendo del producto y la cantidad de cada producto. Cada producto tiene diferente tiempo de preparación. Se utilizan funciones asincronas permitiendo generar mas ordenes sin interumpir el tiempo de preparación. 
La publicación de este proyecto se puede ver con este [link](https://mluisagp.github.io/DevF_Desarrollo_Avanzado_JS/class_1/practica/)

### [Clase 2 Callbacks y Json](https://github.com/MLuisaGP/DevF_Desarrollo_Avanzado_JS/tree/main/class_2)
Se comienza a profundizar sobre la estructura JSON, permitiendo la trasmición de datos, estructura utilizada por APIS rests.
Tambien se dio entendimiento de los callbacks, los cuales son funciones que son llamadas por otras funciones, este tipo de metodos no son recomedados ni muy utilizados en la actualidad pero el entendimiento de esto, da las ventaja de comprender los metodos que siguieron de los callbacks, como promesas y async/await.

Para esta clase se realizo un dashboard para una libreria donde permite obtener la lista de libros registrados y validar su disponibilidad para el prestamo, tambien tiene la opción de registrar nuevos libros.
La publicación de este proyecto se puede ver con este [link](https://mluisagp.github.io/DevF_Desarrollo_Avanzado_JS/class_2/practica/)

### [Clase 3 Fetch y axios](https://github.com/MLuisaGP/DevF_Desarrollo_Avanzado_JS/tree/main/class_3)
Fetch y axios son herramientas fundamentales en JS que permite hacer solicitudes https, esto nos permite obtener información de repositorios ya creados en la web o hechos por uno mismo y evita la recarga de la pagina. 

Fetch es la herramienta nativa de JS que permite hacer solicitudes http, sin embargo cuenta con la desventaja de no capturar los errores de manera automatica, uno mismo necesita obtener esos errores. La practica realizada utilizando esta herramienta fue un e-commers, el cual se puede ver en este [link](https://mluisagp.github.io/DevF_Desarrollo_Avanzado_JS/class_3/practica/nuivio)

Por otro lado AXIOS es una libreria externa de JS el cual es necesario ser instalado mediante NODE JS o utilizando CDN. AXIOS tiene la ventaja de capturar los errores de manera automatica y para el uso de esta herramienta se realizo un proyecto que trae la información de peliculas.
La publicación de este proyecto se puede ver con este [link](https://mluisagp.github.io/DevF_Desarrollo_Avanzado_JS/class_3/practica/cineteca)

