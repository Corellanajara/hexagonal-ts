import { user } from "./user";

export interface UserClassInterface{
    getSomeUser() : user;
    getAllUsers() : user[];
}