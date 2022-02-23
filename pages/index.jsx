import { Box, Button, Center, Container, Flex, Heading, useBreakpointValue, useColorModeValue} from "@chakra-ui/react"
import Title from "../components/Title";
import ProjectCard from "../components/ProjectCard";
import Skills from "../components/Skills";
import { useState } from "react";
import Contact from "../components/Contact";
import Head from "next/head";

export default function Home({ projects }) {

  var showProjects = useBreakpointValue({ base: 3, sm: 4 });
  const [ additionalProjects, setAdditionalProjects ] = useState(0);
  var visibleProjects =  projects.slice(0, showProjects + additionalProjects);

  const favicon = useColorModeValue('faviconL.ico', 'faviconD.ico');

  return(<>
    <Head>
      <title>Schmaik | Home</title>

      <link rel="icon" href={`/${favicon}`} />
    </Head>

    <Container maxW='container.md'>
      <Title />


      <Heading size='lg' marginTop="40px"> Meine Projekte </Heading>
      <Flex flexWrap='wrap' justifyContent='space-between'>
        {visibleProjects.map(project => (
          <ProjectCard key={project.name}
            name={project.name}
            imageURL={project.imageURL}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </Flex>

      <Center> 
        {projects.length > (showProjects + additionalProjects) &&
        
        <Button marginTop="5" marginBottom="20px" variantColor="teal" onClick={() => {
          setAdditionalProjects(additionalProjects + 2);
        }}>
            Mehr anzeigen...
        </Button>}
      </Center>


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
  const r = await fetch('https://raw.githubusercontent.com/DerSchmaik/portfolio-blog-next/main/projects.json')
  const projects = await r.json()
  return {
    props: {
      projects
    }
  }
}