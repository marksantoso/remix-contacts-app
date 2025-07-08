import {
  ChakraProvider as BaseChakraProvider,
  createSystem,
  defaultConfig,
} from "@chakra-ui/react"
import theme from "~/theme"

export const ChakraProvider = ({ children }: { children: React.ReactNode }) => {
  const system = createSystem(defaultConfig, theme)

  return (
    <BaseChakraProvider value={system}>
      {children}
    </BaseChakraProvider>
  )
}