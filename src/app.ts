import express, {Application} from 'express';
import IndexRoutes from './routes/index.routes'
import UserRoutes from './routes/user.routes'
import AlbumsRoutes from './routes/albums.routes'
import morgan from 'morgan';
import "reflect-metadata";
import database from './database';
const cors =require('cors');
import { CorsOptions, CorsRequest, CorsOptionsDelegate } from 'cors';

export class App {

    private app: Application;
    //el puerto puede venir por parametro
    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
        database.initialize().then(() =>console.log("database conected"))
        .catch(console.error);
    }

    
    //Configuracion del puerto
    settings(){
        this.app.set('port', this.port || process.env.PORT || 4000)
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    //ejecución de rutas 
    routes() {
        this.app.use(IndexRoutes);
        this.app.use('/users', UserRoutes)
        this.app.use('/albums', AlbumsRoutes)
    }
    //función que escucha el puerto asignado
    async listen(){
         await this.app.listen(this.app.get('port'));
         const puerto = this.app.get('port');
       
          
        console.log('Server on port', puerto)
    }
}