import React from 'react'
import logo9 from '../../assets/logo9.png'
import logo10 from '../../assets/logo10.png'
import logo11 from '../../assets/logo11.png'

function Value() {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
        The value that holds us true and to account
      </h1>
      <div className='grid gap-[10rem] grid-cols-3 item-center '> 
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem] '>
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f7d1e1] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo9} alt="" className="w-[70%]" />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>Simplicity</span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold ">
            Things being made beautiful simple are at the heart of everything we do.
          </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem] '>
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f7d1e1] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo10} alt="" className="w-[70%]" />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>Simplicity</span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold ">
            We believe that the best way to make a product is to make it simple.
          </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem] '>
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f7d1e1] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo11} alt="" className="w-[70%]" />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>Simplicity</span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold ">
            We work on the relentless pursuit of simplicity in everything we do, from our products to our processes.
          </p>
        </div>

      </div>

      <div className="card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px] ">
        <div className="">
          <h1 className="text-blueColor text-[30px] font-bold">
            Ready to switch a career??
          </h1>
          <h2 className="text-textColor text-[25px] font-bold">Let`s get started!</h2>
          </div>
          <button className="border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor ">
            Get Started
          </button>
       
      </div>

    </div>
    
  )
}

export default Value
