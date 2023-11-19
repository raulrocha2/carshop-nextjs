"use client"
import { ICarProps } from '@/types'
import React, { useState } from 'react'
import Image from 'next/image'
import { calculateCarRent, generateCarImageUrl } from '@/utils'
import { CarDetails, CustomButton } from '@/components'


interface ICarCardProps {
  car: ICarProps
}
export function CarCard({ car }: ICarCardProps) {
  const { city_mpg, year, make, model, transmission, drive } = car
  const carRent = calculateCarRent(city_mpg, year)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='car-car group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>
      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>
          $
        </span>
          {carRent}
        <span className='self-end text-[14px] font-medium'>
          /day
        </span>
      </p>
      <div className='relative w-full h-40 my-3 object-contain'>
        <Image
          alt='car model'
          className='object-contain' fill priority
          src={generateCarImageUrl(car)}
        />
      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              src='/steering-wheel.svg'
              width={20}
              height={20}
              alt='steering wheel' 
            />
            <p className='text-[14px]'>
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              src='/tire.svg'
              width={20}
              height={20}
              alt='tire' 
            />
            <p className='text-[14px]'>
              {drive.toUpperCase()}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              src='/gas.svg'
              width={20}
              height={20}
              alt='gas' 
            />
            <p className='text-[14px]'>
              {city_mpg}
            </p>
          </div>
        </div>

        <div className='car-card__btn-container'>
          <CustomButton 
            title='View More'
            disabled={false}
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails 
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  )
}
