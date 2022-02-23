import { Box, Button, useColorMode, useColorModeValue, Flex, Spacer, IconButton} from "@chakra-ui/react"
import Link from 'next/link'
import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import { AiFillGithub } from "react-icons/ai"
import SocialButton from "./SocialButton"
 
export default function Header() {
  const btnColor = useColorModeValue('gray.700', 'white')
  const btnColorHover = useColorModeValue('black', 'gray.100')
  const btnTextColor = useColorModeValue('white', 'gray.700')
  const headerBGColor = useColorModeValue('white', 'gray.800')

  return (
    <Box position="fixed" bgColor={headerBGColor} width="100%" marginTop="-130px" p={4} zIndex="100">
      <Flex>
        <Link href="/">
          <Button bg={ btnColor } color={btnTextColor} size='lg' _hover={{ bg: {btnColorHover} }}>
              Schmaik
          </Button>
        </Link>
        <Spacer />
        <SocialButton name="Github" icon={ <AiFillGithub />} href="https://github.com/DerSchmaik/portfolio-blog-next" />
        <ColorModeButton />
      </Flex>
    </Box>
  )
}

function ColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode()
  const icon = colorMode === 'light' ? <MoonIcon /> : <SunIcon />

  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={icon}
      onClick={toggleColorMode}
      variant="ghost"
      size='lg'
    />
  )
}

