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

        const messageContent = response.choices[0].message.content;
        console.log(messageContent);
        if (messageContent === null) {
            return
        } else {
            document.getElementById("llm-input").innerHTML = "Input: " + content;
            document.getElementById("llm-output").innerHTML = "Output: " + messageContent;
        }

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