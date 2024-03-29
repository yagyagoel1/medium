import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'
import Signin from '../routes/Signin'
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from '../config'
import { SignupInput } from '@yagyagoel1/medium-common'
const Form = ({type}:{type:"signup" | "signin"}) => {
  const [postInputs,setPostInputs] =  useState<SignupInput>({
    name : "",
    email : "",
    password : ""

  })
  const navigate = useNavigate();
 async function sendRequest(){
  try {
       const response =await axios.post(`${BACKEND_URL}/api/v1/user/${type=="signup"?"signup":"signin"}`,
       postInputs)
       const {token} = response.data;
       localStorage.setItem("token",token)
       navigate("/blogs");
  } catch (error:any ) {
    alert("something went wrong")
    throw new Error(error.message)
  }
  }
  return (
    <div className='h-screen flex justify-center flex-col'>
      <div className='flex justify-center'>
        <div className='px-10'>
       <div> <div className='text-4xl py-2 font-extrabold'>{type=="signup"?"Create an account":"Login to your account"} </div>
        </div>
        <div><div className='text-slate-400 px-2'>{type=="signup"? "Already have an account?":"Don't have an account"} <Link className="underline pl-2" to={type=="signin"?"/signup":"/signin"} >{type=="signup"?"Login":"register"}</Link></div>
        </div>
        <div className='py-2'>
        {type=="signup"?<LabelledInput name="Username" placeholder='Enter your username' onChange={(e)=>{
          setPostInputs((postInputs)=>{return{
            ...postInputs,
            name: e.target.value
        }})
        }}></LabelledInput>:null}
        <LabelledInput name="Email" placeholder='m@example.com' onChange={(e)=>{
          setPostInputs((postInputs)=>{return{
            ...postInputs,
            email: e.target.value
        }})
        }}></LabelledInput>
        <LabelledInput name="Password" type={"password"} placeholder='Enter your password' onChange={(e)=>{
          setPostInputs((postInputs)=>{return{
            ...postInputs,
            password : e.target.value
        }})
        }}></LabelledInput>
        </div>
        <button onClick={sendRequest} type="button" className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 my-4 dark:border-gray-700">{type=="signup"?"Sign up":"Sign in"}</button>
        </div>
      </div>
      </div>
  )
}

export default Form
interface LabelledInputType{
    name :string
    placeholder : string
    type? : string
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void;
}

function LabelledInput({name,placeholder,type,onChange}:LabelledInputType){

    return <div>
    <label  className="block mb-2 py-2 text-sm font-bold text-black">{name}</label>
    <input  onChange ={onChange} type={type||"text"} className="bg-gray-50 border border-gray-300
     text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
     block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 " placeholder={placeholder} required />
</div>
}