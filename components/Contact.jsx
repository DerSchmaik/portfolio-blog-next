import { EmailIcon } from "@chakra-ui/icons";
import { Button, Grid} from "@chakra-ui/react";
import { useState } from "react";
import { FaDiscord } from "react-icons/fa";

export default function Contact () {

  const [dcText, setDcText] = useState("Schmaik#3554")


  return (<>
    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
      <Button
        variant="outline"
        leftIcon={<FaDiscord />}
        marginTop="10px"
        width="100%"
        onClick={() => { 
          navigator.clipboard.writeText("Schmaik#3554"); 

          setDcText("Kopiert!");
          setTimeout(() => {
            setDcText("Schmaik#3554");
          }, 2000);
        }}
      >
        {dcText}
      </Button>
      <a 
        href="mailto:aiko.zimmermann@gmx.net" 
        target="_blank" rel="noopener noreferrer" 
        width="100%"
      >
        <Button 
          variant="outline" 
          leftIcon={<EmailIcon />} 
          marginTop="10px"
          width="100%"
        >
          Email
        </Button>
      </a>
    </Grid>
  </>)
}