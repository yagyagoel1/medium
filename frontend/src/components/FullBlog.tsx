import {BlogInput} from "../hooks"
import Appbar from "./AppBar"
import { Avatar } from "./BlogCard"
export const FullBlog=({blog}:{blog:BlogInput})=>{
    return <div> 
        <Appbar></Appbar>
        <div className="flex justify-center ">
        <div className="grid grid-cols-12 px-10 pt-12 w-full pt-200 max-w-screen-xl">
        <div className="col-span-8">
            <div className="text-5xl font-extrabold ">{blog.title}</div>
            <div className="text-slate-500 pt-2">
                Posted on 2nd December 2023
            </div>
            <div>{blog.content}</div>
        </div>
        <div className="col-span-4 text-slate-600 text-lg">
            Author
            <div className="flex w-full">
                <div className="pr-4 flex justify-center flex-col">
                <Avatar size="big" name={blog.editor.name||"Anonymous"}></Avatar>
                </div>
                <div>
                    <div className="text-xl font-bold "> {blog.editor.name|| "Anonymous"}</div>
           <div className="pt-2 text-slate-500"> 
            Random catch phrase about the author of the post to grajafshdh afhsfsdf 
           </div></div>
            </div>
           
        </div>

    </div>
    </div>
    </div>
}