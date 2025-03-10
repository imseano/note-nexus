import { ComponentProps } from 'react'

export const LLMInputForm = ({ className, children, ...props}: ComponentProps<'form'>) => {
  return (
    <form className={className} {...props}>
        {children}
      <label htmlFor="llm-input">Enter your Query:</label>
      <input type="text" id="llm-form-input" />
    </form>
  )
}

export const LLMInput = ({ className, children, ...props}: ComponentProps<'form'>) => {
  return (
    <div className={className} {...props}>
        <label htmlFor="llm-input" id="llm-input">Input:</label>
        {children}
    </div>
  )
}

export const LLMOutput = ({ className, children, ...props}: ComponentProps<'div'>) => {
  return (
    <div className={className} {...props}>
        <label htmlFor="llm-output" id="llm-output">Output:</label>
        {children}
    </div>
  )
}

