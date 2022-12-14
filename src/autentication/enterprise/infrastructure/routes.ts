import { Application, Request, Response } from "express";

export default class EnterpriseRoutes{
    //app
    constructor(app : Application){
        this.routes(app);
    }
    routes(app : Application){
        app.get('/enterprise',(req:Request,res:Response)=>{
            res.send('gracias');
        })
    }

}