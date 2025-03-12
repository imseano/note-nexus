import { gpt } from '@shared/gpt'
import { ComponentProps } from 'react'
import { ActionButton } from './ActionButton'
export const TestLLMButton = ({ ...props }: ComponentProps<'button'>) => {
  const content = 'Hello, how are you?'

  async function testOpenAI() {
    const response = await gpt.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: content }]
    })

    const messageContent = response.choices[0].message.content
    console.log(messageContent)
    if (messageContent === null) {
      return
    } else {
      const llmInput = document.getElementById('llm-input')
      if (llmInput) {
        llmInput.innerHTML = 'Input: ' + content
      }
      const llmOutput = document.getElementById('llm-output')
      if (llmOutput) {
        llmOutput.innerHTML = 'Output: ' + messageContent
      }
    }
  }

  const testButton = () => {
    testOpenAI()
  }

  return (
    <ActionButton onClick={testButton} {...props}>
      Test LLM Button
    </ActionButton>
  )
}
