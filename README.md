<h1>Generar un nuevo proyecto Angular:</h1>

1 - En la consola ir a la carpeta donde quieras que esté el proyecto y ejecutar,    ng new nombreProyecto

2 - Te va a preguntar:  Would you like to add Angular routing? 
   respuesta:  y (enter)
   
3 - pregunta:  ? Which stylesheet format would you like to use? (Use arrow keys)
- > CSS
    SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
    Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
    Less   [ http://lesscss.org                                             ]
    
   respuesta:  dejar CSS y enter
   
4 -  cuando termine de ejecutarse se va a haber creado el proyecto sobre el cual se puede empezar a trabajar.


<h1>Estructura de Angular y sus archivos:</h1>

- <strong>index.html</strong> . En el head se puede linkear a Bootstrap, Fontaweson, se puede incluir la URL para script, etc. En el<body se llama a app-root y esto inicia el proyecto directamente desde app.component (esto último viene por defecto).
-<strong> Angular</strong>  trabaja con componentes y estos tienen una estructura base de 4 archivos, app.tuComponente.html (la vista), app.tuComponente.ts (la lógica),
    app.tuComponente.css (hoja de estilo de este componente), app.tuComponente.spec.ts (para testeos).
- <strong>La ruta</strong>  del proyecto dónde están los componentes es debajo de   /src/app/   (en esta ruta se generan los nuevos componentes). 
- <strong> app.component.ts</strong> , app.conponent.html, app.componente.css. El app.component es el primer componente que se ejecuta. Todo lo que está en app.component.html hay que borrarlo para empezar a escribir nuestro código.
- <strong>Styles.css</strong> , en este archivo se pueden poner estilos que se van a ver reflejados en todo el proyecto.
-<strong> app.modue.ts</strong> , es un módulo muy importante, acá se importan las dependencias que usan los distintos componentes que generemos (debemos recordar modificar este archivo al usar nuevas dependencias), se declaran todos los componentes que hayamos generado (esto lo hace Angular de forma automática) y  se incluyen las rutas de los componentes (debemos hacerlo en forma manual cuando empecemos a usar rutas).
- <strong>app.routing.module.ts</strong> , aquí agregamos los componentes, que hicimos, a la ruta para que se puedan usar desde otros componentes (los podemos llamar con un click a un botón o agregarlos en el .hmtl de otro componente de la siguiente manera <app-tuComponente></app-tuComponente>). Importante ver este archivo en el proyecto y ver tmb. el app.module.ts, ambos son necesarios para las rutas.
- <strong>angular.json</strong> , proporciona valores predeterminados de configuración de todo el espacio de trabajo y específicos del proyecto para las herramientas de compilación.
- <strong> package.json</strong> , en este archivo está reflejada toda la configuración del proyecto.
- <strong> package.lock.json</strong> , es un archivo generado automáticamente cuando se instalan paquetes o dependencias en el proyecto. Su finalidad es mantener un historial de los paquetes instalados y optimizar la forma en que se generan las dependencias del proyecto y los contenidos de la carpeta node_modules/.
    
<h1>Algunos comando Ng que sirven para empezar </h1> 

    

   <strong>- ng g c nuevoComponente </strong> (este comando genera: app.nuevoComponente.ts, app.nuevoComponente.html, app.nuevoComponente.css y app.nuevoComponente.spec.ts).
  sería lo mismo  <strong> ng generate component nuevoComponente</strong> 
  
 <strong>- ng g class nombreClase</strong>  (con este comando se genera nombreClase.ts)

 <strong>- ng g service nombreServicio </strong> (se generará nombreServicio.service.ts)

 <strong>- ng serve </strong> (ejecuta el proyecto en http://localhost:4200)



<h3>¡¡No olvidarse de importar en app.module.ts las dependencias que utilicemos!!. Si nos olvidamos de hacerlo el proyecto puede compilar y correr pero no mostrar nada o tener errores.</h3>






<h3>Dejo acá para correr test / build y más ayuda.</h3>



<strong>- ng build </strong> . El resultado  se guarda en el directorio `dist/` 


<strong>- ng test </strong> para ejecutar tests unitarios via [Karma](https://karma-runner.github.io).



<strong>- ng e2e </strong> para ejecutar the end-to-end tests via la platforma que elijas. Para usar este comando primero hay que importar el paquete que implemente end-to-end testing.

<h1> Más ayuda </h1>

<strong>ng help</strong> o [Angular CLI, comandos de referencia](https://angular.io/cli) .

