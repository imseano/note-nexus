import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const TitleBar = ({ className, children, ...props }: ComponentProps<'header'>) => {
  return (
    <header
      className={twMerge('w-full h-8 bg-gray-800 text-white flex items-center px-4', className)}
      {...props}
    >
      {children}
    </header>
  )
}
