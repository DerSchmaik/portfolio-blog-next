import { Box, Button, useColorMode, useColorModeValue, Flex, Spacer, IconButton, useToast, position} from "@chakra-ui/react"
import Link from 'next/link'
import SocialButton from "./SocialButton"
import Confetti from 'react-confetti'

import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import { AiFillGithub } from "react-icons/ai"
import { GiPartyPopper } from "react-icons/gi"
import { useState } from "react"
 
export default function Header() {
  const btnColor = useColorModeValue('gray.700', 'white')
  const btnColorHover = useColorModeValue('black', 'gray.100')
  const btnTextColor = useColorModeValue('white', 'gray.700')
  const headerBGColor = useColorModeValue('white', 'gray.800')

  return (
    <Box position="fixed" bgColor={headerBGColor} width="100%" p={4} zIndex="100">
      <Flex>
        <Link href="/">
          <Button bg={ btnColor } color={btnTextColor} size='lg' _hover={{ bg: {btnColorHover} }}>
              Schmaik
          </Button>
        </Link>
        <Spacer />
        <SocialButton name="Github" icon={ <AiFillGithub />} href="https://github.com/DerSchmaik/portfolio-blog-next" />
        <ColorModeButton />
        <FeiertagButton />
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

function FeiertagButton() {

  const feiertage = [
    {
      date: "2022-05-12",
      fname: "Heute ist Aikos 16. Geburtstag",
    },
    {
      date: "2023-05-12",
      fname: "Heute ist Aikos 17. Geburtstag",
    },
    {
      date: "2024-05-12",
      fname: "Heute ist Aikos 18. Geburtstag",
    },
    {
      date: "2022-01-01",
      fname: "Frohes Neujahr"
    },
    {
      date: "2022-04-15",
      fname: "Froher Karfreitag"
    },
    {
      date: "2022-04-18",
      fname: "Froher Ostermontag"
    },
    {
      date: "2022-05-01",
      fname: "Froher Tag der Arbeit"
    },
    {
      date: "2022-05-26",
      fname: "Frohes Christi Himmelfahrt"
    },
    {
      date: "2022-06-06",
      fname: "Froher Pfingstmontag"
    },
    {
      date: "2022-10-03",
      fname: "Froher Tag der deutschen Einheit"
    },
    {
      date: "2022-12-25",
      fname: "Froher 1. Weihnachtstag"
    },
    {
      date: "2022-12-26",
      fname: "Froher 2. Weihnachtstag"
    },
    {
      date: "2023-01-01",
      fname: "Frohes Neujahr"
    },
    {
      date: "2023-04-07",
      fname: "Froher Karfreitag"
    },
    {
      date: "2023-04-10",
      fname: "Froher Ostermontag"
    },
    {
      date: "2023-05-01",
      fname: "Froher Tag der Arbeit"
    },
    {
      date: "2023-05-18",
      fname: "Frohes Christi Himmelfahrt"
    },
    {
      date: "2023-05-29",
      fname: "Froher Pfingstmontag"
    },
    {
      date: "2023-10-03",
      fname: "Froher Tag der deutschen Einheit"
    },
    {
      date: "2023-12-25",
      fname: "Froher 1. Weihnachtstag"
    },
    {
      date: "2023-12-26",
      fname: "Froher 2. Weihnachtstag"
    },
    {
      date: "2024-01-01",
      fname: "Frohes Neujahr"
    },
    {
      date: "2024-03-29",
      fname: "Froher Karfreitag"
    },
    {
      date: "2024-04-01",
      fname: "Froher Ostermontag"
    },
    {
      date: "2024-05-01",
      fname: "Froher Tag der Arbeit"
    },
    {
      date: "2024-05-09",
      fname: "Frohes Christi Himmelfahrt"
    },
    {
      date: "2024-05-20",
      fname: "Froher  Pfingstmontag"
    },
    {
      date: "2024-10-03",
      fname: "Froher Tag der deutschen Einheit"
    },
    {
      date: "2024-12-25",
      fname: "Froher 1. Weihnachtstag"
    },
    {
      date: "2024-12-26",
      fname: "Froher 2. Weihnachtstag"
    }
  ]

  const today = feiertage.find(feiertag => feiertag.date == new Date().toISOString().split('T')[0])

  const toast = useToast()
  const [showConfetti, setShowConfetti] = useState(false)
  const [recicleConfetti, setRecicleConfetti] = useState(false)
  
  return(<>
    {today ? 
      <IconButton
        icon={<GiPartyPopper />}
        colorScheme="red"
        variant="ghost"
        size='lg'
        aria-label={`${today.fname}!`}
        onClick={() => {
          toast({
            title: `${today.fname}!`,
            status: "info",
            duration: 5000,
            isClosable: true,
            position: 'top'
          })
          setRecicleConfetti(true)
          setShowConfetti(true)

          setTimeout(() => {
            setRecicleConfetti(false)
          }, 4000)
        }}
      /> : null}
      <Confetti position="absulute" width={2000} height={1280} run={showConfetti} tweenDuration={5000} recycle={recicleConfetti}/>
  </>)
}