import { Box, Button, Flex, Tag, Text, Center, useBreakpointValue, useColorModeValue, Image, HStack} from "@chakra-ui/react"
import { useState } from "react";


export default function Projects({ projects }) {


  var showProjects = useBreakpointValue({ base: 3, sm: 4 }); // show 3 projects on Mobile, 4 on Desktop
  const [ additionalProjects, setAdditionalProjects ] = useState(0); // count of additional projects to show

  var visibleProjects =  projects.slice(0, (showProjects + additionalProjects)); // get the projects to show
  if(visibleProjects.length == 0) visibleProjects = projects   // render all projects on server for SEO

  return (<>
    {/* Project Cards */}
    <Flex flexWrap='wrap' justifyContent='space-between'>
      {visibleProjects.map(project => (
        <ProjectCard key={project.title}
          name={project.title}
          imageURL={project.thumbnail}
          description={project.description}
          tags={project.technologies}
          link={project.url}
          date={project.publishedAt}
        />
      ))}
    </Flex>

    {/* Show more button */}
    <Center> 
      {projects.length > (showProjects + additionalProjects) &&
      <Button marginTop="5" marginBottom="20px" colorScheme="teal" onClick={() => {
        setAdditionalProjects(additionalProjects + 4);
      }}>
          Mehr anzeigen...
      </Button>}
    </Center>
  </>)
}


function ProjectCard({ name, imageURL, description, tags, link, date}) {
  const description_color = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box maxW={['100vh', '48%']} borderWidth='1px' borderRadius='lg' marginTop="20px" overflow="hidden">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {imageURL && <Image src={imageURL} alt={name} height="200px" width="100%" fit="cover"/>}
        <Box p='6'>
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
          {link && 
            <Box>
              <Text as='span' color='teal.500' fontSize='sm'>
                Mehr sehen...
              </Text>
            </Box>
          }
        </Box>
      </a>
    </Box>
  )
}