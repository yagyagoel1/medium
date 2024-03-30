import {Hono} from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode,sign,verify} from "hono/jwt"
import { signinInput, signupInput } from '@yagyagoel1/medium-common';

export const userRouter =  new Hono<
{
  Bindings : {
  DATABASE_URL :string,
  JWT_SECRET : string
 }}
>()



userRouter.post('/signup', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

 
  try{
    const body  = await c.req.json();
    const {success} =signupInput.safeParse(body);
    if(!success)
    {
      throw Error("invalid input")
    }
   const user = await prisma.user.create({
    data : {
      email : body.email,
      password : body.password,
      name : body.name
    }
  })
  const jwt = await sign({id :user.id},c.env.JWT_SECRET)
  return c.json({token : jwt})
  }
  catch(e:any){
    c.status(411);
    return c.json({msg:e.message});
  }
    
  })
  userRouter.post('/signin',async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  
    try {
        const body  = await c.req.json();
        const {success} =signinInput.safeParse(body);
        if(!success)
        {
          throw Error("invalid input")
        }
  
      const user = await prisma.user.findFirst({
        where : {
          email : body.email,
          password : body.password
        }
      })
      if(!user)
      {
        throw Error("user not found");
      }
      const jwt =await sign({id:user.id},c.env.JWT_SECRET);
      
      return c.json({token : jwt})
    } catch (error:any) {
      c.status(403)
      return c.json({msg : error.message})
    }
  })