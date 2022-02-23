import { Box, Button, Center, Container, Flex, Heading, useBreakpointValue, useColorModeValue} from "@chakra-ui/react"
import Title from "../components/Title";
import ProjectCard from "../components/ProjectCard";
import Skills from "../components/Skills";
import { useState } from "react";
import Contact from "../components/Contact";
import Head from "next/head";

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

function Projects() {
  const projects = [
    {
      name: "Fly or Die - A Funny Flapping Game",
      imageURL: `/thumbnails/flyordie.webp`,
      description: "Fly or Die ist ein Flappy Bird Clon, welcher um einige kleinere Features erweitert wurde. Meinen Fortschritt habe ich auf TikTok geteilt und viele Ideen aus der Communtiy umgesetzt.",
      link: "https://play.google.com/store/apps/details?id=com.Schmaik.FlyorDie",
      tags: [
        "Unity",
        "C#",
        "TikTok"
      ]
    },
    {
      name: "links.schmaik.net",
      imageURL: "/thumbnails/links.webp",
      description: "links.schmaik.net ist eine kleine Webseite, die eine Liste von Links anderen Websites zeigt. Es dient als eine Selbstprogrammierte linktr.ee alternative.",
      link: "https://github.com/DerSchmaik/links.schmaik.net",
      tags: [
        "Vue.js",
        "JavaScript",
        "Bootstrap"
      ]
    },
    {
      name: "Apple Music to Spotify playlist",
      imageURL: "/thumbnails/AppleToSpotify.webp",
      description: "Apple Music to Spotify Playlist ist ein Python Script, welches Playlists von Applemusic auf Spotify überträgt.",
      link: "https://github.com/DerSchmaik/applemusic_playlist_to_spotify",
      tags: [
        "Python",
        "Web Scraping",
        "REST API"
      ]
    },
    {
      name: "Festgruss.de",
      imageURL: "/thumbnails/festgruss.webp",
      description: "Festgruss.de ist eine kleine Website, welche es einem ermöglicht digitale Weihnachtsgrüße an Freunde zu senden. Es ist die erste richtige Website, die ich entwickelt habe.",
      link: "https://festgruss.de/weihnachten/create",
      tags: [
        "Vue.js",
        "JavaScript",
        "CSS",
        "Netlify"
      ]
    },
    {
      name: "IServ Darkmode",
      imageURL: "/thumbnails/iserv.webp",
      description: "IServ Darkmode ist ein Projekt, das die Darkmode-Funktionalität von Iserv erweitert. Dieses Projekt wurde von mir selbst entwickelt und ist nicht von IServ gepflegt.",
      link: "https://github.com/DerSchmaik/Iserv-Darkmode",
      tags: [
        "Chrome Extensions",
        "JavaScript",
        "CSS"
      ]
    },
    {
      name: "OPUS Greennet python Wrapper",
      imageURL: "/thumbnails/opus.webp",
      description: "OPUS Greennet python Wrapper ist eine python Liabary, welche einfachen umgang mit OPUS Greennet smarthome Geräten in Python ermöglicht.",
      link: "https://github.com/DerSchmaik/opus_greennnet_wrapper",
      tags: [
        "Python",
        "REST API",
        "pypi"
      ]
    },
    {
      name: "Better Big Blue Button",
      description: "Better Big Blue Button ist ein Projekt, das die Funktionalität von Big Blue Button erweitert. Dieses Projekt wurde von mir selbst entwickelt und ist nicht von Big Blue Button gepflegt.",
      imageURL: "/thumbnails/betterbbb.webp",
      link: "https://github.com/DerSchmaik/better-bbb",
      tags: [
        "Chrome Extensions",
        "Vue.js",
        "JavaScript",
        "Reverse Engineering"
      ]
    },
    {
      name: "Freundschaftstest",
      description: "Eine Website an welcher ich gerade Arbeite, auf welcher man Freundschaftstests über sich erstellen kann um diese dann an Freunde zu senden.",
      imageURL: "/thumbnails/freundschaft.webp",
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
      tags: [
        "JavaScript",
        "Discord.js",
        "Mongo DB"
      ]
    }
  ]

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
        />
      ))}
    </Flex>

    <Center> 
      {projects.length > (showProjects + additionalProjects) &&
      
      <Button marginTop="5" marginBottom="20px" onClick={() => {
        setAdditionalProjects(additionalProjects + 2);
      }}>
          Mehr anzeigen...
      </Button>}
    </Center>
  </>)
}