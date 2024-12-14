import React, { useState } from "react";
import image from "../../assets/Login-rafiki.svg";

export default function LoginPage() {
    const [user,setUser] = useState("")
    const [password,setPassword] = useState("")

    function clickLogin(){
        console.log(user)
        console.log(password)
    }

  return (
    <div className="w-full h-screen flex bg-[#1e1e1e] text-white">
      <div className="w-[50%] h-full flex items-center justify-center flex-col">
        <div className="w-full h-[20%] flex items-center justify-center">
          <h1 className="text-[35px] font-bold text-[#92d78a]">
            Faça Login <br />E entre para o nosso time
          </h1>
        </div>
        <div className="w-full h-[80%] flex items-center justify-center">
          <img src={image} alt="" width={600} />
        </div>
      </div>
      <div className="w-[50%] h-full flex items-center justify-center">
        <div className="bg-[#292929] w-[60%] h-[60%] rounded-xl">
            <div className="w-full h-[20%] flex items-center justify-center">
                <h1 className="text-[30px] font-bold text-[#92d78a]">Login</h1>
            </div>
            <div className="w-full h-[60%] flex items-center flex-col gap-3">
                <div className="w-[80%] flex flex-col ">
                    <label htmlFor="" className="text-[12px]">Usuario</label>
                    <input 
                    onChange={
                        (event) => setUser(event.target.value)
                    }
                    type="text" 
                    placeholder="Usuario"
                    className="rounded-lg border-none w-full h-[35px] bg-[#434343] pl-2 outline-none"/>    
                </div>
                <div className="w-[80%] flex flex-col ">
                    <label htmlFor="" className="text-[12px]">Senha</label>
                    <input 
                    onChange={
                        (event) => setPassword(event.target.value)
                    }
                    type="password" 
                    placeholder="Senha"
                    className="rounded-lg border-none w-full h-[35px] bg-[#434343] pl-2 outline-none"/>    
                </div>
                <div className="w-full flex items-center justify-center leading-[0]">
                    <a href="" className="text-[15px] hover:underline decoration-1">Recupere a sua senha</a>
                </div>
            </div>
            <div className="w-full h-[20%] flex justify-center">
                <button 
                onClick={clickLogin}
                className="w-[80%] h-[35px] bg-[#92d78a] rounded-lg text-[#1e1e1e] font-bold">LOGIN</button>
            </div>
        </div>
      </div>
    </div>
  );
}
