import { useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";

export default function Metadata() {
  const favicon = useColorModeValue('faviconL.ico', 'faviconD.ico');
  const tintColor = useColorModeValue('#fff', '#1a202c');

  return (
    <Head>
      <title>Schmaik | Home</title>
      <link rel="icon" href={`/${favicon}`} />

      <meta name="title" content="Schmaik.net" />
      <meta name="description" content="Hallo Welt! Ich bin Aiko aka. Schmaik und ein 15 Jähriger entwickler. Hier findest du alle meine Projekte und Infos." />
      <meta name="keywords" content="schmaik, aiko, developer, full stack, teenager, projekte, fly or die"/>
      <meta name="image" content="https://i.imgur.com/EuBwo7m.jpg" />
      <meta name="robots" content="index, follow"/>
      <meta name="language" content="German"/>
      <meta name="revisit-after" content="1 days"/>

      <meta property="og:title" content="Schmaik.net" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://schmaik.net" />
      <meta property="og:image" content="https://i.imgur.com/EuBwo7m.jpg" />
      <meta property="og:description" content="Hallo Welt! Ich bin Aiko aka. Schmaik und ein 15 Jähriger entwickler. Hier findest du alle meine Projekte und Infos." />
      <meta name="theme-color" content="#FF0000" />


      <meta name="theme-color" content={tintColor} />
      <meta name="msapplication-navbutton-color" content={tintColor} />
      <meta name="apple-mobile-web-app-status-bar-style" content={tintColor} />
    </Head>
  )
}