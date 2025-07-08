import { extendTheme } from "@chakra-ui/theme-utils"
import { theme as baseTheme } from '@chakra-ui/theme'
import { systemTokens } from "./tokens" 

const theme = extendTheme({
  ...baseTheme,
  ...systemTokens,
})

export default theme