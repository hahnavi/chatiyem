import { LLM } from "@/types"

const GROQ_PLATORM_LINK = "https://groq.com/"

const DEEPSEEK_R1_DISTILL_LLAMA_70B: LLM = {
  modelId: "deepseek-r1-distill-llama-70b",
  modelName: "DeepSeek R1 Distill LLaMA-70B",
  provider: "groq",
  hostedId: "deepseek-r1-distill-llama-70b",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.75,
    outputCost: 0.99
  }
}

const DEEPSEEK_R1_DISTILL_LLAMA_70B_SPECDEC: LLM = {
  modelId: "deepseek-r1-distill-llama-70b-specdec",
  modelName: "DeepSeek R1 Distill LLaMA-70B-SpecDec",
  provider: "groq",
  hostedId: "deepseek-r1-distill-llama-70b-specdec",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.75,
    outputCost: 0.99
  }
}

const GEMMA2_9B_IT: LLM = {
  modelId: "gemma2-9b-it",
  modelName: "Gemma2 9B",
  provider: "groq",
  hostedId: "gemma2-9b-it",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.2,
    outputCost: 0.2
  }
}

const LLAMA_3_3_70B_VERSATILE: LLM = {
  modelId: "llama-3.3-70b-versatile",
  modelName: "LLaMA 3.3 70B",
  provider: "groq",
  hostedId: "llama-3.3-70b-versatile",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.59,
    outputCost: 0.79
  }
}

const LLAMA_3_3_70B_SPECDEC: LLM = {
  modelId: "llama-3.3-70b-specdec",
  modelName: "LLaMA 3.3 70B-SpecDec",
  provider: "groq",
  hostedId: "llama-3.3-70b-specdec",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.59,
    outputCost: 0.99
  }
}

export const GROQ_LLM_LIST: LLM[] = [
  DEEPSEEK_R1_DISTILL_LLAMA_70B,
  DEEPSEEK_R1_DISTILL_LLAMA_70B_SPECDEC,
  GEMMA2_9B_IT,
  LLAMA_3_3_70B_VERSATILE,
  LLAMA_3_3_70B_SPECDEC
]
