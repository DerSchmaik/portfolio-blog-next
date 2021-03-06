import { Box, Container, Divider, Heading, useColorModeValue,} from "@chakra-ui/react"
import sanity from '../lib/sanity'
import Title from "../components/Title";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Metadata from "../components/Metadata";
import Blogposts from "../components/Blogposts";

export default function Home({ projects, blogposts }) {
  return(<>
    <Metadata 
      pageTitle="Schmaik | Home"
      description="Hallo Welt! Ich bin Aiko aka. Schmaik und ein 15 Jähriger entwickler. Hier findest du alle meine Projekte und Infos."
      keywords="schmaik, aiko, developer, full stack, teenager, projekte, fly or die"
      imageURL="https://i.imgur.com/EuBwo7m.jpg"
      shouldIndex={true}
    />    

    <Container maxW='container.md'>
      <Title />

      <Heading as="h2" size="lg" marginTop="60px" marginBottom="6" >Ich bin Vertraut mit... </Heading>
      <Skills spacingH="6" spacingV="6" IconSize={8}/>

      <Heading size='lg' marginTop="40px" as="h2" > Projekte </Heading>
      <Projects projects={projects} />

      <Heading size='lg' marginTop="50px" as="h2" > Blog </Heading>
      <Blogposts posts={blogposts} showMore showCount={4}/>
        
      <Box marginBottom="10">
        <Heading size='lg' marginTop="60px" > Kontaktiere mich</Heading>
        <Contact />
      </Box>

    </Container>
  </>)
}


export async function getStaticProps() {
  const client = sanity

  const projectQuery = `*[_type == "project"]{
    title,
    "thumbnail": thumbnail.asset->url,
    description,
    url,
    publishedAt,
    "technologies": technologies[]->title
  }`

  const blogpostQuery = `*[_type == "post" && showOnHomepage == true]{
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    "categories": categories[]->title,
    "description": description,
    publishedAt,
  }[0...3]`

  var projects = await client.fetch(projectQuery)
  var blogposts = await client.fetch(blogpostQuery)

  return {
    props: {
      projects,
      blogposts,
    },
  }
}