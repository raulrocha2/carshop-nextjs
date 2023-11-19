'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { IShowMoreProps } from '@/types'
import { CustomButton } from '.'
import { updateSearchParams } from '@/utils'

export function ShowMore({ pageNumber, isNext }: IShowMoreProps) {
  const router = useRouter()

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10
    const newPathName = updateSearchParams('limit', `${newLimit}`)
    router.push(newPathName)
  }

  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNext && (
        <CustomButton 
          title='Show More'
          btnType='button'
          disabled={false}
          containerStyles='rounded-full bg-primary-blue text-white'
          handleClick={handleNavigation}
        />
      )}

    </div>
  )
}
