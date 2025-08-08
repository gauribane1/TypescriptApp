import express,{ Request, response, Response } from  'express';
import { UserService } from './service/userService.ts';
const app=express();
app.use(express.json())
const port=3000;
let userService=new UserService();
app.post("/",(req:Request,res:Response)=>{
    const body=req.body;
    console.log("body:",body)
    const newUser=userService.createUser(body);
    res.status(201).send(newUser)
})
app.get("/",(req:Request,res:Response)=>{
    const user=userService.getUser()
    res.status(200).send(user)
})
app.put("/:id",(req:Request,res:Response)=>{
    let id=parseInt(req.params.id);
    const user=userService.updateUser(id,req.body)
    res.status(200).send(user);
})
app.listen(port,()=>{
    console.log("Server runing at 3000")
})