import { user } from "./user";

export interface UserDatabaseInterface{
    getUser(): user;
    getAllUsers() : user[];
}