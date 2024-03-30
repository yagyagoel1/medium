import {BlogInput} from "../hooks"
import Appbar from "./AppBar"
export const FullBlog=({blog}:{blog:BlogInput})=>{
    return <div> 
        <Appbar></Appbar>
        <div className="grid grid-cols-12 px-10 w-full bg-yellow-200">
        <div className="col-span-8">
            <div className="text-3xl font-extrabold ">{blog.title}</div>
            <div>{blog.content}</div>
        </div>
        <div className="col-span-4">
            hello  
        </div>
    </div>
    </div>
}