import { Box, Container, Heading, useColorModeValue,} from "@chakra-ui/react"
import sanity from '../lib/sanity'
import Title from "../components/Title";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Metadata from "../components/Metadata";

export default function Home({ projects }) {
  return(<>
    <Metadata />    

    <Container maxW='container.md'>
      <Title />

      <Heading size='lg' marginTop="40px" as="h2"> Meine Projekte </Heading>
      <Projects projects={projects} />

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


export async function getStaticProps() {
  const client = sanity

  const query = `*[_type == "project"]{
    title,
    "thumbnail": thumbnail.asset->url,
    description,
    url,
    publishedAt,
    "technologies": technologies[]->title
  }`

  var projects = await client.fetch(query)

  return {
    props: {
      projects
    },
  }
}