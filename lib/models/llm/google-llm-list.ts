import { LLM } from "@/types"

const GOOGLE_PLATORM_LINK = "https://ai.google.dev/"

// Google Models (UPDATED 02/08/25) -----------------------------

// Gemini 2.0 Flash
const GEMINI_2_0_FLASH: LLM = {
  modelId: "gemini-2.0-flash",
  modelName: "Gemini 2.0 Flash",
  provider: "google",
  hostedId: "gemini-2.0-flash",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini 2.0 Flash-Lite Preview
const GEMINI_2_0_FLASH_LITE_PREVIEW: LLM = {
  modelId: "gemini-2.0-flash-lite-preview-02-05",
  modelName: "Gemini 2.0 Flash-Lite Preview",
  provider: "google",
  hostedId: "gemini-2.0-flash-lite-preview-02-05",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini 1.5 Flash
const GEMINI_1_5_FLASH: LLM = {
  modelId: "gemini-1.5-flash",
  modelName: "Gemini 1.5 Flash",
  provider: "google",
  hostedId: "gemini-1.5-flash",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini 1.5 Flash-8B
const GEMINI_1_5_FLASH_8B: LLM = {
  modelId: "gemini-1.5-flash-8b",
  modelName: "Gemini 1.5 Flash-8B",
  provider: "google",
  hostedId: "gemini-1.5-flash-8b",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini 1.5 Pro (UPDATED 05/28/24)
const GEMINI_1_5_PRO: LLM = {
  modelId: "gemini-1.5-pro",
  modelName: "Gemini 1.5 Pro",
  provider: "google",
  hostedId: "gemini-1.5-pro-latest",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

export const GOOGLE_LLM_LIST: LLM[] = [
  GEMINI_2_0_FLASH,
  GEMINI_2_0_FLASH_LITE_PREVIEW,
  GEMINI_1_5_FLASH,
  GEMINI_1_5_FLASH_8B,
  GEMINI_1_5_PRO
]
