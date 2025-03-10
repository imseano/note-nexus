import OpenAI from 'openai'
import { ComponentProps } from 'react'
import { ActionButton } from './ActionButton'
export const TestLLMButton = ({ ...props }: ComponentProps<'button'>) => {
  const key = (window as any).context.getAPIKey()

  const client = new OpenAI({
    apiKey: key,
    baseURL: 'https://mockgpt.wiremockapi.cloud/v1',
    dangerouslyAllowBrowser: true
  })

  const content = 'Hello, world!'

  async function testOpenAI() {
    const response = await client.chat.completions.create({
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
