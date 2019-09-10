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

Algunas veces, ciertas dependencias necesitan otros paquetes de por sí, y los mismos no se agregan a el archivo package.json. Si es así, deberían aparecer como errores en consola, listando el nombre del paquete para hacer la instalación manual.

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

