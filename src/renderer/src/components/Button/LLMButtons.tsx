import { contextAtom } from '@renderer/store'
import { gpt } from '@shared/gpt'
import { useAtomValue } from 'jotai'
import { ComponentProps } from 'react'
import { ActionButton } from './ActionButton'

export const TestLLMButton = ({ ...props }: ComponentProps<'button'>) => {
  let context = useAtomValue(contextAtom)
  if (context === null || context.length === 0) {
    console.error('Context is null')
    return null
  }

  async function testOpenAI() {
    const response = await gpt.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: context }]
    })

    const messageContent = response.choices[0].message.content
    console.log(messageContent)
    if (messageContent === null) {
      return
    } else {
      const llmInput = document.getElementById('llm-input')
      if (llmInput) {
        llmInput.innerHTML = 'Input: ' + context
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
