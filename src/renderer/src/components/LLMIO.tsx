import { ComponentProps } from 'react'

export const LLMInput = ({ className, children, ...props}: ComponentProps<'form'>) => {
  return (
    <form className={className} {...props}>
        {children}
      <label htmlFor="llm-input">Enter your Query:</label>
      <input type="text" id="llm-input" />
    </form>
  )
}

export const LLMOutput = ({ className, children, ...props}: ComponentProps<'div'>) => {
  return (
    <div className={className} {...props}>
        {children}
      <label htmlFor="llm-output">Output:</label>
      <div id="llm-output" />
    </div>
  )
}

