"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import image from "./images/chatgpt.png";

function Login() {
  return (
    <div className="bg-[#000000] h-screen flex flex-col items-center justify-center text-center">
      <Image src={image} width={300} height={300} alt="logo" />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign In to use ChatBot
      </button>
    </div>
  );
}

export default Login;
