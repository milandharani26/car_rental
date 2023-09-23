import React from 'react'
import  CustomeButton  from './CustomeButton'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
            Find Book or rent a car -- quickly and easily
        </h1>
        <p className='hero__subtitle'>
            streamline your  car rental experience with our effortsless booking process.
        </p>
        <CustomeButton />


      </div>
    </div>
  )
}

export default Hero
