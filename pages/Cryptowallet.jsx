import React from 'react'
import Image from "next/image";
import Crypto from '../public/assets/Crypto.png'
import { RiRadioButtonFill } from 'react-icons/ri';
const Cryptowallet = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[40vh] lg:h-[55vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[40vh] lg:h-[55vh] bg-black/80 z-10'/>
            <Image
          className='absolute z-1'
          layout='fill'
          objectFit="cover"
          src={Crypto}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Champion Crypto Wallet</h2>
          <h3 className='py-2'>React / CSS / Javascript / CoingeckoAPI</h3>
        </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
        <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using React JS. Users
            are able to get variation of prices based on previous prices.
            You will be able to view  coins information as well as the famous
            Bitcoin ,Etherum,Teather coin prices. This is made possible with Coingecko API.
          </p>
          <a
            href='https://github.com/Meet8080/Crypto_Wallet'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
        </div>
        
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Axios
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Coin gecko API
              </p>
            </div>
            </div>
          
          </div>    
        </div>
    </div>
  )
}

export default Cryptowallet