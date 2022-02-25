import { Button, Container, VStack } from '@chakra-ui/react';
import { AiFillAndroid } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import Title from '../components/Title';



export default function Links() {
  
  return(<>
    <Container>
      <Title />
      <VStack spacing={3} marginTop="5">
        <Link icon={<AiFillAndroid />} name="Fly or Die" url="https://play.google.com/store/apps/details?id=com.Schmaik.FlyorDie" />
        <Link icon={<FaDiscord />} name="Mein Discordserver" url="https://discord.gg/PYvj5r8PdR" />
      </VStack>
    </Container>  
  </>)
}

function Link({ icon, name, url }) {
  return (
    <a href={url} style={{width: "100%"}}>
      <Button 
        width="100%"
        variant="solid"
        variantColor="blue"
        leftIcon={icon}
      >
        {name}
      </Button>
    </a>
  )
}