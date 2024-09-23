import { type ChatResponse, Ollama } from "ollama";
import type { Message } from "@/types/types";

const ollamaHost = import.meta.env.VITE_OLLAMA_HOST 
//const otherModel = 'phi3.5'
const model = 'tinyllama'
const ollama = new Ollama({host:ollamaHost})
export function useOllamaService () {
    const tryChat = async (
        inputMessage: Message,
    ): Promise<ChatResponse | undefined> => {
        let response;

        try {
            response = await ollama.chat({
                model,
                messages: [inputMessage],
                stream: false,
            });
            console.log(response)
            return response;
        } catch (error: any) {
            console.error(error);
            if (error.status_code === 404) {
                //await pullModelWithProgress(model);
                //response = await tryChat(model, inputMessage);
                //return response;
            }
            response = undefined
        }
    };
    return {
        tryChat,
    }
}