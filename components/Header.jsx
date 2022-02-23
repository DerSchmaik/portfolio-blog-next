import { Box, Button, useColorMode, useColorModeValue, Flex, Spacer, IconButton} from "@chakra-ui/react"
import Link from 'next/link'
import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import { AiFillGithub } from "react-icons/ai"
import SocialButton from "./SocialButton"
 
export default function Header() {
  const btnColor = useColorModeValue('gray.700', 'white')
  const textColor = useColorModeValue('white', 'gray.700')
  const bgColor = useColorModeValue('white', 'gray.800')

  return (
    <Box position="fixed" bgColor={bgColor} width="100%" marginTop="-130px" p={4} zIndex="100">
      <Flex>
        <Link href="/">
          <Button bg={ btnColor } color={textColor} size='lg'>
              Schmaik
          </Button>
        </Link>
        <Spacer />
        <SocialButton name="Github" icon={ <AiFillGithub />} href="https://github.com/DerSchmaik" />
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

