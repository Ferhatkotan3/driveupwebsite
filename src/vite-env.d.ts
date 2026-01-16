/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_TEMPLATE_ID: string
  readonly VITE_EMAILJS_PUBLIC_KEY: string
  readonly VITE_API_URL: string
  readonly DEV: boolean
  readonly MODE: string
  readonly PROD: boolean
  readonly SSR: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
