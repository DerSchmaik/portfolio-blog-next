import { Box, Container, Heading, useColorModeValue,} from "@chakra-ui/react"
import Head from "next/head";
import Title from "../components/Title";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

export default function Home() {
  const favicon = useColorModeValue('faviconL.ico', 'faviconD.ico');
  const tintColor = useColorModeValue('#fff', '#1a202c');

  return(<>
    <Head>
      <title>Schmaik | Home</title>
      <link rel="icon" href={`/${favicon}`} />

      <meta name="title" content="Schmaik.net" />
      <meta name="description" content="Hallo Welt! Ich bin Aiko aka. Schmaik und ein 15 Jähriger entwickler. Hier findest du alle meine Projekte und Infos." />
      <meta name="keywords" content="schmaik, aiko, developer, full stack, teenager, projekte, fly or die"/>
      <meta name="image" content="https://i.imgur.com/EuBwo7m.jpg" />
      <meta name="robots" content="index, follow"/>
      <meta name="language" content="German"/>
      <meta name="revisit-after" content="1 days"/>

      <meta property="og:title" content="Schmaik.net" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://schmaik.net" />
      <meta property="og:image" content="https://i.imgur.com/EuBwo7m.jpg" />
      <meta property="og:description" content="Hallo Welt! Ich bin Aiko aka. Schmaik und ein 15 Jähriger entwickler. Hier findest du alle meine Projekte und Infos." />
      <meta name="theme-color" content="#FF0000" />


      <meta name="theme-color" content={tintColor} />
      <meta name="msapplication-navbutton-color" content={tintColor} />
      <meta name="apple-mobile-web-app-status-bar-style" content={tintColor} />
    </Head>

    <Container maxW='container.md'>
      <Title />

      <Heading size='lg' marginTop="40px" as="h2"> Meine Projekte </Heading>
      <Projects />

      <Heading as="h2" size="lg" marginTop="10" marginBottom="6">
        Ich bin vertraut mit...
      </Heading>
      <Skills spacingH="6" spacingV="6" IconSize={8}/>
        
      <Box marginBottom="10">
        <Heading size='lg' marginTop="40px"> Kontaktiere mich</Heading>
        <Contact />
      </Box>

    </Container>
  </>)
}