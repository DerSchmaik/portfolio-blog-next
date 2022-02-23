import { Heading, HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import SocialButton from "./SocialButton";


export default function Title() {
  var allseconds = new Date().getTime() / 1000
  var secondsOfBirth = new Date("2006-05-12").getTime() / 1000

  const [seconds, setSeconds] = useState(Math.round(allseconds - secondsOfBirth))

  useEffect(()=>{
    let myInterval = setInterval(() => {
      setSeconds(seconds + 1)
    }, 1000)
    return ()=> {
      clearInterval(myInterval);
    };
  });

  return (<>
    <Heading size='3xl' marginTop="130px" as="h1" fontWeight='extrabold'> 
      Hallo Welt!
    </Heading>

    <Text>
        Ich bin <strong>Aiko</strong>  aka. <strong>Schmaik</strong>. Gerade bin ich {seconds} Sekunden alt. 
        Das entspricht ungefähr {Math.floor(seconds / 31557600)} Jahren.
    </Text>
    
    <HStack>
      <SocialButton name="TikTok" icon={ <FaTiktok /> } href="https://www.tiktok.com/@schmaiiik" />
      <SocialButton name="Youtube" icon={ <FaYoutube /> } href="https://www.youtube.com/channel/UCM7hqabymJChRgU8fUdWYxw" />
      <SocialButton name="Instagram" icon={ <FaInstagram /> } href="https://www.instagram.com/derschmaik/" />
    </HStack>
  </>)
}