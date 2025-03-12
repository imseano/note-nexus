import OpenAI from 'openai'

const initializeMockGPT = () => {
  const key = (window as any).context.getAPIKey()

  const client = new OpenAI({
    apiKey: key,
    baseURL: 'https://mockgpt.wiremockapi.cloud/v1',
    dangerouslyAllowBrowser: true
  })

  return client
}

export const mockGPT = initializeMockGPT()
