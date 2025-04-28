import OpenAI from 'openai'

const initializeGPT = async () => {
  try {
    let key = await (window as any).context.getAPIKey()

    console.log('OpenAI API Key: ' + key)

    const client = new OpenAI({
      apiKey: key,
      baseURL: 'https://api.openai.com/v1/',
      dangerouslyAllowBrowser: true
    })

    return client
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const gpt = await initializeGPT()
