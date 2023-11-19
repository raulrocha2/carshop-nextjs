import { ButtonHTMLAttributes, MouseEventHandler } from "react"

export interface ICustomButtonProps {
  title: string
  btnType?: "button" | "submit"
  disabled: boolean
  containerStyles?: string
  textStyles?: string
  rightIcon?: string
  isDisabled?: boolean
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface ISearchManufacturerProps {
  manufacturer: string
  setManufacturer: (manufacturer: string) => void
}


export interface ICarProps {
  city_mpg: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
  fuel_type: string
  highway_mpg: number
  make: string
  model: string
  transmission: string
  year: number
}

export interface IFilterPropos {
  manufacturer: string
  year: number
  fuel: string
  limit: number
  model: string
}

export interface IOptionsProps {
  title: string
  value: string
} 

export interface ICustomFilterProps {
  title: string
  options: IOptionsProps[]
}

export interface IShowMoreProps {
  pageNumber: number
  isNext: boolean
}