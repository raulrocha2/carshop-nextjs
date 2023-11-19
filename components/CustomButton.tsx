"use client"
import { ICustomButtonProps } from '@/types'
import Image from 'next/image'

export function CustomButton({ 
    title, 
    btnType,
    disabled, 
    containerStyles, 
    textStyles,
    rightIcon,
    isDisabled,
    handleClick
  }: ICustomButtonProps) {
  return (
    <button
      disabled={disabled}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image
            src={rightIcon}
            alt='right icon'
            fill
            className='object-contain' 
          />
        </div>
      )}
    </button>
  )
}
