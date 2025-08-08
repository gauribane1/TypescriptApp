export interface IUser{
    id:number;
    name:string;
    isActive:boolean;
}
export type CreateUserDTO=Omit<IUser,"id">
export type UpdateUserDTO=Partial<IUser>