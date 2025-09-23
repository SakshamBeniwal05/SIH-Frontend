import React from "./assets/react.svg"
import "./assets/icons8-person-48.png"
import './App.css'
import Mobile from './utils/Mobile/Mobile'

function App() {

  return (
    <>
      <Mobile>
        <div className="text-black">
          <h1 className="text-3xl font-mono font-semibold text-center mt-20">
            Login
          </h1>
          <div>
            <p className="font-mono text-center mt-6 px-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ut deserunt tempora.
            </p>
          </div>
          <div className="flex justify-center text-[18px] gap-8 mt-10 px-4">
            <div className="flex flex-col items-center gap-1">
              <a href="#">Student</a>
              <div className="h-[2px] bg-black w-16"></div>
            </div>
            <a href="#">Teacher</a>
          </div>
          <div className="flex flex-col justify-center items-center gap-6 mt-10 mx-auto">
            <img src="./assets/icons8-person-48.png" alt="" />
            <input className="w-[75%] h-[45px] rounded-3xl px-5 bg-white box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;" type="email" placeholder="Eamil Address"/>
            <input className="w-[75%] h-[45px] rounded-3xl px-5 bg-white box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;" type="password" placeholder="Password"/>
          </div>
          <div>
            <button className="w-[75%] h-[45px] px-5 text-[20px] rounded-3xl bg-[#0A89FF] mt-10 mx-auto font-semibold text-white block">
              Login
            </button>
          </div>
          <div className="w-[75%] mx-auto">
            <line className="text-right mt-8 text-[16px] font-sans underline cursor-pointer">
              Forgot password 
            </line>
          </div>
        </div>
      </Mobile>
    </>
  )
}

export default App
