import { readFileSync } from "fs"



export const getKey = (): string => {
    const filePath = "./keys.json"
    const fileContent = readFileSync(filePath, "utf-8")
    const jsonContent = JSON.parse(fileContent)
    return jsonContent.OPENAI_API_KEY
}
