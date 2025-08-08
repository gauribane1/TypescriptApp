import { CreateUserDTO, IUser, UpdateUserDTO } from "../models/UserClass.ts";

export class UserService{
    private usres:IUser[]=[];
    private currentId=1;
    createUser(user:CreateUserDTO){
        const newUser={id:this.currentId++,name:user.name,isActive:true}
        this.usres.push(newUser)
    }
    getUser():IUser[]{
        return this.usres;
    }
    updateUser(id:number,data:UpdateUserDTO):IUser|null{
 const index = this.usres.findIndex(user => user.id === id);
    if (index === -1) return null;

    this.usres[index] = { ...this.usres[index], ...data };
    return this.usres[index];

    }
}