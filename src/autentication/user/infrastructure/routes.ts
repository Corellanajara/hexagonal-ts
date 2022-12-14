import { Application, Request, Response } from "express";
import Utils from "../../../shared/utils/util";
import UserApplication from "../application/application";
import { UserClassInterface } from "../domain/userClassInterface";
import userDB from "./db";

export default class UserRoutes{

    prefix : string = "/user";
    userApplication : UserClassInterface;
    constructor(app : Application){
        this.initialize(app);        
    }
    async initialize(app){
        const util = new Utils();        
        const db =  await this.connectToBD();
        this.userApplication = new UserApplication(db,util)        
        this.routes(app);        
    }
    async connectToBD(){
        return new userDB();
    }
    routes(app : Application){
        app.get( this.prefix ,(req:Request,res:Response)=>{
            const response = this.userApplication.getSomeUser();
            res.send(response);
        })
        app.get( this.prefix+'/todos' ,(req:Request,res:Response)=>{
            const response = this.userApplication.getAllUsers();
            res.send(response);
        })
    }

}