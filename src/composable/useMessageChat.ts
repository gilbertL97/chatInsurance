import type { Message } from "@/types/types";
import { ref } from "vue";
import { type ChatResponse } from "ollama";
import { Ollama } from "ollama";
export function useMessageChat() {


    const currentMessageOutput = ref('')
    const currentInput = ref('')

    const loading = ref()
    const containerChat = ref<HTMLElement | null>(null);
    const messages = ref<Message[]>([{
        role: 'agent', content: 'Hola soy ESIA en que puedo ayudarte hoy ?'
    }])
    const appendMessage = (respose: Message) => {
        const content = respose.content;
        if (content) {
            //console.log(content);
            messages.value.push({
                role: "agent",
                content: content,
            });
            scrollToBottom(true);
            // auto-chat: uncomment to have the agent interact with itself
            // i++;
            // setTimeout(() => {
            //   messageContent.value =
            //     i % 2 === 1
            //       ? `Pose a new question to me based on the main points of this text: \n\n---\n\n${content}\n\n---\n\n`
            //       : content;
            //   submitChat(event);
            // }, 0);
        }
        currentMessageOutput.value = "";
    }
    const submitChat = async (event: Event) => {
        if (
            event instanceof KeyboardEvent &&
            (event.altKey || event.shiftKey || event.ctrlKey)
        ) {
            return;
        }
        loading.value = true;
        const content = currentInput.value;
        currentInput.value = "";
        const inputMessage = { role: "user", content };
        messages.value.push(inputMessage);
        scrollToBottom(true);

        const response = await tryChat(inputMessage);
        loading.value = false;
        if (!response) return;

        // for await (const part of response) {
        //     const forceScroll = !currentMessageOutput.value;
        //     currentMessageOutput.value += part.message.content;
        //     setTimeout(() => {
        //scrollToBottom(forceScroll);
        //     }, 100);
        // }
        appendMessage(response.message);
    }

    const tryChat = async (
        inputMessage: Message,
    ): Promise<ChatResponse | undefined> => {
        let response;
        const otherModel = 'phi3.5'
        const model = 'tinyllama'
        const ollama = new Ollama({})
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

    const scrollToBottom = (force: boolean) => {
        if (!containerChat.value) return;
        // don't scroll if the user has scrolled up
        console.log(containerChat.value.scrollHeight - containerChat.value.scrollTop,
            containerChat.value.scrollTop,
            containerChat.value.clientHeight,
            containerChat.value.scrollHeight)
        if (
            !force &&
            containerChat.value.scrollHeight - containerChat.value.scrollTop >
            containerChat.value.clientHeight + 50
        ) {
            return;
        }
        containerChat.value.scrollTop = containerChat.value.scrollHeight + 100;
    };
    return {
        loading,
        messages,
        currentInput,
        currentMessageOutput,
        submitChat,
        containerChat,
    }
}