import bodyParser from 'body-parser';
import express, { Application, Express, Request, Response } from 'express';

export default class appServer {
    app : Express = undefined;
    port: number = 5300;
    constructor(port : number ){
        if(port){
            this.port = port;
        }        
        
        this.initializeServices();
    }
    initializeServices(){
        this.initializeServiceExpress();
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializePort()
    }
    initializeServiceExpress(){
        this.app = express();                
    }
    initializeMiddlewares(){
        this.app.use(bodyParser.json())        
    }

    initializeRoutes(){
        this.app.get('/check-live', (req: Request, res: Response) => {
            res.send('running');
        });
    }
    initializePort(){
        this.app.listen(this.port, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${this.port}`);
          });
    }
    getApp() : Application {
        return this.app;
    }
}

