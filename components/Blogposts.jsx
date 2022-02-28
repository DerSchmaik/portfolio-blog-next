import { Box, Button, Center, Flex, Heading, Tag, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function Blogposts({ posts, showMore, showCount }) {

  var visiblePosts = posts.slice(0, showCount); // get the posts to show
  if(visiblePosts.length == 0) visiblePosts = posts   // render all posts on server for SEO
  
  return (<>
    {/* Post Cards */}
    <VStack spacing="10px">
      {visiblePosts.map(post => (
        <PostCard key={post.title}
          name={post.title}
          imageURL={post.thumbnail}
          description={post.description}
          tags={post.categories}
          slug={post.slug}
          date={new Date(post.publishedAt).toLocaleDateString('de-DE')}
        />
      ))} 
    </VStack>

    {/* Show more button */}
    {showMore && <Center> 
      <Link href="/blog">
        <Button marginTop="5" marginBottom="20px" colorScheme="teal">
          Alle Beiträge sehen...
        </Button>
      </Link>
    </Center>}
  </>)
}

function PostCard({ name, imageURL, description, tags, slug, date}) {
  const description_color = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box width="100%" borderWidth='1px' borderRadius='lg' marginTop="20px" overflow="hidden">
      <Link href={`/blog/${slug}`}>
        <Box p='6'>
          {/* Tags & Date */}
          <Flex justifyContent='space-between'>
            <Flex justifyContent='space-between' alignItems='center'>
              <Box>
                {tags.map(tag => (
                  <Tag key={tag} marginRight="5px" size="sm">
                    {tag}
                  </Tag>
                ))}
              </Box>
            </Flex>
            <Box>
              {date && <Text as='span' color="gray.400" fontSize='sm'>
                {date}
              </Text> }
            </Box>
          </Flex>
          {/* Name  */}
          <Heading as='h3' size='md' marginTop="10px">
            {name}
          </Heading>
          {/* Description */}
          <Text as='p' color={description_color} fontSize='sm' marginTop="5px">
            {description}
          </Text>
        </Box>
      </Link>
    </Box>
  )
}