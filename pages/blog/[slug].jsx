import { Container, Flex, Heading, Tag, Image, Link, Box, Divider, useColorModeValue } from '@chakra-ui/react';
import { PortableText } from '@portabletext/react';
import Metadata from '../../components/Metadata';
import sanity from '../../lib/sanity'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { foundation, atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function ArticlePage({ post }) {
  // Styling of the blog post
  const style = useColorModeValue(foundation, atomOneDark)
  const bg = useColorModeValue('#eee', '#282a34')

  const ptComponents = {
    marks: {
      link: ({children, value}) => {
        return (
          <Link href={value.href} isExternal color="teal">
            {children}
          </Link>
        )
      },
    },
    types: {
      code: ({ value }) => {
        if (!value || !value.code) { return null }
        return(
          <Box padding={3} bgColor={bg} borderRadius={6}>
            <SyntaxHighlighter language={value.language || 'text'} style={style}>
              {value.code}
            </SyntaxHighlighter>
          </Box>
        )
      }
    },
    block: {
      normal: ({ children }) => <Box marginTop={4} marginBottom={4}>{children}</Box>,
      h1: ({children}) => <><Heading as="h1" size="xl" marginTop="30px">{children}</Heading> <Divider /> </>,
      h2: ({children}) => <><Heading as="h2" size="lg" marginTop="30px">{children}</Heading> <Divider /></>,
      h3: ({children}) => <Heading as="h3" size="md" marginTop="30px">{children}</Heading>,
      h4: ({children}) => <Heading as="h4" size="sm" marginTop="30px">{children}</Heading>,
    },
    list: {
      bullet: ({ children }) => <Box as="ul" margin={5} >{children}</Box>,
      number: ({ children }) => <Box as="ol" margin={5} >{children}</Box>,
    },
  }

  return(<>
    <Metadata
      pageTitle={post.title}
      description={post.description}
      keywords={post.keywords}
      imageURL={post.mainImage}
      shouldIndex={true}
    />
    <Container maxW='container.md'>
      {post.mainImage ? <Image src={post.mainImage} marginTop="100px" alt={post.title} width="100vw" />: <Divider marginBottom="100px"/>}
      <Heading size='xl' as="h1" fontWeight='extrabold' marginTop="20px">
        {post.title}
      </Heading>
      <Flex marginTop={1} marginBottom={6}>
        {post.categories.map(category => (
          <Tag key={category} marginRight={2} height="8px">{category}</Tag>
        ))}
        <embed style={{'marginTop': "2px"}} src={`https://visitor-badge-reloaded.herokuapp.com/badge?page_id=schmaik.${post.slug}&style=flat-square`} />
      </Flex>

      <PortableText
        value={post.body}
        components={ptComponents}
      />
    </Container>
  </>)
}


export async function getStaticProps({ params }) {
  const client = sanity

  const post = await client.fetch(`*[_type == "post" && slug.current == "${params.slug}"]{
    title,
    description,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    "categories": categories[]->title,
    publishedAt,
    body,
  }[0]`);

  return {
    props: {
      post
    },
  }
}

export async function getStaticPaths() {
  const client = sanity

  const query = `*[_type == "post"]{
    "slug": slug.current
  }`
  const articles = await client.fetch(query)

  const paths = articles.map(article => ({
    params: {
      slug: article.slug,
    }
  }))

  return {
    paths,
    fallback: false
  }
}