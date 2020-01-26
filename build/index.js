"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const testRoutes_1 = __importDefault(require("./routes/testRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        //llamamos a los metodos
        this.config();
        this.routes();
    }
    config() {
        // configuramos a que escuche en el puerto 3000
        // pero si hay un puerto definido que tambien lo coja
        this.app.set('port', process.env.PORT || 3000);
        // usamos morgan que permite ver las peticiones a la api en consola
        this.app.use(morgan_1.default('dev'));
        // usamos cors que permite la conexion al cliente
        this.app.use(cors_1.default());
        // usamos las configuraciones de express
        // permite utilizar el formato json
        // this.app.use(express.json({limit: '50mb'}));
        // Aumentamos el tamaño de soporte de almacenamiento 
        this.app.use(express_1.default.json({ limit: '50mb' }));
        // url encoded
        this.app.use(express_1.default.urlencoded({ limit: '50mb', extended: true }));
    }
    routes() {
        //utilizamos el enrutador principal (No Tocar!)
        this.app.use('/', indexRoutes_1.default);
        //utilizamos los enrutadores particulares
        this.app.use('/api/test', testRoutes_1.default);
    }
    // metodo para inicializar el servidor
    start() {
        //para que el servidor se quede escuchando en el pto configurado
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
//ejecutamos la clase con el metodo start
const server = new Server();
server.start();
