import { contextAtom, lastInputAtom, lastOutputAtom } from '@renderer/store'
import { useAtomValue, useSetAtom } from 'jotai'
import { ComponentProps } from 'react'
import { ActionButton } from './ActionButton'

export const TestLLMButton = ({ ...props }: ComponentProps<'button'>) => {
  let context = useAtomValue(contextAtom)
  let setLastInput = useSetAtom(lastInputAtom)
  let setLastOutput = useSetAtom(lastOutputAtom)
  if (context === null || context.length === 0) {
    console.error('Context is null')
    return null
  }

  async function testOpenAI() {
    console.log('Context being sent:', context)
    setLastInput(context)

    const res = await fetch('http://localhost:8000/query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: Array.isArray(context) ? context.join(' ') : context
      })
    })

    const data = await res.json()
    console.log(data.response)
    const response = data.response

    setLastOutput(response)
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
