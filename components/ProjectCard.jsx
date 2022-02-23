import { Box, Flex, Tag, Text, useColorModeValue, Image } from "@chakra-ui/react"
import Link from "next/link";


export default function Project({ name, imageURL, description, tags, link}) {
  const description_color = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box maxW={['100vh', '48%']} borderWidth='1px' borderRadius='lg' marginTop="20px" overflow="hidden">
      {imageURL && <Image src={imageURL} alt={name} height="200px" width="100%" fit="cover"/>}
      <Box p='6'>
        <Flex justifyContent='space-between' alignItems='center'>
        <Box>
          {tags.map(tag => (
            <Tag key={tag} variantColor="teal" marginRight="5px" size="sm">
              {tag}
            </Tag>
          ))}
        </Box>
        </Flex>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h3'
          lineHeight='tight'
          isTruncated
        >
          {name}
        </Box>

        <Box as='span' color={description_color} fontSize='sm'>
          {description}
        </Box>
        {link && <a href={link} target="_blank" rel="noopener noreferrer">
          <Box>
            <Text as='span' color='teal.500' fontSize='sm'>
              Mehr sehen...
            </Text>
          </Box>
        </a>}
      </Box>
    </Box>
  )
}