# Smart Brain App

Este es un instructivo de como crear una app en React, ejecutarla y modificar la misma. La app finalizada es una app de reconocimiento de imágenes que usa React para el frontend, una API de reconocimiento de imágenes llamada Clarifai, y Node.js y Express.js para el backend. Va a tener sistema de login y va a ser 100% responsive.

### Crear app de React desde 0

Primero hay que instalar el paquete create-react-app, en este caso, conviene instalarlo globalmente para poder crear nuevos proyectos sin necesidad de instalarlo cada vez:

```
npm install -g create-react-app
```

Despues, usar este comando en consola:

```
npm create-react-app carpeta
```

Tambíen puede usarse un comando de las nuevas versiones de Node, npx, que instala la dependencia y la ejecuta:

```
npx create-react-app carpeta
```

Esto va a crear un proyecto de React, con todas sus dependencias y va a generar su propio package.json.

Despues de eso ir a la carpeta del proyecto usando cd, y hacer "npm start" para iniciarlo.

### Instalar un proyecto existente

Un proyecto que usa NPM siempre debería tener un package.json, que lista las dependencias del mismo. De esta forma cuando usamos "npm install" va a descargar todo lo que necesita la app para ejecutarse.

```
npm install
```

Algunas veces, ciertas dependencias necesitan otros paquetes de por sí, y los mismos no se agregan a el archivo package.json. Si es así, deberían aparecer como errores en consola al intentar ejecutar la app, listando el nombre del paquete para hacer la instalación manual.

También puede suceder que en vez de npm, se haya usado Yarn para instalar paquetes. Si es asé debería haber un archivo yarn.lock. Los proyectos no pueden usar yarn y npm al mismo tiempo.

## Scripts de Node

A demás de listar las dependencias, un archivo package.json contiene los comandos para ejecutar y realizar pruebas, entre otros. En una instalación de React de 0 normalmente son:

* npm start
* npm build
* npm test
* npm eject

npm start ejecuta la app, npm build la empaqueta para producción.

## Diario de desarrollo de la app

COMO FUNCIONA REACT:
React funciona a traves del uso de componentes. Éstos van uno dentro del otro dependiendo en que pantalla estemos trabajando. Los componentes se usan como si fueran tags de html, esto es un lenguaje de React llamado JSX.

Por ejemplo, si tenemos un componente <Button> y necesitamos que <Button>, el cual fue creado en Button.js, esté en la pantalla de login, la cual está en Login.js, usaríamos el componente <Button> dentro de Login.js. De todas formas <Button> puede ser usado en cualquier parte de la app, ya que es un componente independiente. Para una explicación con ejemplos, ver el archivo App.js (está comentado).

COMPONENTES:
Los componentes de React se definen desde funciones o clases, pueden ser de 2 tipos:
  * Functional (Stateless) Components: Son componentes que no tienen estado (STATE). Es decir que no guardan información por si mismos. Tampoco necesitan las funcionalidades de React.Component. En otras palabras, son componentes simples, como por ejemplo un título. Se definen usando funciones, no clases.
  * Class (Stateful) Components: Son los componentes mas comunes de React. Tienen State y ciclo de vida y son capaces de modificarse a si mismos y los componentes dentro de ellos. Son definidos a través de clases de Javascript ES6.

STATE:
El estado o State es...

LIFECYCLE:
Los componentes tienen algo llamado ciclo de vida o lifecycle...

ESTILOS:
Hay varias formas de darle estilo a un componente:
  1. CSS Stylesheet: Una hoja de estilos que se importa al componente.
  2. Inline CSS: Se crea una variable que contiene el estilo, y se coloca en el elemento dentro de la propiedad style.
  3. CSS in JS: El CSS es creado usando Javascript en vez de ser definido en archivos externos.
  4. CSS Modules: Es como importar una hoja de estilos, pero todas las clases y animaciones estan hechas localmente.
  5. Use a Library: Usar una libreria para manejar los estilos a lo Bootstrap. La mas famosa es Styled Components, una librería para React y React Native que te permite definir estilos como variables usando las backticks de ES6.
La app usa la librería Tachyons, para hacer mas facil generar CSS y no preocuparse tanto por los estilos.

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used

## Authors

* **Lucas Paviotti** - [Imhest](https://github.com/Imhest)

