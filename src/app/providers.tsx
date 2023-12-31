// app/providers.tsx
'use client'

import Layout from "../components/Layout/Layout";
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from '../chakra/theme'
import { RecoilRoot } from "recoil"
export function Providers({ children }: { children: React.ReactNode }) {
  return (
  <RecoilRoot>
    <ChakraProvider theme={theme}>
    <Layout>
      {children}
    </Layout>
  </ChakraProvider>
  </RecoilRoot>
  )
}