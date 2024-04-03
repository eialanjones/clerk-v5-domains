import '@/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider
    signInUrl="https://mentorfy.com.br/"
      isSatellite={(url) =>
        !url.hostname.includes("mentorfy") &&
        !url.hostname.includes("localhost")
      }
      domain={(url) => {
        if (url.hostname.includes("mentorfy.")) {
          return "mentorfy.com.br";
        }
        return `${url.hostname.replace("app.", "")}`;
      }}
    {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  )
}

export default MyApp;
