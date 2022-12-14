import { UtilInterface } from "../../../shared/interfaces/utilInterface";
import { UserDatabaseInterface } from "../domain/userDatabaseInterface";

export default class UserApplication{
    db : UserDatabaseInterface = undefined;
    util : UtilInterface ;
    constructor(database : UserDatabaseInterface,util : UtilInterface){
        this.db = database;
        this.util = util;
    }
    getSomeUser(){
        const user = this.db.getUser();
        user.name = this.util.encrypt(user.name)
        return user
    }
    getAllUsers(){
        return this.db.getAllUsers()
    }
}