import { Box, Button, Flex, Tag, Text, Center, useBreakpointValue, useColorModeValue, Image, HStack} from "@chakra-ui/react"
import { useState } from "react";

export default function Projects() {
  const projects = getProjectJson()

  var showProjects = useBreakpointValue({ base: 3, sm: 4 });
  const [ additionalProjects, setAdditionalProjects ] = useState(0);
  var visibleProjects =  projects.slice(0, (showProjects + additionalProjects));

  // render all projects on server for SEO
  if(visibleProjects.length == 0) visibleProjects = projects

  return (<>
    <Flex flexWrap='wrap' justifyContent='space-between'>
      {visibleProjects.map(project => (
        <ProjectCard key={project.name}
          name={project.name}
          imageURL={project.imageURL}
          description={project.description}
          tags={project.tags}
          link={project.link}
          date={project.date}
        />
      ))}
    </Flex>

    <Center> 
      {projects.length > (showProjects + additionalProjects) &&
      
      <Button marginTop="5" marginBottom="20px" onClick={() => {
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


function getProjectJson() {
  return [
    {
      name: "Fly or Die - A Funny Flapping Game",
      imageURL: `/thumbnails/flyordie.webp`,
      description: "Fly or Die ist ein Flappy Bird Clon, welcher um einige kleinere Features erweitert wurde. Meinen Fortschritt habe ich auf TikTok geteilt und viele Ideen aus der Communtiy umgesetzt.",
      link: "https://play.google.com/store/apps/details?id=com.Schmaik.FlyorDie",
      date: "2020",
      tags: [
        "Unity",
        "C#",
        "TikTok",
      ]
    },
    {
      name: "IServ Darkmode",
      imageURL: "/thumbnails/iserv.webp",
      description: "IServ Darkmode ist ein Projekt, das die Darkmode-Funktionalität von Iserv erweitert. Dieses Projekt wurde von mir selbst entwickelt und ist nicht von IServ gepflegt.",
      link: "https://github.com/DerSchmaik/Iserv-Darkmode",
      date: "2021",
      tags: [
        "Chrome Extensions",
        "JavaScript",
        "CSS"
      ]
    },
    {
      name: "Apple Music to Spotify playlist",
      imageURL: "/thumbnails/AppleToSpotify.webp",
      description: "Apple Music to Spotify Playlist ist ein Python Script, welches Playlists von Applemusic auf Spotify überträgt.",
      link: "https://github.com/DerSchmaik/applemusic_playlist_to_spotify",
      date: "02/2022",
      tags: [
        "Python",
        "Web Scraping",
        "REST API"
      ]
    },
    {
      name: "OPUS Greennet python Wrapper",
      imageURL: "/thumbnails/opus.webp",
      description: "OPUS Greennet python Wrapper ist eine python Liabary, welche einfachen umgang mit OPUS Greennet smarthome Geräten in Python ermöglicht.",
      link: "https://github.com/DerSchmaik/opus_greennnet_wrapper",
      date: "01/2022",
      tags: [
        "Python",
        "REST API",
        "pypi"
      ]
    },
    {
      name: "Festgruss.de",
      imageURL: "/thumbnails/festgruss.webp",
      description: "Festgruss.de ist eine kleine Website, welche es einem ermöglicht digitale Weihnachtsgrüße an Freunde zu senden. Es ist die erste richtige Website, die ich entwickelt habe.",
      link: "https://festgruss.de/weihnachten/create",
      date: "12/2020",
      tags: [
        "Vue.js",
        "JavaScript",
        "CSS",
        "Netlify"
      ]
    },
    {
      name: "Better Big Blue Button",
      description: "Better Big Blue Button ist ein Projekt, das die Funktionalität von Big Blue Button erweitert. Dieses Projekt wurde von mir selbst entwickelt und ist nicht von Big Blue Button gepflegt.",
      imageURL: "/thumbnails/betterbbb.webp",
      link: "https://github.com/DerSchmaik/better-bbb",
      date: "2021",
      tags: [
        "Chrome Extensions",
        "Vue.js",
        "JavaScript",
        "Reverse Engineering"
      ]
    },
    {
      name: "links.schmaik.net",
      imageURL: "/thumbnails/links.webp",
      description: "links.schmaik.net ist eine kleine Webseite, die eine Liste von Links anderen Websites zeigt. Es dient als eine Selbstprogrammierte linktr.ee alternative.",
      link: "https://github.com/DerSchmaik/links.schmaik.net",
      date: "2020",
      tags: [ 
        "Vue.js",
        "JavaScript",
        "Bootstrap"
      ]
    },
    {
      name: "Freundschaftstest",
      description: "Eine Website an welcher ich gerade Arbeite, auf welcher man Freundschaftstests über sich erstellen kann um diese dann an Freunde zu senden.",
      imageURL: "/thumbnails/freundschaft.webp",
      date: "2021-2022",
      tags: [
        "Nuxt.js",
        "Firebase",
        "Vuetify"
      ]
    },
    {
      name: "Vertretungsplan Scraper",
      description: "Vertretungsplan Scraper ist ein Python Script, welches den Vertretungsplan von einer Vertretungsplan.app Schule täglich scraped und als JSON für weitere Auswertung bereit stellt.",
      imageURL: "/thumbnails/vertretungsplan.webp",
      date: "01/2022",
      tags: [
        "Python",
        "Web Scraping",
        "Reverse Engineering"
      ]
    },
    {
      name: "Discord Bot",
      imageURL: "/thumbnails/discordbot.webp",
      description: "Discord Bot ist ein Discord Bot mit vielen Funktionen. Während dem Homeschooling konnte man Videokonferenzen bei ihm eintragen an welcher er einen dann erinnerte.",
      date: "03/2021",
      tags: [
        "JavaScript",
        "Discord.js",
        "Mongo DB"
      ]
    }
  ]
}