import { extendTheme, theme } from '@chakra-ui/react'

const customTheme = extendTheme({
  fonts: {
    ...theme.fonts,
    body: 'Roboto, sans-serif',
    heading: 'Krona One, serif',
  },
  colors: {
    ...theme.colors,
    primary: {
      100: "#E5FCF1",
      200: "#27EF96",
      300: "#10DE82",
      400: "#0EBE6F",
      500: "#0CA25F",
      600: "#0A864F",
      700: "#086F42",
      800: "#075C37",
      900: "#064C2E"
    }
    /** Example */
    // teal: {
    //   ...theme.colors.teal,
    //   700: "#005661",
    //   500: "#00838e",
    //   300: "#4fb3be",
    // },
  },
  components: {
    /** Example */
    // Button: {
    //   baseStyle: {
    //     borderRadius: 24,
    //   },
    // },
  },
})

export default customTheme
