import { ComponentProps } from "react"
import { ActionButton } from "./ActionButton"
import OpenAI from "openai"
export const TestLLMButton = ({...props}: ComponentProps<'button'>) => {
    const key = window.context.getAPIKey()

    const client = new OpenAI({ 
        apiKey: key,
        baseURL: 'https://mockgpt.wiremockapi.cloud/v1',
        dangerouslyAllowBrowser: true,
    });

    const content = "Hello, world!";

    async function testOpenAI() {
        const response = await client.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: content}],
        });

        console.log(response.choices[0].message);
    }

    const testButton = () => {
        testOpenAI();
    }

    return (
        <ActionButton onClick={testButton} {...props}>
            Test LLM Button
        </ActionButton>
    )

}