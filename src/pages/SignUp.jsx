import React, { useEffect, useState } from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';
import { collection, addDoc } from "firebase/firestore"; 
import {db} from '../firebase'

export const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, signUp} = UserAuth()
  const navigate = useNavigate()

   const handleSubmit = async (e) => {
    e.preventDefault()
    try{
    await signUp(email, password)  
      await addDoc(collection(db, 'user'), {
        emails: email,
        passwords: password,
      })
      navigate('/')
    } catch (error){
      console.log(error)
    }
   }
  return ( 
    <>
    <div className="w-full h-screen">
        <img 
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/908077b4-cf0a-43c3-b2c9-435fb990299b/49f33d91-42a4-4d13-a508-7f031df8e194/EG-en-20220829-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
        alt="/"/>
            <div className="bg-black/60 fixed top-0 left-0 w-full h-screen" ></div>
              <div className="fixed w-full px-4 py-24 z-50">
                <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                  <div className="max-w-[320px] mx-auto py-16">
                    <h1 className="text-3xl font-bold">Sign Up</h1>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                      <input
                      onChange={(e) => setEmail(e.target.value)}
                      className="my-2 p-4 bg-gray-700 rounded" 
                      type="email" placeholder="email" />
                      <input 
                      onChange={(e) => setPassword(e.target.value)}
                      className="my-2 p-4 bg-gray-700 rounded"
                      type="password" placeholder="password" />
                      <button className="bg-red-500 my-2 p-3.5 font-bold">
                        Sign Up
                      </button>
                      <div className="flex justify-between items-center">
                      <p>
                      <input
                      type="checkbox" className="mr-2" />remember me
                      </p>
                      <p>Need help?</p>
                      </div>
                      <p className="py-4">
                      <span className="text-gray-500 mr-2">
                      Already subscribed to MovieBest?
                      </span>
                      Sign In
                      </p>
                    </form>
                  </div>
              </div>
            </div>
        </div>
    </>
  )
}

