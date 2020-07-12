//llamadas

//Requerir express
const express = require('express');

//Requeimos morgan para ver eventos de nuestro navegador
const logger = require('morgan');

//Para que el servidor entienda peticiones post
const bodyParser = require('body-parser');

//Para trabajar con rutas y evitar problemas con sistemas operativos
const path = require('path');
//Archivo de routes

const indexRoutes = require('./routes/index');

////////////////////////////////////

//Inicializar express
const app = express();

// settings

//utilice puerto por defecto del servidor y si no el 3000
app.set('port',process.env.PORT || 3000);

//indicamos donde estan las plantillas en nuestro proyecto
//concatenamos el directorio raiz con la carpeta views mwdiante join()
//Podriamos concatenar con la estructura de ES6 pero así evitamos conflictos
app.set('views', path.join(__dirname, 'views'));

//indicamos al servidor que trabaje con motor de plantillas, en este caso ejs
app.set('view engine', 'ejs');

//middelwares ejecutan tareas antes de una peticion

//usamos morgan para ver respuestas del navegador
app.use(logger('dev'));

//inicializamos bodyParser para peticiones al servidor
app.use(bodyParser.urlencoded( {extended: false}));

/////////////////////////////////////////////

//Las vistas del servidor las llamamos mediante un archivo 
app.use('/',indexRoutes)

//////////////////////////////////////////////

//Le indicamos que escuche un puerto
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})