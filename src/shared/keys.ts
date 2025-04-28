import { readFileSync } from 'fs'

export const getKey = (): string => {
  const filePath = './keys.json'
  const fileContent = readFileSync(filePath, 'utf-8')
  const jsonContent = JSON.parse(fileContent)
  //console.log(jsonContent.OPENAI_API_KEY)
  return jsonContent.OPENAI_API_KEY
}
