import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path'

import indexRoutes from './routes/indexRoutes';
import testRoutes from './routes/testRoutes';

class Server {

    public app: Application;

    constructor() {
        this.app = express();

        //llamamos a los metodos
        this.config();
        this.routes();
    }

    config(): void {

        // configuramos a que escuche en el puerto 3000
        // pero si hay un puerto definido que tambien lo coja
        this.app.set('port', process.env.PORT || 3000);

        // usamos morgan que permite ver las peticiones a la api en consola
        this.app.use(morgan('dev'));

        // usamos cors que permite la conexion al cliente
        this.app.use(cors());

        // usamos las configuraciones de express
        // permite utilizar el formato json
        // this.app.use(express.json({limit: '50mb'}));
        // Aumentamos el tamaño de soporte de almacenamiento 
        this.app.use(express.json({ limit: '50mb' }));

        // url encoded
        this.app.use(express.urlencoded({ limit: '50mb', extended: true }));

    }

    routes(): void {

        //utilizamos el enrutador principal (No Tocar!)
        this.app.use('/', indexRoutes)

        //utilizamos los enrutadores particulares
        this.app.use('/api/test', testRoutes);


    }

    // metodo para inicializar el servidor
    start(): void {

        //para que el servidor se quede escuchando en el pto configurado
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'))
        });
    }
}

//ejecutamos la clase con el metodo start

const server = new Server();
server.start();