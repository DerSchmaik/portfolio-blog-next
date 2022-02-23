import { Box, Container, Heading,} from "@chakra-ui/react"
import Title from "../components/Title";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Head from "next/head";
import Projects from "../components/Projects";

export default function Home() {
  return(<>
    <Head>
      <title>Schmaik | Home</title>
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