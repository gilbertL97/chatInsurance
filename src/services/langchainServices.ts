import { Ollama } from '@langchain/ollama'
import { PromptTemplate } from '@langchain/core/prompts'
import type { Message } from 'ollama'
const ollamaHost = import.meta.env.VITE_OLLAMA_HOST
const otherModel = 'phi3.5'
const model = 'tinyllama'
const ollama = new Ollama({
  baseUrl: ollamaHost,
  model,
  temperature: 0
})

export function useLangchainServices() {
  const tryChat = async (input: Message) => {
    const messages = [
      { role: 'system', content: 'Eres un asistente útil que traduce inglés a francés.' },
      { role: 'human', content: input.content }
    ]
    const response = await ollama.invoke(messages)
    return response
  }
  return { tryChat }
}
