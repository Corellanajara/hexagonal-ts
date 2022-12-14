import { user } from './user';
export class userModel implements user{
    lastName: string;
    name : string ;
    getName(){
        return this.name
    }
    setName(name : string){
        return this.name = name
    }
       
}
