import { contextAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { ComponentProps } from 'react'

export const LLMInputForm = ({ className, children, ...props }: ComponentProps<'form'>) => {
  const setContext = useSetAtom(contextAtom)
  return (
    <form className={className} {...props}>
      {children}
      <label htmlFor="llm-input">Enter your Query:</label>
      <input
        type="text"
        id="llm-form-input"
        onChange={(e) => {
          setContext(e.target.value)
        }}
      />
    </form>
  )
}

export const LLMInput = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={className} {...props}>
      {children}
      <label htmlFor="llm-input" id="llm-input">
        Input:
      </label>
    </div>
  )
}

export const LLMOutput = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={className} {...props}>
      <label htmlFor="llm-output" id="llm-output">
        Output:
      </label>
      {children}
    </div>
  )
}
