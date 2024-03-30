import {Hono} from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode,sign,verify} from "hono/jwt"
import { createBlogInput,  updateBlogInput } from '@yagyagoel1/medium-common';

export const blogRouter =  new Hono<
{
  Bindings : {
  DATABASE_URL :string,
  JWT_SECRET : string
 },
 Variables : {
    userId : string
 }
}
>();

blogRouter.use("/*",async(c,next)=>{
    try{const authHeader = c.req.header("Authorization")||"";
    const user = await verify(authHeader,c.env.JWT_SECRET)
    
        c.set("userId",user.id);
        await next();
    }catch(error){

      console.log(error)
        c.status(403);
        return c.json({
          error,
            msg :"you are nott logged in "
        })
    }
    
})
blogRouter.post("/p", async (c) => {
   try{ const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body  = await c.req.json();
    const {success} =createBlogInput.safeParse(body);
    if(!success)
    {
      throw Error("invalid input")
    }
      const blog =await prisma.post.create({
        data: { 
            title : body.title,
            content : body.content,
            authorId : c.get("userId")
        }
      })
      return c.json({
        id : blog.id
      })}
      catch(error)
      {
        c.status(500)
        return c.json({msg: "oops some error occured"})
      }
})
  blogRouter.put('/:id', async(c) => {
    try{ const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
      const id = c.req.param("id");
      const body  = await c.req.json();
    const {success} =updateBlogInput.safeParse(body);
    if(!success)
    {
      throw Error("invalid input")
    }
      const blog =await prisma.post.update({
        where : {
            id : id,

        },
        data : {
            title : body.title,
            content : body.content
        }
      })
      return c.json({
        id : blog.id

      })}
      catch(error)
      {
        c.status(500)
        return c.json({msg: "oops some error occured"})
      }
  })
  //add pagination
  blogRouter.get('/bulk', async(c) => {
    try{ const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
      
      const blog =await prisma.post.findMany({
        select:{
          content :true,
          title : true,
          id : true,
          editor :{
            select : {
              name : true
            }
          }
        }
       
      })
      if(!blog)
      {
        throw Error("user not found")
      }
      return c.json({
        blog
      }
      )}
      catch(error:any)
      {
        c.status(404)
        return c.json({msg: error.message})
      }
  })
  blogRouter.get('/:id', async (c) => {
    try{ const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
      const id = c.req.param("id")
      const blog =await prisma.post.findFirst({
        where : {
            id : id,

        },
        select:{
          id :true,
          title :true,
          content :true,
          editor :{
            select :{
              name : true
            }
          }
        }
       
      })
      if(!blog)
      {
        throw Error("user not found")
      }
      return c.json({
        blog
      })}
      catch(error:any)
      {
        c.status(404)
        return c.json({msg: error})
      }
  })