import { EmailIcon } from "@chakra-ui/icons";
import { Button, VStack} from "@chakra-ui/react";
import { FaDiscord } from "react-icons/fa";

export default function Contact () {
  return (<>
    <VStack align='stretch'>
        <a 
          href="mailto:aiko.zimmermann@gmx.net" 
          target="_blank" rel="noopener noreferrer" 
        >
          <Button 
            variant="outline" 
            leftIcon={<EmailIcon />} 
            marginTop="10px"
          >
            Email
          </Button>
      </a>
      <a 
        href="https://discord.gg/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          leftIcon={<FaDiscord />}
          marginTop="5px"
        >
          Discord (Schmaik#3554)
        </Button>
      </a>
    </VStack>
  </>)
}