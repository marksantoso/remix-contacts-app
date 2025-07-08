import { chakra } from "@chakra-ui/react"

export const Button = chakra("button", {
  base: {
    display: "flex",
    padding: "8px 16px",
    borderRadius: "4px",
  },
  variants: {
    variant: {
      primary: { bg: "blue.600", color: "white", borderRadius: "md", _hover: { bg: "blue.700", cursor: "pointer" }, },
      secondary: { borderWidth: "1px", borderColor: "blue.600", color: "blue.600", bg: "white", borderRadius: "md", _hover: { bg: "blue.100", cursor: "pointer" }, },
      tertiary: { bg: "blue.400", color: "white", borderRadius: "md", _hover: { bg: "blue.500", cursor: "pointer" }, },
      danger: { bg: "red.600", color: "white", borderRadius: "md", _hover: { bg: "red.700", cursor: "pointer" }, },
      unstyled: {
        bg: "transparent",
        padding: 0,
        borderRadius: 0,
        height: "auto",
        minWidth: 0,
        _hover: { bg: "transparent" },
        _active: { bg: "transparent" },
        _focus: { boxShadow: "none" }
      }
    },
    size: {
      xs: { padding: "4px 6px", fontSize: "12px" },
      sm: { padding: "8px 12px", fontSize: "14px" },
      md: { padding: "10px 14px", fontSize: "16px" },
      lg: { padding: "12px 16px", fontSize: "18px" },
      xl: { padding: "14px 18px", fontSize: "20px" },
    },
  },
  defaultVariants: {
    variant: "primary"
  }
})