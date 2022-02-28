import { Button, Center, Container, Heading, Link, Text } from "@chakra-ui/react";
import Blogposts from "../../components/Blogposts";
import Metadata from "../../components/Metadata";
import Title from "../../components/Title";
import sanity from '../../lib/sanity'

export default function Blog({ posts }) {
  return (<>
    <Metadata
      pageTitle="Schmaik | Blog"
      description="Hallo Welt! Ich bin Aiko aka. Schmaik und ein 15 Jähriger entwickler. Hier findest du alle meine Blogposts"
      keywords="schmaik, aiko, developer, full stack, teenager, projekte, fly or die"
      imageURL="https://i.imgur.com/EuBwo7m.jpg"
      shouldIndex={true}
    />    

    <Container maxW='container.md'>
      <Heading size='3xl' marginTop="130px" as="h1" fontWeight='extrabold'> 
        Blog( )
      </Heading>

      <Text marginTop={2}>
        Hier Poste ich gelegendlich übe Projekte, Hobbies, etc.
      </Text>

      <Blogposts posts={posts} showCount={1000}/>
    </Container>
  </>)
}

export async function getStaticProps() {
  const client = sanity

  const blogpostQuery = `*[_type == "post"]{
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    "categories": categories[]->title,
    "description": description,
    publishedAt,
  }`

  var posts = await client.fetch(blogpostQuery)

  return {
    props: {
      posts,
    },
  }
}
